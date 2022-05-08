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
      <button
        onClick={handleSignIn}
        className="bg-gray-100 rounded-lg p-2 text-neutral-900 hover:bg-gray-200"
      >
        Sign in with google
      </button>
    </div>
  );
};
