import { StatusBar } from "expo-status-bar";
import React, { FC, useMemo } from "react";
import { ScrollView, SafeAreaView, View, Platform } from "react-native";

interface LayoutProps {
  children: React.ReactNode;
  isScrollable?: boolean;
}

export const Layout: FC<LayoutProps> = ({ children, isScrollable = true }) => {
  const layoutClassName = useMemo(() => {
    const paddingByOS = Platform.OS === "android" ? "pt-16" : "";
    return `flex flex-1 p-3 relative w-full h-full ${paddingByOS}`;
  }, [isScrollable]);

  const renderedChildren = isScrollable ? (
    <ScrollView className={layoutClassName}>{children}</ScrollView>
  ) : (
    <View className={layoutClassName}>{children}</View>
  );
  return (
    <SafeAreaView className="flex-1 bg-white w-screen h-screen">
      <StatusBar style="dark" />
      {renderedChildren}
    </SafeAreaView>
  );
};
