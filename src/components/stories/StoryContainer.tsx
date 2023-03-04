import { View, Text } from "react-native";
import React from "react";
import { useStories } from "../../hooks/useStories";

export const StoryContainer = () => {
  const { activeStories, setActiveStories } = useStories();

  return (
    <View>
      <Text>StoryContainer</Text>
    </View>
  );
};
