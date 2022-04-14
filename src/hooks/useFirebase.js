import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../components/Firebase/Firebase.init";

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      setUser(user);
      console.log(user);
      navigate("/");
    })
    .catch((error) => {
      console.error(error);
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribe;
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return { user, signInWithGoogle, handleLogout };
};

export default useFirebase;
