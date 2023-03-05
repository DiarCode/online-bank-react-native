import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  FIREBASE_COLLECTIONS,
  firebaseAuth,
  firebaseDB,
} from "../config/firebase/firebase";
import {
  addDoc,
  collection,
  doc,
  limit,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { IProfile } from "../hooks/useProfile";
import { IStory } from "../types/story";
import { ICard } from "../types/card";

export class FirebaseService {
  static logout = () => {
    return signOut(firebaseAuth);
  };

  static register = (email: string, password: string) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  static login = (email: string, password: string) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  static addToUserCollection = (user: User) => {
    return addDoc(collection(firebaseDB, FIREBASE_COLLECTIONS.users), {
      userId: user.uid,
      displayName: "Enter your name",
    });
  };

  static getUserById = (id: string, cb: (p: IProfile) => void) => {
    onSnapshot(
      query(
        collection(firebaseDB, FIREBASE_COLLECTIONS.users),
        where("userId", "==", id),
        limit(1)
      ),
      s => {
        const profile = s.docs.map(d => ({
          ...d.data(),
          docId: d.id,
        }))[0] as IProfile;

        cb(profile);
      }
    );
  };

  static getStories = (cb: (s: IStory[]) => void) => {
    onSnapshot(
      query(collection(firebaseDB, FIREBASE_COLLECTIONS.stories)),
      s => {
        const stories = s.docs.map(
          d =>
            ({
              ...d.data(),
              id: d.id,
            } as IStory)
        );
        cb(stories);
      }
    );
  };

  static getCards = (userId: string, cb: (c: ICard[]) => void) => {
    onSnapshot(
      query(
        collection(firebaseDB, FIREBASE_COLLECTIONS.cards),
        where("userId", "==", userId)
      ),
      s => {
        const cards = s.docs.map(
          d =>
            ({
              ...d.data(),
              id: d.id,
            } as ICard)
        );
        cb(cards);
      }
    );
  };

  static updateProfileName = async (name: string, docId: string) => {
    const docRef = doc(firebaseDB, FIREBASE_COLLECTIONS.users, docId);

    await updateDoc(docRef, {
      displayName: name,
    });
  };
}
