import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { useAuth } from "../hooks/useAuth";
import { HomeScreen } from "../screens/home/HomeScreen";
import { PaymentsScreen } from "../screens/payments/PaymentsScreen";
import { ServicesScreen } from "../screens/services/ServicesScreen";
import { MoreScreen } from "../screens/more/MoreScreen";
import { SupportScreen } from "../screens/support/SupportScreen";
import { ProfileScreen } from "../screens/profile/ProfileScreen";
import { CreateCardScreen } from "../screens/create-card/CreateCardScreen";
import { Tabbar } from "../components/tabbar/Tabbar";
import { useEffect, useState } from "react";
import { PhoneTransferScreen } from "../screens/payments/PhoneTransferScreen";
import { LoginScreen } from "../screens/auth/LoginScreen";
import { SignupScreen } from "../screens/auth/SignupScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Routes = () => {
  const { user } = useAuth();
  const navRef = useNavigationContainerRef();

  const [name, setName] = useState<string | undefined>(undefined);

  useEffect(() => {
    const lt = navRef.addListener("state", () => {
      setName(navRef.getCurrentRoute()?.name);
    });

    return () => navRef.removeListener("state", lt);
  }, []);

  useEffect(() => {
    const tm = setTimeout(() => {
      setName(navRef.getCurrentRoute()?.name);
    }, 100);

    return () => clearTimeout(tm);
  }, []);

  const renderedScreens = user ? (
    <>
      <Stack.Screen name={"Home"} component={HomeScreen} />
      <Stack.Screen name={"Payments"} component={PaymentsScreen} />
      <Stack.Screen name={"Services"} component={ServicesScreen} />
      <Stack.Screen name={"More"} component={MoreScreen} />
      <Stack.Screen name={"Support"} component={SupportScreen} />
      <Stack.Screen name={"Profile"} component={ProfileScreen} />
      <Stack.Screen name={"CreateCard"} component={CreateCardScreen} />
      <Stack.Screen name={"PhoneTransfer"} component={PhoneTransferScreen} />
    </>
  ) : (
    <>
      <Stack.Screen name={"Login"} component={LoginScreen} />
      <Stack.Screen name={"Signup"} component={SignupScreen} />
    </>
  );

  return (
    <>
      <NavigationContainer ref={navRef}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {renderedScreens}
        </Stack.Navigator>
      </NavigationContainer>

      {user && name && (
        <Tabbar navigate={navRef.navigate} currentRoute={name} />
      )}
    </>
  );
};

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Services: undefined;
  Support: undefined;
  Payments: undefined;
  More: undefined;
  CreateCard: undefined;
  PhoneTransfer: undefined;
  Login: undefined;
  Signup: undefined;
};

export type RootNavigationProp = NativeStackNavigationProp<RootStackParamList>;
