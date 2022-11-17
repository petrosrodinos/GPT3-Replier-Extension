import { db } from "../utils/firebase";

import { addDoc, collection, query, where, getDocs } from "firebase/firestore";
import { Reply } from "../types/replies";

export const addReview = async (review: any): Promise<boolean> => {
  try {
    const reviewsRef = collection(db, "replies");
    await addDoc(reviewsRef, review);
    return true;
  } catch (e) {
    console.error("Error adding document: ", e);
    return false;
  }
};

export const getReplies = async (userId: string): Promise<Reply[]> => {
  try {
    let replies: Reply[] = [];
    const docRef = collection(db, "replies");
    const q = query(docRef, where("userId", "==", userId));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc: any) => {
      replies.push(doc.data());
    });
    return replies;
  } catch (e) {
    console.error("Error adding document: ", e);
    return [];
  }
};
