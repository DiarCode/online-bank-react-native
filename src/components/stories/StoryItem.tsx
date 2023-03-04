import { View, Text, Pressable, ImageBackground } from "react-native";
import React, { FC } from "react";
import { IStory } from "../../types/story";
import { useStories } from "../../hooks/useStories";

interface StoryItemProps {
  story: IStory;
}

export const StoryItem: FC<StoryItemProps> = ({ story }) => {
  const { setActiveStories } = useStories();
  return (
    <Pressable onPress={() => setActiveStories(story)}>
      <View className="w-24 h-28 mr-2 rounded-2xl border-solid border-blue-400 p-[2px] border-2">
        <ImageBackground
          source={{ uri: story.images[0] }}
          resizeMode="cover"
          className="w-full h-full justify-end bg-gradient-to-t"
          imageStyle={{ borderRadius: 12 }}
        >
          <Text className="m-2 text-[12px] text-white">{story.title}</Text>
        </ImageBackground>
      </View>
    </Pressable>
  );
};

