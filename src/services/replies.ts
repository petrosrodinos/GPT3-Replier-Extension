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
import { openai } from "../utils/gpt3";

export const getAIReply = async (review: string): Promise<string> => {
  const state = store.getState().auth;

  const config = state.tags.join(" ");
  const prompt = `generate a ${config} response for the following review: ${review}`;
  let response: any;
  try {
    response = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: prompt,
      temperature: 0.7,
      max_tokens: 250,
      top_p: 1,
      presence_penalty: 0,
      frequency_penalty: 0.6,
      best_of: 1,
    });
    await substructRequestCount(state.uid, "ai-reply");
    const text = response.data.choices[0].text.trim();
    const reply = text || "could not generate a reply";

    return reply;
  } catch (error) {
    console.log(error);
  }

  return "could not generate a reply";
};

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

export const TEST_DATA = [
  "Reply 1",
  "Reply 2",
  "Reply 3",
  "Reply 4",
  "Reply 5",
  "Reply 6",
  "Reply 7",
  "Reply 8",
  "Reply 9",
  "Reply 10",
];

export function getRandomReply(): string {
  const index = randomNumber();
  const reply = TEST_DATA[index];
  return reply;
}

function randomNumber(min = 0, max = 9) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
