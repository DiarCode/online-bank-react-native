import { View, Text } from "react-native";
import React, { Fragment } from "react";
import { useCards } from "../../../hooks/useCards";
import { CardItem } from "../../../components/cards/CardItem";
import { Loader } from "../../../components/customs/Loader";


export const CardsList = () => {
  const { cards, isLoading } = useCards();

  const bottomLine = <View className="border-b-2 border-[#E0E1E2]" />;

  const renderedCards =
    cards.length === 0 ? (
      <Text className="text-center text-lg text-gray-400">Cards not found</Text>
    ) : (
      cards.map((c, i) => (
        <Fragment key={c.id}>
          <CardItem key={c.id} card={c} />
          {i + 1 !== cards.length && bottomLine}
        </Fragment>
      ))
    );

  const renderedContent = isLoading ? <Loader /> : renderedCards;
  return <>{renderedContent}</>;
};
