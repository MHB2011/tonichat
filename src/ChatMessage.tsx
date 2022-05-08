import { DocumentData } from "firebase/firestore";
import { auth } from "./App";

interface ChatMessageProps {
  message: DocumentData;
}

export const ChatMessage = ({ message: { text, uid } }: ChatMessageProps) => {
  const activeUser = auth.currentUser;
  const isMine = activeUser?.uid === uid;

  return (
    <div className={isMine ? "flex flex-row-reverse" : "flex"}>
      <div
        className={`bg-gray-300 px-2 rounded-lg max-w-[50%] ${
          !isMine ? "flex flex-row-reverse" : ""
        }`}
      >
        <p className={`text-gray-900 text-lg`}>{text}</p>
      </div>
    </div>
  );
};
