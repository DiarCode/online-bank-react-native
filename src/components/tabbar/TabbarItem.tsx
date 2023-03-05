import { FC } from "react";
import { ITabbarItem } from "../../types/tabbar";
import { Pressable, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { RootStackParamList } from "../../routes/Routes";

interface TabbarItemProps {
  data: ITabbarItem;
  navigate: (v: keyof RootStackParamList) => void;
  currentRoute: string;
}

export const TabbarItem: FC<TabbarItemProps> = ({
  data,
  navigate,
  currentRoute,
}) => {
  const isActive = currentRoute === data.value;

  const activeClassName = isActive ? "text-blue-500" : "text-gray-500";

  const textClassName = `text-xs ${activeClassName}`;

  return (
    <Pressable
      className="items-center gap-y-1 text-gray-500"
      onPress={() => navigate(data.value)}
    >
      <AntDesign
        name={data.iconName}
        size={18}
        color={isActive ? "rgb(59 130 246)" : "rgb(107 114 128)"}
      />
      <Text className={textClassName}>{data.value}</Text>
    </Pressable>
  );
};
