export interface User {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
  isLoggedIn?: boolean;
  tags: string[];
  plan: Plan | null;
  userEntered?: boolean;
}

interface Plan {
  requests: number;
  savedReplies: number;
}
