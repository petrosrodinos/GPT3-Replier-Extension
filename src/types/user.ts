export interface User {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
  isLoggedIn?: boolean;
  settings: Settings | null;
  plan: Plan | null;
  userEntered?: boolean;
}

export interface Settings {
  tags: string[];
  replyFormat: "Review" | "Message" | "Email";
}

export interface Plan {
  requests: number;
  savedReplies: number;
}
