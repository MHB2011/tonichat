import { useAuthState } from "react-firebase-hooks/auth";
import { SignOut } from "./SignOut";
import { SignIn } from "./SignIn";
import { auth } from "./App";

export const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="bg-gray-500 py-6 px-2">
      <div className="">{user ? <SignOut /> : <SignIn />}</div>
    </div>
  );
};
