import { View, Text } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

import { COLORS } from "../../styles/shared-styles";
import { ICard } from "../../types/card";

interface CardImageProps {
  card: ICard;
}

export const CardImage: React.FC<CardImageProps> = ({ card }) => {
  const cardNumber = React.useMemo(() => {
    const l = card.cardNumber.length;
    return card.cardNumber.slice(l - 4, l);
  }, []);

  const cardColors = React.useMemo(() => {
    const m = new Map<string, string>();
    m.set("black", "bg-gray-900");
    m.set("standard", "bg-blue-600");
    return m;
  }, []);

  const cardColor = cardColors.get(card.type.toLowerCase()) || "bg-orange-900";

  return (
    <View className={`w-20 h-12 p-2 rounded-lg ${cardColor}`}>
      <View className="w-full h-full flex-row justify-between items-end">
        <Text className="text-white text-xs">{cardNumber}</Text>
        <FontAwesome5 name="cc-visa" size={15} color="white" />
      </View>
    </View>
  );
};
