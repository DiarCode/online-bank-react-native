import { Text } from "react-native";
import React, { FC, useMemo } from "react";

interface AlertMessageProps {
  type?: "error" | "success" | "default";
  text: string;
}

export const AlertMessage: FC<AlertMessageProps> = ({
  type = "default",
  text,
}) => {
  const getContent = () => {
    switch (type) {
      case "error":
        return <Text className="text-center text-red-500">{text}</Text>;

      case "success":
        return <Text className="text-center text-green-500">{text}</Text>;

      case "default":
        return <Text className="text-center text-gray-800">{text}</Text>;
    }
  };

  const content = useMemo(() => {
    return getContent();
  }, [type]);

  return <>{content}</>;
};
