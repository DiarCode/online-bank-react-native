import { ActivityIndicator } from "react-native";
import { COLORS } from "../../styles/shared-styles";

export const Loader = () => {
  return <ActivityIndicator size="large" color={COLORS.blue} />;
};
