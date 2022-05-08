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
    <div className={`container-message-${messageClass}`}>
      <p className={`message-${messageClass}`}>{text}</p>
    </div>
  );
};
