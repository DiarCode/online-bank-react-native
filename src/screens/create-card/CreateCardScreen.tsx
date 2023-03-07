import { View, Text } from "react-native";
import React from "react";
import { Layout } from "../../components/layouts/Layout";
import { Title } from "../../components/title/Title";
import { SelectList } from "react-native-dropdown-select-list";
import { RequiredText } from "../../components/title/RequiredText";
import { Button } from "../../components/customs/Button";
import { CardsService } from "../../services/CardsService";
import { CreateCardDTO } from "../../types/dto/create-card";
import { useAuth } from "../../hooks/useAuth";
import { useAppNavigation } from "../../hooks/useRoutes";

const currencies = ["RUB", "USD", "KZT"];
const types = ["Standard", "Black"];

export const CreateCardScreen = () => {
  const { user } = useAuth();
  const { navigate } = useAppNavigation();

  const [selectedCurrency, setSelectedCurrency] = React.useState<string | null>(
    null
  );
  const [selectedType, setSelecteType] = React.useState<string | null>(null);

  const onApplyPress = async () => {
    const values = [selectedCurrency, selectedType];

    if (values.some(v => v === null || v === "")) return;
    if (!user) return;

    const dto: CreateCardDTO = {
      userId: user.uid,
      currency: selectedCurrency!,
      type: selectedType!,
    };

    await CardsService.addToCardsCollection(dto);

    navigate("Home");
  };

  return (
    <Layout>
      <View className="mb-8">
        <Title title={"Apply for a new card"} centered={true} />
        <Text className="text-center text-gray-500">
          Please, fill out all nesseccary fields
        </Text>
      </View>

      <View className="mb-5">
        <RequiredText title="Currency" boxClassName="pl-2 mb-2" />
        <SelectList
          placeholder="Select a currency"
          dropdownStyles={{
            backgroundColor: "rgb(243 244 246)",
            borderWidth: 0,
          }}
          boxStyles={{ backgroundColor: "rgb(243 244 246)", borderWidth: 0 }}
          search={false}
          setSelected={(val: string) => setSelectedCurrency(val)}
          data={currencies}
          save="value"
        />
      </View>

      <View className="mb-5">
        <RequiredText title="Card Type" boxClassName="pl-2 mb-2" />
        <SelectList
          placeholder="Select a type"
          dropdownStyles={{
            backgroundColor: "rgb(243 244 246)",
            borderWidth: 0,
          }}
          boxStyles={{ backgroundColor: "rgb(243 244 246)", borderWidth: 0 }}
          search={false}
          setSelected={(val: string) => setSelecteType(val)}
          data={types}
          save="value"
        />
      </View>

      <Button onPress={onApplyPress} title={"Apply"} />
    </Layout>
  );
};
