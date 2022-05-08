import { DocumentData } from "firebase/firestore";
import { auth } from "./App";

interface ChatMessageProps {
  message: DocumentData;
}

export const ChatMessage = ({ message: { text, uid } }: ChatMessageProps) => {
  const activeUser = auth.currentUser;
  const isMine = activeUser?.uid === uid;
  const messageClass = isMine ? "sent" : "received";

  return (
    <div
      className={`bg-gray-300 px-2 rounded-lg ${
        !isMine ? "flex flex-row-reverse" : ""
      }`}
    >
      <p className={`text-gray-900 text-lg`}>{text}</p>
    </div>
  );
};
