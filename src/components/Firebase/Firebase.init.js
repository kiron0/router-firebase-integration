import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLA4C_ZzHv-DmHifOJ7LdvgsAhMTO-naM",
  authDomain: "router-firebase-integrat-e31b3.firebaseapp.com",
  projectId: "router-firebase-integrat-e31b3",
  storageBucket: "router-firebase-integrat-e31b3.appspot.com",
  messagingSenderId: "814336849629",
  appId: "1:814336849629:web:c5355d5e90ddac6dd54d34"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;