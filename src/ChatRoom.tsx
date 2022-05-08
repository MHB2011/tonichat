import { Timestamp, DocumentData, DocumentReference } from "firebase/firestore";
import { ChatMessage } from "./ChatMessage";
import { useMessages } from "./useMessages";
import { SendMessageForm } from "./SendMessageForm";

export interface Message {
  id: string;
  ref: DocumentReference<DocumentData>;
  text: string;
  createdAt: Timestamp;
  uid: string;
}

export const ChatRoom = () => {
  const [messages] = useMessages();

  return (
    <div>
      {messages?.reverse()?.map((message) => {
        return (
          <div className="px-2" key={message.id}>
            <ChatMessage message={message} />
            <div className="h-2"></div>
          </div>
        );
      })}
      <SendMessageForm />
    </div>
  );
};
