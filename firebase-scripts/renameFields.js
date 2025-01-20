const admin = require("firebase-admin");
// 필드명 바꾸는 스크립트 만들기

// Firebase Admin SDK 초기화
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mentors-app-fb958.firebaseio.com",
});

console.log("Firebase Admin SDK initialized!");

const firestore = admin.firestore();

const renameField = async () => {
  const usersRef = firestore.collection("users");
  const snapshot = await usersRef.get();

  if (snapshot.empty) {
    console.log("'users' 컬렉션에 데이터가 없음");
    return;
  }

  const updatePromises = snapshot.docs.map(async (doc) => {
    const data = doc.data();
    console.log(`Document data for ${doc.id}:`, data); // 데이터 로드 확인용 로그

    const updates = {};
    const deleteFields = {};

    // 필드 존재 여부 확인 후 업데이트 데이터 구성
    if (data.createdAt !== undefined) {
      updates["create_at"] = data.createdAt;
      deleteFields["createdAt"] = admin.firestore.FieldValue.delete();
    }
    if (data.isDeleted !== undefined) {
      updates["is_deleted"] = data.isDeleted;
      deleteFields["isDeleted"] = admin.firestore.FieldValue.delete();
    }
    if (data.profilePhoto !== undefined) {
      updates["profile_photo"] = data.profilePhoto;
      deleteFields["profilePhoto"] = admin.firestore.FieldValue.delete();
    }

    // 업데이트 및 삭제 작업 로그 출력
    console.log(`Updates for ${doc.id}:`, updates);
    console.log(`Delete fields for ${doc.id}:`, deleteFields);

    try {
      if (Object.keys(updates).length > 0) {
        await doc.ref.update(updates);
        console.log(`Updated fields for ${doc.id}:`, updates);
      }
      if (Object.keys(deleteFields).length > 0) {
        await doc.ref.update(deleteFields);
        console.log(`Deleted fields for ${doc.id}:`, deleteFields);
      }
    } catch (error) {
      console.error(`Failed to update document ${doc.id}:`, error);
    }
  });

  await Promise.all(updatePromises);
  console.log("Field renaming completed for all documents.");
};

renameField().catch((err) => console.error("Error: ", err));
