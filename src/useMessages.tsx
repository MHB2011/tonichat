import {
  collection,
  orderBy,
  limit,
  query,
  QueryDocumentSnapshot,
  FirestoreDataConverter,
  WithFieldValue,
  DocumentData,
  SnapshotOptions,
  CollectionReference,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore } from "./App";
import { useMemo } from "react";
import { Message } from "./ChatRoom";

export function useMessages(): [
  Message[] | undefined,
  CollectionReference<Message>
] {
  const messagesConverter: FirestoreDataConverter<Message> = useMemo(
    () => ({
      toFirestore(message: WithFieldValue<Message>): DocumentData {
        return {
          text: message.text,
          createdAt: message.createdAt,
          uid: message.uid,
        };
      },
      fromFirestore(
        snapshot: QueryDocumentSnapshot,
        options: SnapshotOptions
      ): Message {
        const data = snapshot.data(options);
        return {
          id: snapshot.id,
          ref: snapshot.ref,
          text: data.text,
          createdAt: data.createdAt,
          uid: data.uid,
        };
      },
    }),
    []
  );

  const messagesRef = collection(firestore, "messages").withConverter(
    messagesConverter
  );

  const queryDocument = query(
    messagesRef,
    orderBy("createdAt", "desc"),
    limit(10)
  );

  const [messages] = useCollectionData(queryDocument);

  return [messages, messagesRef];
}
