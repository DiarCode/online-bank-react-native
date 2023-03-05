import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { CreateCardDTO } from "../types/dto/create-card";
import { FIREBASE_COLLECTIONS, firebaseDB } from "../config/firebase/firebase";

export class CardsService {
  static addToCardsCollection = (dto: CreateCardDTO) => {
    const card = {
      userId: dto.userId,
      balance: 0,
      currency: dto.currency,
      type: dto.type,
      timestamp: serverTimestamp(),
      cardNumber: this.generateCardNumber(),
    };

    return addDoc(collection(firebaseDB, FIREBASE_COLLECTIONS.cards), card);
  };

  private static generateCardNumber = () => {
    let cardNumber = "";

    for (let i = 0; i < 4; i++) {
      const num = Math.floor(1000 + Math.random() * 9000);

      if (i !== 0) cardNumber += " ";
      cardNumber += num;
    }

    return cardNumber;
  };
}
