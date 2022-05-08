import {
  setDoc,
  doc,
  Timestamp,
  DocumentData,
  DocumentReference,
} from "firebase/firestore";
import { useState } from "react";
import { auth } from "./App";
import { ChatMessage } from "./ChatMessage";
import { useCallback } from "react";
import { useMessages } from "./useMessages";

export interface Message {
  id: string;
  ref: DocumentReference<DocumentData>;
  text: string;
  createdAt: Timestamp;
  uid: string;
}

export const ChatRoom = () => {
  const [messages, messagesRef] = useMessages();

  const [text, setText] = useState("");

  const handleSendMessage = useCallback(
    async (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      message: string
    ) => {
      e.preventDefault();
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
    <div>
      {messages?.reverse().map((message) => {
        return <ChatMessage key={message.id} message={message} />;
      })}
      <form>
        <input
          className="flex border border-gray-300 p-1 rounded-md shadow-sm"
          type={"text"}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button type="submit" onClick={(e) => handleSendMessage(e, text)}>
          Send
        </button>
      </form>
    </div>
  );
};
