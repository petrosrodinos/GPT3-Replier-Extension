import { setDoc, doc, getDoc } from "firebase/firestore";
import { User } from "../types/user";
import { db } from "../utils/firebase";
import { FREE_REQUESTS, SAVED_REVIEWS, DEFAULT_TAGS } from "../utils/constants";
import { saveUser } from "../utils/storage";

export const addNewUser = async (user: any): Promise<User | null> => {
  try {
    let tags = DEFAULT_TAGS;
    let plan = {
      requests: FREE_REQUESTS,
      savedReviews: SAVED_REVIEWS,
    };
    let userToStore: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      plan,
      tags,
    };
    if (isNewUser(user.metadata.creationTime)) {
      await setDoc(doc(db, "users", user.uid), userToStore);
    } else {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        plan = docSnap.data()?.plan;
        tags = docSnap.data()?.tags;
      }
    }
    const finalUser = {
      ...userToStore,
      isLoggedIn: true,
      plan,
      tags,
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
