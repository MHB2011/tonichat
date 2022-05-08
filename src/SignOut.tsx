import { auth } from "./App";

export const SignOut = () => {
  const handleSignOut = () => {
    auth.signOut();
  };
  return (
    <div>
      {auth.currentUser ? (
        <button onClick={handleSignOut}>Sign out</button>
      ) : (
        <p>Already logged in</p>
      )}
    </div>
  );
};
