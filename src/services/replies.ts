import { db } from "../utils/firebase";
import {
  addDoc,
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { Reply } from "../types/replies";
import store from "../redux/store";
import { updatePlan } from "../redux/actions/auth/authSlice";

export const addReply = async (reply: Reply): Promise<boolean> => {
  try {
    const reviewsRef = collection(db, "replies");
    await addDoc(reviewsRef, reply);
    await substructRequestCount(reply.userId, "stored-reply");
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

export const substructRequestCount = async (
  userId: string,
  requestType: string
): Promise<boolean> => {
  const state = store.getState();
  try {
    let plan = {
      requests: state.auth.plan?.requests || 0,
      savedReplies: state.auth.plan?.savedReplies || 0,
    };
    if (requestType === "stored-reply") {
      plan.savedReplies = plan.savedReplies - 1;
    } else if (requestType === "ai-reply") {
      plan.requests = plan.requests - 1;
    }
    store.dispatch(updatePlan(plan));
    const docRef = doc(db, "users", userId);
    await updateDoc(docRef, { plan });

    return true;
  } catch (e) {
    console.error("Error adding document: ", e);
    return false;
  }
};
