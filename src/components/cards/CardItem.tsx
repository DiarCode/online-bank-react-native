import { View, Text } from "react-native";
import React, { FC, ReactNode, useMemo } from "react";
import { ICard } from "../../types/card";
import {
  FontAwesome,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { COLORS } from "../../styles/shared-styles";
import { CardImage } from "./CardImage";

interface CardItemProps {
  card: ICard;
}

export const CardItem: FC<CardItemProps> = ({ card }) => {
  const currencyIcons = useMemo(() => {
    const m = new Map<string, ReactNode>();
    m.set("RUB", <FontAwesome name="ruble" size={14} color={COLORS.blue} />);
    m.set("USD", <Feather name="dollar-sign" size={14} color={COLORS.blue} />);
    m.set(
      "KZT",
      <MaterialCommunityIcons
        name="currency-kzt"
        size={14}
        color={COLORS.blue}
      />
    );

    return m;
  }, []);

  const currencyIcon = currencyIcons.get(card.currency) || (
    <MaterialCommunityIcons
      name="piggy-bank-outline"
      size={14}
      color={COLORS.blue}
    />
  );

  return (
    <View className="flex-row items-center justify-between my-5">
      <View className="flex-row items-center gap-x-4">
        <View className="bg-blue-500 rounded-full w-10 h-10 items-center justify-center">
          <View className="bg-blue-100 rounded-full w-6 h-6 items-center justify-center">
            <View>{currencyIcon}</View>
          </View>
        </View>

        <View>
          <Text className="text-gray-600">{card.type}</Text>
          <Text className="font-bold">
            {card.currency} {card.balance.toFixed(2)}
          </Text>
        </View>
      </View>

      <View>
        <CardImage card={card} />
      </View>
    </View>
  );
};
