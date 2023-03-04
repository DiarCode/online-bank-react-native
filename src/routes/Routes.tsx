import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../hooks/useAuth";
import { AuthScreen } from "../screens/auth/AuthScreen";
import { HomeScreen } from "../screens/home/HomeScreen";
import { PaymentsScreen } from "../screens/payments/PaymentsScreen";
import { ServicesScreen } from "../screens/services/ServicesScreen";
import { MoreScreen } from "../screens/more/MoreScreen";
import { SupportScreen } from "../screens/support/SupportScreen";
import { ProfileScreen } from "../screens/profile/ProfileScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Routes = () => {
  const { user } = useAuth();

  const renderedScreens = user ? (
    <>
      <Stack.Screen name={"Home"} component={HomeScreen} />
      <Stack.Screen name={"Payments"} component={PaymentsScreen} />
      <Stack.Screen name={"Services"} component={ServicesScreen} />
      <Stack.Screen name={"More"} component={MoreScreen} />
      <Stack.Screen name={"Support"} component={SupportScreen} />
      <Stack.Screen name={"Profile"} component={ProfileScreen} />
    </>
  ) : (
    <Stack.Screen name={"Auth"} component={AuthScreen} />
  );

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {renderedScreens}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export type RootStackParamList = {
  Home: undefined;
  Auth: undefined;
  Profile: undefined;
  Services: undefined;
  Support: undefined;
  Payments: undefined;
  More: undefined;
};

export type RootNavigationProp = NativeStackNavigationProp<RootStackParamList>;
