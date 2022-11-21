export const FREE_REQUESTS =
  parseInt(process.env.REACT_APP_FREE_REQUESTS) || 20;

export const SAVED_REPLIES =
  parseInt(process.env.REACT_APP_SAVED_REPLIES_COUNT) || 10;

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

export const TEST_REVIEWS = [
  "Amazing stay, place was beautiful and in good location. Highly recommend to anyone",
  "The place was great, the host was very helpful and the location was perfect. I would definitely stay here again.",
  "This hotel is horrible. The staff is rude and the rooms are dirty. I would never stay here again.",
  "The service is very slow and the rooms are not clean. I would not recommend this hotel to anyone.",
];

export const REPLY_TAGS = [
  "helpful",
  "proffesionnal",
  "funny",
  "sympathetic",
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

export const DEFAULT_TAGS = ["polite", "sympathetic", "helpful"];

export const MAX_TAGS = 5;

export const MIN_TAGS = 3;
