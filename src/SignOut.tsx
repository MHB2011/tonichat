import { auth } from "./App";

export const SignOut = () => {
  const handleSignOut = () => {
    auth.signOut();
  };
  return (
    <div>
      {auth.currentUser ? (
        <button
          onClick={handleSignOut}
          className="bg-gray-400 rounded-lg p-2 text-neutral-100 hover:bg-gray-300"
        >
          Sign out
        </button>
      ) : (
        <p>Already logged in</p>
      )}
    </div>
  );
};
