import { setDoc, doc, getDoc } from "firebase/firestore";
import { User } from "../types/user";
import { db } from "../utils/firebase";
import { FREE_REQUESTS } from "../utils/constants";
import { saveUser } from "../utils/storage";

export const addNewUser = async (user: any): Promise<User | null> => {
  try {
    let requests = FREE_REQUESTS;
    let userToStore: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      requests,
      preferences: {
        darkMode: false,
      },
    };
    if (isNewUser(user.metadata.creationTime)) {
      await setDoc(doc(db, "users", user.uid), userToStore);
    } else {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        requests = docSnap.data()?.requests;
      }
    }
    const finalUser = { ...userToStore, isLoggedIn: true, requests };
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
