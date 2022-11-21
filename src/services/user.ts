import { setDoc, doc, getDoc } from "firebase/firestore";
import { User, Settings } from "../types/user";
import { db } from "../utils/firebase";
import { FREE_REQUESTS, SAVED_REPLIES, DEFAULT_TAGS } from "../utils/constants";
import { saveUser } from "../utils/storage";

export const addNewUser = async (user: any): Promise<User | null> => {
  try {
    let settings: Settings = {
      tags: DEFAULT_TAGS,
      replyFormat: "Review",
    };
    let plan = {
      requests: FREE_REQUESTS,
      savedReplies: SAVED_REPLIES,
    };
    let userToStore: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      plan,
      settings,
    };
    if (isNewUser(user.metadata.creationTime)) {
      await setDoc(doc(db, "users", user.uid), userToStore);
    } else {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        plan = docSnap.data()?.plan;
        settings = docSnap.data()?.settings;
      }
    }
    const finalUser = {
      ...userToStore,
      isLoggedIn: true,
      plan,
      settings,
    };
    saveUser(finalUser);
    return finalUser;
  } catch (e) {
    console.error("Error adding document: ", e);
    return null;
  }
};

const isNewUser = (creationTime: string) => {
  if (new Date().getTime() - new Date(creationTime).getTime() < 5000) {
    return true;
  }
  return false;
};
