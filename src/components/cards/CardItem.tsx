import { View, Text } from "react-native";
import React, { FC } from "react";
import { ICard } from "../../types/card";

interface CardItemProps {
  card: ICard;
}

export const CardItem: FC<CardItemProps> = ({ card }) => {
  return (
    <View>
      <Text>{card.id}</Text>
    </View>
  );
};
