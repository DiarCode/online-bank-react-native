import { View, Text, ScrollView, FlatList, RefreshControl } from "react-native";
import React, { memo } from "react";
import { useCards } from "../../../hooks/useCards";
import { CardItem } from "../../../components/cards/CardItem";
import { ICard } from "../../../types/card";

const CardItemView = memo(({ c, i, s }: { c: ICard; i: number; s: number }) => {
  const bottomLine = <View className="border-b-2 border-[#E0E1E2]" />;

  return (
    <>
      <CardItem key={c.id} card={c} />
      {i + 1 !== s && bottomLine}
    </>
  );
});

export const CardsList = () => {
  const { cards, isLoading, loadData } = useCards();

  return (
    <FlatList
      data={cards}
      keyExtractor={c => c.id}
      renderItem={({ item, index }) => (
        <CardItemView key={item.id} c={item} i={index} s={cards.length} />
      )}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={loadData} />
      }
    />
  );
};
