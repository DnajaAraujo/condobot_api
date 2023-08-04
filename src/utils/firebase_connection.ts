import * as admin from 'firebase-admin';

var serviceAccount = require("./../../app-condobot-firebase-adminsdk-6dl0s-ea0e2e8b83.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

export { db };