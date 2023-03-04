import { View, Text, SafeAreaView, Pressable } from "react-native";
import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Loader } from "../../components/customs/Loader";
import { TextField } from "../../components/customs/Field";
import { Button } from "../../components/customs/Button";
import { AlertMessage } from "../../components/alerts/AlertMessage";

interface AuthDTO {
  email: string;
  password: string;
}

export const AuthScreen = () => {
  const { isLoading, login, register, error, setError } = useAuth();
  const [isReg, setIsReg] = useState(false);

  const [data, setData] = useState<AuthDTO>({} as AuthDTO);

  const authHandler = async () => {
    const { email, password } = data;
    const values = [email, password];

    if (values.some(v => v === null || v === undefined || v === "")) {
      setError("Missing fields");
      return;
    }

    if (isReg) {
      await register(email, password);
    } else {
      await login(email, password);
    }

    setData({} as AuthDTO);
  };

  const renderedTitle = isReg ? "Sign Up" : "Login";

  const renderedForm = isLoading ? (
    <Loader />
  ) : (
    <>
      <View className="flex flex-col mb-5">
        <TextField
          onChange={value => setData({ ...data, email: value })}
          value={data.email}
          placeholder={"Enter email"}
          type="email-address"
        />
        <TextField
          onChange={value => setData({ ...data, password: value })}
          value={data.password}
          placeholder={"Enter password"}
          isSecure={true}
        />
      </View>
      <Button onPress={authHandler} title={"Let's go"} />

      <View className="flex flex-row items-center justify-center gap-3 mt-5">
        <Text className="text-gray-700">
          {isReg ? "Already have an account?" : "Does not have an account?"}
        </Text>
        <Pressable onPress={() => setIsReg(!isReg)}>
          <Text className="text-gray-700 underline">
            {isReg ? "Login" : "Sign Up"}
          </Text>
        </Pressable>
      </View>

      <View className="w-full mt-5">
        <AlertMessage text={error} type="error" />
      </View>
    </>
  );

  return (
    <SafeAreaView className="w-full h-full p-3 bg-white">
      <View className="justify-center items-center h-full">
        <View className="w-9/12">
          <View className="mb-4">
            <Text className="text-center text-2xl font-bold">
              {renderedTitle}
            </Text>
          </View>

          {renderedForm}
        </View>
      </View>
    </SafeAreaView>
  );
};
