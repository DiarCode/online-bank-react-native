import { View, Text, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import { Button } from "../../components/customs/Button";
import { AlertMessage } from "../../components/alerts/AlertMessage";
import { RequiredText } from "../../components/title/RequiredText";
import { InputField } from "../../components/customs/Field";
import { Layout } from "../../components/layouts/Layout";
import { Loader } from "../../components/customs/Loader";
import { useAuth } from "../../hooks/useAuth";
import { SignUpDTO } from "../../types/dto/singup";
import { useAppNavigation } from "../../hooks/useRoutes";

export const SignupScreen = () => {
  const { navigate } = useAppNavigation();
  const { isLoading, register, error } = useAuth();

  const [data, setData] = useState<SignUpDTO>({} as SignUpDTO);

  const onSignupPress = () => {
    const { email, password, phone, name } = data;
    const values = [email, password, phone, name];

    if (values.some(v => v === null || v === undefined || v === "")) {
      Alert.alert("Missing fields");
      return;
    }

    if (phone.length !== 11) {
      Alert.alert("Phone number must be 11 digits length");
      return;
    }

    if (name.length < 3) {
      Alert.alert("Name must consist at least 3 letters");
      return;
    }

    register(data);
    setData({} as SignUpDTO);
  };

  const renderedForm = isLoading ? (
    <Loader />
  ) : (
    <>
      <View className="mb-5">
        <View className="mb-5">
          <RequiredText title={"Name"} />
          <InputField
            onChange={value => setData({ ...data, name: value })}
            value={data.name}
            placeholder={"Alexander Ivanov"}
          />
        </View>

        <View className="mb-5">
          <RequiredText title={"Email"} />
          <InputField
            onChange={value => setData({ ...data, email: value })}
            value={data.email}
            placeholder={"alexander@mail.ru"}
          />
        </View>

        <View className="mb-5">
          <RequiredText title={"Phone number"} />
          <InputField
            onChange={value => setData({ ...data, phone: value })}
            value={data.phone}
            placeholder={"+1 (234) 567-890"}
            type="tel"
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

      <Button onPress={onSignupPress} title={"Let's go"} />

      <View className="flex flex-row items-center justify-center mt-8">
        <Text className="text-gray-700 mr-3">Already have an account?</Text>
        <Pressable onPress={() => navigate("Login")}>
          <Text className="text-gray-700 underline">Login</Text>
        </Pressable>
      </View>

      <View className="w-full mt-5">
        <AlertMessage text={error} type="error" />
      </View>
    </>
  );

  return (
    <Layout isScrollable={false}>
      <View className="justify-center items-center h-full">
        <View className="w-9/12">
          <View className="mb-4">
            <Text className="text-center text-2xl font-bold">Sign Up</Text>
          </View>
          {renderedForm}
        </View>
      </View>
    </Layout>
  );
};
