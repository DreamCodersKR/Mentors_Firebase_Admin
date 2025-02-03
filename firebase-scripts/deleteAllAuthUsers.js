const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mentors-app-fb958.firebaseio.com",
});

async function deleteAllUsers() {
  try {
    // 모든 사용자 삭제
    let pageToken;
    do {
      const userPage = await admin.auth().listUsers(1000, pageToken);
      const deletePromises = userPage.users.map((userRecord) =>
        admin.auth().deleteUser(userRecord.uid)
      );
      await Promise.all(deletePromises);
      pageToken = userPage.pageToken;
    } while (pageToken);
    console.log("All users have been deleted.");
  } catch (error) {
    console.error("Error deleting users:", error);
  }
}

// 실행
deleteAllUsers().catch((err) => console.error("Error: ", err));
