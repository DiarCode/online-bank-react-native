import { View, Text } from "react-native";
import React, { FC } from "react";

interface TitleProps {
  title: string;
  centered: boolean;
}

export const Title: FC<TitleProps> = ({ title, centered = true }) => {
  return (
    <Text
      style={{ textAlign: centered ? "center" : "left" }}
      className="font-bold text-2xl text-gray-800"
    >
      {title}
    </Text>
  );
};
