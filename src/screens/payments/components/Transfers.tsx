import { View, Text, ScrollView } from "react-native";
import React, { memo } from "react";
import { AntDesign } from "@expo/vector-icons";

const TransferItem = memo(() => {
  return (
    <View className="items-center mr-3 px-7 py-5 rounded-lg border-[1px] border-gray-400">
      <View className="rounded-full bg-blue-600 w-10 h-10 items-center justify-center">
        <AntDesign name="wifi" size={20} color="white" />
      </View>
      <Text className="mt-[6px] text-gray-600">Internet</Text>
    </View>
  );
});

export const Transfers = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <TransferItem />
      <TransferItem />
      <TransferItem />
      <TransferItem />
    </ScrollView>
  );
};
