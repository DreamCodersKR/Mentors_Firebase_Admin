const admin = require("firebase-admin");

// Firebase Admin SDK 초기화
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mentors-app-fb958.firebaseio.com", // 프로젝트 URL 변경
});

console.log("Firebase Admin SDK initialized!");

const firestore = admin.firestore();

const addCategories = async () => {
  const categories = [
    {
      cate_name: "IT/전문기술",
      what_for: "main",
      createdDt: admin.firestore.FieldValue.serverTimestamp(),
      isDeleted: false,
    },
    {
      cate_name: "예술",
      what_for: "main",
      createdDt: admin.firestore.FieldValue.serverTimestamp(),
      isDeleted: false,
    },
    {
      cate_name: "학업/교육",
      what_for: "main",
      createdDt: admin.firestore.FieldValue.serverTimestamp(),
      isDeleted: false,
    },
    {
      cate_name: "마케팅",
      what_for: "main",
      createdDt: admin.firestore.FieldValue.serverTimestamp(),
      isDeleted: false,
    },

    {
      cate_name: "자기개발",
      what_for: "board",
      createdDt: admin.firestore.FieldValue.serverTimestamp(),
      isDeleted: false,
    },
    {
      cate_name: "취업&커리어",
      what_for: "main",
      createdDt: admin.firestore.FieldValue.serverTimestamp(),
      isDeleted: false,
    },
    {
      cate_name: "금융/경제",
      what_for: "board",
      createdDt: admin.firestore.FieldValue.serverTimestamp(),
      isDeleted: false,
    },
    {
      cate_name: "기타",
      what_for: "board",
      createdDt: admin.firestore.FieldValue.serverTimestamp(),
      isDeleted: false,
    },

    // 추가 카테고리 데이터
    {
      cate_name: "스터디구함",
      what_for: "board",
      createdDt: admin.firestore.FieldValue.serverTimestamp(),
      isDeleted: false,
    },
    {
      cate_name: "공모전팀구함",
      what_for: "board",
      createdDt: admin.firestore.FieldValue.serverTimestamp(),
      isDeleted: false,
    },
    {
      cate_name: "일상공유",
      what_for: "board",
      createdDt: admin.firestore.FieldValue.serverTimestamp(),
      isDeleted: false,
    },
    {
      cate_name: "헛소리",
      what_for: "board",
      createdDt: admin.firestore.FieldValue.serverTimestamp(),
      isDeleted: false,
    },
  ];

  try {
    for (const category of categories) {
      const docRef = await firestore.collection("categories").add(category);
      console.log(`Category added with ID: ${docRef.id}`);
    }
    console.log("All categories added successfully!");
  } catch (error) {
    console.error("Error adding categories:", error);
  }
};

// 실행
addCategories().catch((err) => console.error("Error: ", err));
