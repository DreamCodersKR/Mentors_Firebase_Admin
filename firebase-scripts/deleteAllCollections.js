const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mentors-app-fb958.firebaseio.com",
});

const firestore = admin.firestore();

async function deleteSubCollections() {
  try {
    // 1. boards 컬렉션의 comments와 likes 서브 컬렉션 삭제
    const boardsRef = firestore.collection("boards");
    const boardsSnapshot = await boardsRef.get();
    const boardsBatch = firestore.batch();

    for (const boardDoc of boardsSnapshot.docs) {
      boardsBatch.delete(boardDoc.ref.collection("comments").doc());
      boardsBatch.delete(boardDoc.ref.collection("likes").doc());
    }
    await boardsBatch.commit();
    console.log("boards 컬렉션의 comments와 likes 서브 컬렉션 삭제 완료");

    // 2. chats 컬렉션의 messages 서브 컬렉션 삭제
    const chatsRef = firestore.collection("chats");
    const chatsSnapshot = await chatsRef.get();
    const chatsBatch = firestore.batch();

    for (const chatDoc of chatsSnapshot.docs) {
      chatsBatch.delete(chatDoc.ref.collection("messages").doc());
    }
    await chatsBatch.commit();
    console.log("chats 컬렉션의 messages 서브 컬렉션 삭제 완료");

    // 3. users 컬렉션의 recent_views 서브 컬렉션 삭제
    const usersRef = firestore.collection("users");
    const usersSnapshot = await usersRef.get();
    const usersBatch = firestore.batch();

    for (const userDoc of usersSnapshot.docs) {
      usersBatch.delete(userDoc.ref.collection("recent_views").doc());
    }
    await usersBatch.commit();
    console.log("users 컬렉션의 recent_views 서브 컬렉션 삭제 완료");
  } catch (error) {
    console.error("서브 컬렉션 삭제 중 오류 발생:", error);
  }
}

async function deleteMainCollections() {
  try {
    // 4. 상위 컬렉션 삭제
    const collectionNames = await admin
      .firestore()
      .listCollections()
      .then((collections) => collections.map((col) => col.id));

    for (const collectionName of collectionNames) {
      if (collectionName !== "categories" && collectionName !== "questions") {
        const collectionRef = admin.firestore().collection(collectionName);
        const snapshot = await collectionRef.get();
        const batch = admin.firestore().batch();

        for (const doc of snapshot.docs) {
          batch.delete(doc.ref);
        }

        await batch.commit();
        console.log(`Collection "${collectionName}" deleted successfully.`);
      }
    }

    console.log("모든 컬렉션(categories와 questions 제외) 삭제 완료");
  } catch (error) {
    console.error("상위 컬렉션 삭제 중 오류 발생:", error);
  }
}

async function deleteData() {
  try {
    await deleteSubCollections();
    await deleteMainCollections();
  } catch (error) {
    console.error("데이터 삭제 중 오류 발생:", error);
  }
}

// 실행
deleteData().catch((err) => console.error("Error: ", err));
