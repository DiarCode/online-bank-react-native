import { View, Text, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import { Button } from "../../components/customs/Button";
import { AlertMessage } from "../../components/alerts/AlertMessage";
import { RequiredText } from "../../components/title/RequiredText";
import { InputField } from "../../components/customs/Field";
import { Layout } from "../../components/layouts/Layout";
import { Loader } from "../../components/customs/Loader";
import { useAuth } from "../../hooks/useAuth";
import { useAppNavigation } from "../../hooks/useRoutes";
import { LoginDTO } from "../../types/dto/login";
import { Title } from "../../components/title/Title";

export const LoginScreen = () => {
  const { navigate } = useAppNavigation();
  const { isLoading, login, error } = useAuth();

  const [data, setData] = useState<LoginDTO>({} as LoginDTO);

  const onLoginPress = () => {
    const { email, password } = data;
    const values = [email, password];

    if (values.some(v => v === null || v === undefined || v === "")) {
      Alert.alert("Missing fields");
      return;
    }

    login(data.email, data.password);
    setData({} as LoginDTO);
  };

  const renderedForm = isLoading ? (
    <Loader />
  ) : (
    <>
      <View className="mb-5">
        <View className="mb-5">
          <RequiredText title={"Email"} />
          <InputField
            onChange={value => setData({ ...data, email: value })}
            value={data.email}
            placeholder={"alexander@mail.ru"}
          />
        </View>

        <View>
          <RequiredText title={"Password"} />
          <InputField
            onChange={value => setData({ ...data, password: value })}
            value={data.password}
            placeholder={"Password"}
            isSecure={true}
          />
        </View>
      </View>

      <Button onPress={onLoginPress} title={"Let's go"} />

      <View className="flex flex-row items-center justify-center mt-8">
        <Text className="text-gray-700 mr-3">Does not have an account?</Text>
        <Pressable onPress={() => navigate("Signup")}>
          <Text className="text-gray-700 underline">Sign Up</Text>
        </Pressable>
      </View>

      <View className="w-full mt-5">
        <AlertMessage text={error} type="error" />
      </View>
    </>
  );

  return (
    <Layout isScrollable={false}>
      <View className="w-full h-full justify-center items-center">
        <View className="w-9/12">
          <View className="mb-5">
            <Title title="Login" centered />
          </View>
          {renderedForm}
        </View>
      </View>
    </Layout>
  );
};
