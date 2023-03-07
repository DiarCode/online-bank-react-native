import { View, Text } from "react-native";
import React, { FC } from "react";

interface AvatarProps {
  name: string;
  size?: "small" | "large";
}

export const Avatar: FC<AvatarProps> = ({ name, size = "small" }) => {
  const isSmall = size === "small";
  const sizeBasedStyle = `${isSmall ? "w-9 h-9" : "w-14 h-14"}`;
  const style = `rounded-full bg-gray-300 items-center justify-center ${sizeBasedStyle}`;

  const textStyle = `text-white font-medium ${isSmall ? "text-lg" : "text-xl"}`;
  return (
    <View className={style}>
      <Text className={textStyle}>{name.slice(0, 1)}</Text>
    </View>
  );
};
