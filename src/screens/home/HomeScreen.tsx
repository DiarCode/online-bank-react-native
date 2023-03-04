import { View, Text } from "react-native";
import React from "react";
import { Layout } from "../../components/layouts/Layout";
import { Header } from "./Header";
import { StoriesCarousel } from "../../components/stories/StoriesCarousel";
import { CardsList } from "./CardsList";
import { Button } from "../../components/customs/Button";

export const HomeScreen = () => {
  return (
    <Layout>
      <Header />

      <View className="mt-8">
        <StoriesCarousel />
      </View>

      <View className="mt-8">
        <CardsList />
      </View>

      <View className="flex-1 justify-end">
        <Button onPress={() => {}} title={"Apply for a new card"} />
      </View>
    </Layout>
  );
};
