import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../utils/constants";

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const analytics = getAnalytics(app);
