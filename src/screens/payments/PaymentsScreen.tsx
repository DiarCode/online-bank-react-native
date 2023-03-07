import { Text, View } from "react-native";
import React from "react";
import { Layout } from "../../components/layouts/Layout";
import { Title } from "../../components/title/Title";
import { PhoneTransfers } from "./components/PhoneTransfers";
import { Transfers } from "./components/Transfers";

export const PaymentsScreen = () => {
  return (
    <Layout>
      <Title title={"Payements"} centered />

      <View className="mt-8">
        <Text className="text-lg font-medium mb-4">Phone transfers</Text>
        <PhoneTransfers />
      </View>

      <View className="mt-8">
        <Text className="text-lg font-medium mb-4">Internet and commodity</Text>
        <Transfers />
      </View>
    </Layout>
  );
};
