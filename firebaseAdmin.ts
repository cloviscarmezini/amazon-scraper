import * as admin from "firebase-admin";
import { getApps } from "firebase-admin/app";

// get it on your Firebase project page -> Project Settings -> Service accounts tab -> Generate new private key. 
// place on project ROOT.
const serviceAccount = require('./serviceAccountKey.json');

if(!getApps().length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
}

const adminDb = admin.firestore();

export { adminDb};