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
      cate_name: "멘토링후기",
      what_for: "board",
      createdDt: admin.firestore.FieldValue.serverTimestamp(),
      isDeleted: false,
    },
    {
      cate_name: "팁과 노하우",
      what_for: "board",
      createdDt: admin.firestore.FieldValue.serverTimestamp(),
      isDeleted: false,
    },
    {
      cate_name: "고민상담",
      what_for: "board",
      createdDt: admin.firestore.FieldValue.serverTimestamp(),
      isDeleted: false,
    },
    {
      cate_name: "자격증&시험정보",
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
