import { db } from "../utils/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { TagsToSend } from "../types/tags";

export const addTags = async (userTags: TagsToSend): Promise<boolean> => {
  try {
    const { userId, tags } = userTags;
    const tagsRef = doc(db, "users", userTags.userId);
    await updateDoc(tagsRef, { tags: tags });
    return true;
  } catch (e) {
    console.error("Error adding document: ", e);
    return false;
  }
};
