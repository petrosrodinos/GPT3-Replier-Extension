export interface User {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
  requests: number;
  isLoggedIn?: boolean;
  preferences?: Preferances;
}

export interface Preferances {
  darkMode: boolean;
}
