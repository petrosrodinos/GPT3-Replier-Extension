import { db } from "../utils/firebase";
import { doc, updateDoc } from "firebase/firestore";

export const addTags = async (
  tags: string[],
  userId: string,
  replyFormat: string
): Promise<boolean> => {
  try {
    const tagsRef = doc(db, "users", userId);
    await updateDoc(tagsRef, { settings: { tags, replyFormat } });
    return true;
  } catch (e) {
    console.error("Error adding document: ", e);
    return false;
  }
};
