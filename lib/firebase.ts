import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported, Analytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey:
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY ||
    "AIzaSyBzd0-8RRmykp_sVnRe3q_hjzN46NLUrDA",
  authDomain:
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ||
    "imparables-nexus.firebaseapp.com",
  projectId:
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "imparables-nexus",
  storageBucket:
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ||
    "imparables-nexus.firebasestorage.app",
  messagingSenderId:
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "738791639823",
  appId:
    process.env.NEXT_PUBLIC_FIREBASE_APP_ID ||
    "1:738791639823:web:18022438c326fd08a68c7a",
  measurementId:
    process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ||
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ||
    "G-Z3DF0P1ET2",
};

// Initialize Firebase safely
export const app =
  getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

let analyticsInstance: Analytics | null = null;

export const initAnalytics = async (): Promise<Analytics | null> => {
  if (typeof window !== "undefined") {
    try {
      const supported = await isSupported();
      if (supported) {
        if (!analyticsInstance) {
          analyticsInstance = getAnalytics(app);
        }
        return analyticsInstance;
      }
    } catch (err) {
      if (process.env.NODE_ENV === "development") {
        console.warn("[Firebase Analytics] Error initializing:", err);
      }
    }
  }
  return null;
};
