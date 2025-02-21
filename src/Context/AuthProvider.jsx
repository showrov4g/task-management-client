import { useEffect, useState } from "react";
import MyContext from "./MyContext";
import { auth } from "../firebase/firebase.init";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import axios from "axios";
import { toast } from "react-toastify";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const provider = new GoogleAuthProvider();
  console.log(user);
  // user create
  const createUserWithGoogle = async () => {
    setLoading(true);
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
    const { uid, email, displayName, photoURL } = user;
    await axios
      .post("http://localhost:5000/user", {
        uid,
        email,
        displayName,
      })
      .then((res) =>toast.success("user creating successfully") )
      .catch(err=>toast.error(err))
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const info = {
    user,
    createUserWithGoogle,
  };

  return <MyContext.Provider value={info}>{children}</MyContext.Provider>;
};

export default AuthProvider;
