import { User } from "../types/user";

export const saveUser = async (value: User) => {
  // chrome.storage.local.set({ user: value }, () => {});
  localStorage.setItem("user", JSON.stringify(value));
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
  localStorage.removeItem("user");
};
