import { setDoc, doc, Timestamp, collection } from "firebase/firestore";
import { useRef, useState } from "react";
import { auth, firestore } from "./App";
import { useCallback } from "react";
import { Message } from "./ChatRoom";

export const SendMessageForm = () => {
  const [text, setText] = useState("");

  const inputRef = useRef<HTMLInputElement | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const messagesRef = collection(firestore, "messages");

  const handleSendMessage = useCallback(
    async (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      message: string
    ) => {
      e.preventDefault();
      if (!message) return;
      inputRef.current?.focus();

      const currentUserId = auth.currentUser?.uid as string;
      setText("");

      await setDoc(doc(messagesRef), {
        text: message,
        createdAt: Timestamp.fromDate(new Date()),
        uid: currentUserId,
      } as Message);
    },
    [messagesRef]
  );

  return (
    <form className="px-2 py-2 flex">
      <input
        ref={inputRef}
        className="flex border border-gray-300 p-1 rounded-md shadow-sm w-full"
        type={"text"}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="w-6"></div>

      <button
        className="bg-emerald-500 p-3 rounded-lg text-gray-900"
        type="submit"
        onClick={(e) => handleSendMessage(e, text)}
      >
        Send
      </button>
    </form>
  );
};
