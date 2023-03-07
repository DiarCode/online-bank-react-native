import { memo } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { Avatar } from "../../../components/avatar/Avatar";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../../styles/shared-styles";
import { useAppNavigation } from "../../../hooks/useRoutes";

const PhoneTransferItem = memo(() => {
  return (
    <View className="items-center mr-5">
      <Avatar name={"Mike"} size={"large"} />
      <Text className="mt-[6px] text-gray-600">Mike</Text>
    </View>
  );
});

const CreateNewPhoneTransfer = () => {
  const { navigate } = useAppNavigation();
  return (
    <Pressable
      onPress={() => navigate("PhoneTransfer")}
      className="w-14 h-14 items-center mr-5 justify-center rounded-full border-[1px] border-blue-600"
    >
      <AntDesign name="plus" size={24} color={COLORS.blue} />
    </Pressable>
  );
};

export const PhoneTransfers = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <CreateNewPhoneTransfer />
      <PhoneTransferItem />
      <PhoneTransferItem />
      <PhoneTransferItem />
    </ScrollView>
  );
};
