import { View, Text, TouchableOpacity, TouchableHighlight } from "react-native";
import React, { FC } from "react";
import { COLORS } from "../../styles/shared-styles";

interface ButtonProps {
  onPress: () => void;
  title: string;
  colors?: [string, string];
}

export const Button: FC<ButtonProps> = ({
  onPress,
  title,
  colors = [COLORS.yellow, COLORS.orange],
}) => {
  const buttonClassName = `text-gray-800 rounded-xl w-full p-4`;

  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors[1]}
      className={buttonClassName}
      style={{ backgroundColor: colors[0] }}
    >
      <Text className="text-center">{title}</Text>
    </TouchableHighlight>
  );
};
