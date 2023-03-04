import React, { FC } from "react";
import { ScrollView, SafeAreaView, View } from "react-native";

interface LayoutProps {
  children: React.ReactNode;
  isScrollable?: boolean;
}

export const Layout: FC<LayoutProps> = ({ children, isScrollable = true }) => {
  const renderedChildren = isScrollable ? (
    <ScrollView className="p-5 relative w-full h-full">{children}</ScrollView>
  ) : (
    <View className="p-5 relative w-full h-full">{children}</View>
  );
  return (
    <SafeAreaView className="flex-1 bg-white w-screen h-screen">
      {renderedChildren}
    </SafeAreaView>
  );
};
