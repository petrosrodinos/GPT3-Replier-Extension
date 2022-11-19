export const FREE_REQUESTS =
  parseInt(process.env.REACT_APP_FREE_REQUESTS) || 20;

export const SAVED_REVIEWS =
  parseInt(process.env.REACT_APP_SAVED_REVIEWS) || 20;

export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY || "";

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

export const stripeConfig = {
  publishableKey: process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY,
  secretKey: process.env.REACT_APP_STRIPE_SECRET_KEY,
};

export const REPLY_TAGS = [
  "helpful",
  "proffesionnal",
  "funny",
  "sad",
  "happy",
  "angry",
  "sarcastic",
  "serious",
  "informative",
  "informal",
  "formal",
  "friendly",
  "unfriendly",
  "polite",
  "impolite",
  "negative",
  "positive",
  "neutral",
];

export const DEFAULT_TAGS = ["polite", "friendly", "helpful"];

export const MAX_TAGS = 5;
