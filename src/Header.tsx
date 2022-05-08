import { useAuthState } from "react-firebase-hooks/auth";
import { SignOut } from "./SignOut";
import { SignIn } from "./SignIn";
import { auth } from "./App";

export const Header = () => {
  const [user] = useAuthState(auth);
  return <div>{user ? <SignOut /> : <SignIn />}</div>;
};
