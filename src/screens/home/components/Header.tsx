import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { Entypo } from "@expo/vector-icons";
import { useProfile } from "../../../hooks/useProfile";
import { useAppNavigation } from "../../../hooks/useRoutes";
import { Loader } from "../../../components/customs/Loader";
import { Avatar } from "../../../components/avatar/Avatar";

export const Header = () => {
  const { isLoading, name } = useProfile();
  const { navigate } = useAppNavigation();
  const onNamePress = () => {
    navigate("Profile");
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <View className="flex flex-row items-center">
          <Avatar name={name} />
          <TouchableOpacity
            onPress={onNamePress}
            className="ml-4 flex flex-row items-center"
          >
            <Text className="text-2xl text-gray-800 font-bold">{name}</Text>
            <Entypo
              name="chevron-small-right"
              size={28}
              className="text-gray-800"
            />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};
