export interface User {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
  isLoggedIn?: boolean;
  tags?: string[];
  plan?: Plan | {};
}

interface Plan {
  requests: number;
  savedReviews: number;
}
