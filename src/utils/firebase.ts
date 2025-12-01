// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Debugging configuration (Safe - masking secrets)
const checkConfig = () => {
  const missingKeys = Object.entries(firebaseConfig)
    .filter(([key, value]) => !value)
    .map(([key]) => key);

  if (missingKeys.length > 0) {
    console.error(
      "[Firebase Config Error] The following environment variables are missing or empty:", 
      missingKeys.join(", ")
    );
    console.warn(
      "Ensure you have a .env file in your project root with valid VITE_FIREBASE_* keys."
    );
  } else {
    console.log("[Firebase Config] Successfully loaded configuration for project:", firebaseConfig.projectId);
  }
};

checkConfig();

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
