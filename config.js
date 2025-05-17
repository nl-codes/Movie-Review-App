import { firebaseDetails } from "./details.js";

export const firebaseConfig = {
    apiKey: firebaseDetails.FIREBASE_API_KEY,
    authDomain: firebaseDetails.FIREBASE_AUTH_DOMAIN,
    projectId: firebaseDetails.FIREBASE_PROJECT_ID,
    storageBucket: firebaseDetails.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: firebaseDetails.FIREBASE_MESSAGING_SENDER_ID,
    appId: firebaseDetails.FIREBASE_APP_ID,
    measurementId: firebaseDetails.FIREBASE_MEASUREMENT_ID,
};
