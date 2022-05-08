import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./App";

export const SignIn = () => {
  const handleSignIn = () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account",
    });
    signInWithPopup(auth, provider);
  };
  return (
    <div>
      <button onClick={handleSignIn}>Sign in with google</button>
    </div>
  );
};
