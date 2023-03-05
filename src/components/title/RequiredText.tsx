import { View, Text } from "react-native";
import React from "react";

interface RequiredTextProps {
  title: string;
  boxClassName?: string;
  textClassName?: string;
}

export const RequiredText: React.FC<RequiredTextProps> = ({
  title,
  boxClassName,
  textClassName,
}) => {
  return (
    <View className={`flex-row gap-1 ${boxClassName}`}>
      <Text className={textClassName}>{title}</Text>
      <Text className="text-red-600 text-sm">*</Text>
    </View>
  );
};
