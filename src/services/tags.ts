import { db } from "../utils/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { TagsToSend } from "../types/tags";

export const addTags = async (tags: TagsToSend): Promise<boolean> => {
  try {
    const { userId, ...Tags } = tags;
    const tagsRef = doc(db, "user", tags.userId);
    await updateDoc(tagsRef, { tags: Tags });
    return true;
  } catch (e) {
    console.error("Error adding document: ", e);
    return false;
  }
};
