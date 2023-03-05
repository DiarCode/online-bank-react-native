import { View } from "react-native";
import React, { FC } from "react";
import { tabbarMenu } from "../../config/tabbar/tabbar";
import { TabbarItem } from "./TabbarItem";
import { RootStackParamList } from "../../routes/Routes";

interface TabbarProps {
  navigate: (v: keyof RootStackParamList) => void;
  currentRoute: string;
}

export const Tabbar: FC<TabbarProps> = ({ navigate, currentRoute }) => {
  return (
    <View
      className="flex-row justify-between items-center w-full 
        bg-gray-50 px-5 pb-10 pt-3 border-t-[#E1E1E1] border-t-[1px]"
    >
      {tabbarMenu.map(t => (
        <TabbarItem
          key={t.value}
          data={t}
          navigate={navigate}
          currentRoute={currentRoute}
        />
      ))}
    </View>
  );
};
