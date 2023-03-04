export type CardType = "Black" | "Standard";
export type Currency = "RUB" | "USD" | "KZT";

export interface ICard {
  id: string;
  userId: string;
  balance: number;
  currency: Currency;
  type: CardType;
}
