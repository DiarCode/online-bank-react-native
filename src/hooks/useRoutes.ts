import { useNavigation } from "@react-navigation/native";
import { RootNavigationProp } from "../routes/Routes";

export const useAppNavigation = () => useNavigation<RootNavigationProp>();
