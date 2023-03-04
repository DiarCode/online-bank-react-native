import { View } from "react-native";
import React from "react";
import { Layout } from "../../components/layouts/Layout";
import { StoriesCarousel } from "../../components/stories/StoriesCarousel";
import { CardsList } from "./components/CardsList";
import { Button } from "../../components/customs/Button";
import { Header } from "./components/Header";

export const HomeScreen = () => {
  return (
    <Layout isScrollable={false}>
      <Header />

      <View className="mt-8">
        <StoriesCarousel />
      </View>

      <View className="mt-8 flex-1">
        <CardsList />
      </View>

      <View className="absolute bottom-0 w-screen p-5">
        <Button onPress={() => {}} title={"Apply for a new card"} />
      </View>
    </Layout>
  );
};
