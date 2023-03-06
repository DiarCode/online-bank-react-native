import { useCallback, useEffect, useMemo, useState } from "react";
import { FirebaseService } from "../services/firebase";
import { ICard } from "../types/card";
import { useAuth } from "./useAuth";

export const useCards = () => {
  const { user } = useAuth();
  const [cards, setCards] = useState<ICard[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadData = useCallback(() => {
    if (!user) return;
    setIsLoading(true);
    FirebaseService.getCards(user.uid, c => {
      setCards(c);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    loadData();
  }, []);

  const values = useMemo(
    () => ({ cards, isLoading, loadData }),
    [isLoading, cards]
  );

  return values;
};
