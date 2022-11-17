import { db } from "../utils/firebase";

import { setDoc, doc, getDoc, addDoc, collection } from "firebase/firestore";

export const addReview = async (review: any): Promise<boolean> => {
  try {
    const reviewsRef = collection(db, "reviews");
    await addDoc(reviewsRef, review);
    return true;
  } catch (e) {
    console.error("Error adding document: ", e);
    return false;
  }
};
