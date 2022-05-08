import "./App.css";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { ChatRoom } from "./ChatRoom";
import { Header } from "./Header";

const app = initializeApp({
  apiKey: "AIzaSyA9c0Xhap91Fc5WeuKKaU4GG8vjMECdpY8",
  authDomain: "tonichat-da63b.firebaseapp.com",
  projectId: "tonichat-da63b",
  storageBucket: "tonichat-da63b.appspot.com",
  messagingSenderId: "542318093644",
  appId: "1:542318093644:web:32c1b206be5360cfd19be9",
});

export const auth = getAuth(app);
export const firestore = getFirestore(app);

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="container bg-gray-600 min-h-screen min-w-full">
      <Header />

      {user ? (
        <div>
          <div className="py-3 px-2">
            <h1 className="text-lg text-neutral-100">Anonymous chat</h1>
          </div>

          <ChatRoom />
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[20rem]">
          <h1 className="text-xl text-neutral-100">Sing in to get started</h1>
        </div>
      )}
    </div>
  );
}

export default App;
