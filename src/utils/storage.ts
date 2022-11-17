import { User } from "../types/user";
import { login, logout } from "../redux/actions/auth/authSlice";
import store from "../redux/store";
import { logoutUser } from "../services/auth";

export const saveUser = async (user: User) => {
  // chrome.storage.local.set({ user: value }, () => {});
  store.dispatch(login(user));
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUser = (): User | null => {
  // chrome.storage.local.get(["user"], function (result: any) {
  //   console.log("Value currently is " + result.key);
  // });
  const user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  }
  return null;
};

export const removeUser = () => {
  // chrome.storage.local.remove(["user"], function () {});
  store.dispatch(logout());
  localStorage.removeItem("user");
};

window.addEventListener("storage", () => {
  const user = getUser();
  if (!user) {
    store.dispatch(logout());
    logoutUser();
  }
});
