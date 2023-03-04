import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useStories } from "../../hooks/useStories";
import { Loader } from "../customs/Loader";
import { StoryItem } from "./StoryItem";

export const StoriesCarousel = () => {
  const { stories, isLoading } = useStories();
  const renderedStories = stories.map(s => <StoryItem key={s.id} story={s} />);
  return (
    <View>
      {isLoading ? (
        <Loader />
      ) : (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {renderedStories}
        </ScrollView>
      )}
    </View>
  );
};
