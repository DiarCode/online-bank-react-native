import { RootStackParamList } from "../routes/Routes";
import { AntDesign } from "@expo/vector-icons";

export interface ITabbarItem {
  iconName: keyof typeof AntDesign.glyphMap;
  value: keyof RootStackParamList;
}
