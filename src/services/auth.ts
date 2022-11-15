import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "../utils/firebase";
import store from "../redux/store";
import { login, logout } from "../redux/actions/auth/authSlice";
import { getUser, removeUser } from "../utils/storage";

const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (!user) {
    store.dispatch(logout());
    removeUser();
  } else {
    const user = getUser();
    if (user) {
      store.dispatch(login(user));
    }
  }
});

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export const signInWithGoogle = (): Promise<any> => {
  return signInWithPopup(auth, googleProvider);
};

export const signInWithFacebook = (): Promise<any> => {
  return signInWithPopup(auth, facebookProvider);
};

export const getLoggedUser = () => {
  return auth.currentUser;
};

export const logoutUser = () => {
  auth.signOut().then(() => {});
};
