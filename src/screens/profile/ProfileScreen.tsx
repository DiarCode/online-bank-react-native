import { View, Text } from "react-native";
import React, { useState } from "react";
import { Layout } from "../../components/layouts/Layout";
import { useProfile } from "../../hooks/useProfile";
import { InputField } from "../../components/customs/Field";
import { Button } from "../../components/customs/Button";
import { COLORS } from "../../styles/shared-styles";
import { Title } from "../../components/title/Title";
import { Loader } from "../../components/customs/Loader";
import { useAuth } from "../../hooks/useAuth";
import { useUpdateProfile } from "../../hooks/useUpdateProfile";
import { AlertMessage } from "../../components/alerts/AlertMessage";

export const ProfileScreen = () => {
  const { logout } = useAuth();
  const { isLoading: isProfileLoading, profile, name, setName } = useProfile();
  const { isLoading, isSuccess, error, updateName } = useUpdateProfile();
  const onUpdatePress = () => {
    if (!profile) return;
    updateName(name, profile.docId);
  };

  const renderedContent =
    isProfileLoading || isLoading ? (
      <Loader />
    ) : (
      <>
        <View className="mt-3">
          <InputField
            onChange={v => setName(v)}
            value={name}
            placeholder={"Enter new name"}
          />
        </View>

        <View className="mt-4">
          <Button onPress={onUpdatePress} title={"Update profile"} />
        </View>

        <View className="mt-4">
          <Button
            colors={[COLORS.gray, COLORS.light_gray]}
            onPress={logout}
            title={"Logout"}
          />
        </View>
      </>
    );

  return (
    <Layout>
      <Title centered={true} title="Profile" />
      {renderedContent}

      <View className="w-full mt-5">
        {error && <AlertMessage text={error} type="error" />}
        {isSuccess && (
          <AlertMessage text="Successfully updated" type="success" />
        )}
      </View>
    </Layout>
  );
};
