import { FirebaseApp, initializeApp } from "firebase/app";
import { Analytics, AnalyticsCallOptions, getAnalytics, isSupported, logEvent } from "firebase/analytics";
import { Auth, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

let analytics: Analytics | null = null;
let auth: Auth | null = null;

const initializeFirebase = async () => {
  if (typeof window !== "undefined") {
    const app: FirebaseApp = initializeApp(firebaseConfig);
    analytics = getAnalytics(app);
    auth = getAuth(app);
  }
};

const log = (analytics: Analytics | null, eventName: string, eventParams?: { [key: string]: any }, options?: AnalyticsCallOptions) => {
  if (analytics) {
    logEvent(analytics, eventName, eventParams, options);
  } else {
    console.warn("Firebase Analytics is don't available");
  }
};


initializeFirebase();

export { analytics, auth, log };