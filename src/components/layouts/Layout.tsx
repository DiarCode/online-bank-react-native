import React, { FC, useMemo } from "react";
import { ScrollView, SafeAreaView, View, Platform } from "react-native";

interface LayoutProps {
  children: React.ReactNode;
  isScrollable?: boolean;
}

export const Layout: FC<LayoutProps> = ({ children, isScrollable = true }) => {
  const style = useMemo(() => {
    const paddingByOS = Platform.OS === "android" ? "pt-16" : "";
    return `flex flex-1 p-5 relative w-full h-full ${paddingByOS}`;
  }, [isScrollable]);

  const renderedChildren = isScrollable ? (
    <ScrollView className={style}>{children}</ScrollView>
  ) : (
    <View className={style}>{children}</View>
  );
  return (
    <SafeAreaView className="flex-1 bg-white w-screen h-screen">
      {renderedChildren}
    </SafeAreaView>
  );
};
