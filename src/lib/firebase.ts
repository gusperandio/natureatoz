import {
  Analytics,
  AnalyticsCallOptions,
  getAnalytics,
  logEvent,
} from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const log = (
  analytics: Analytics | null,
  eventName: string,
  eventParams?: { [key: string]: any },
  options?: AnalyticsCallOptions
) => {
  if (analytics) {
    logEvent(analytics, eventName, eventParams, options);
  }
};

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
// const analytics = getAnalytics(app);
export { log, storage };
