import { View, Text, Pressable, ScrollView, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { Layout } from "../../components/layouts/Layout";
import { Title } from "../../components/title/Title";
import { InputField } from "../../components/customs/Field";
import { RequiredText } from "../../components/title/RequiredText";
import { SelectList } from "react-native-dropdown-select-list";
import { useCards } from "../../hooks/useCards";
import { ICard } from "../../types/card";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "../../components/customs/Button";
import { AlertMessage } from "../../components/alerts/AlertMessage";
import { IProfile } from "../../hooks/useProfile";
import { useAppNavigation } from "../../hooks/useRoutes";

const DEFAULT_AMOUNTS = [100, 200, 500, 1000, 2000];

export const PhoneTransferScreen = () => {
  const { cards } = useCards();
  const navigation = useAppNavigation();

  const [phone, setPhone] = useState("");
  const [foundPerson, setFoundPerson] = useState<IProfile | null>(null);
  const [amount, setAmount] = useState("");
  const [selectedCard, setSelectedCard] = useState<ICard | null>(null);
  const [error, setError] = useState("");

  // Get profile when phone is entered
  useEffect(() => {
    if (phone.length == 11) {
      console.log("Good");
    } else {
      setFoundPerson(null);
    }
  }, [phone]);

  const renderedCard = cards.map(
    c => (
      <Text key={c.id}>
        {c.type} - {c.currency} {c.balance}
      </Text>
    ),
    []
  );

  const renderedDefaultAmounts = DEFAULT_AMOUNTS.map(v => (
    <Pressable
      onPress={() => setAmount(v.toString())}
      className="px-4 py-2 border-[1px] rounded-2xl border-gray-300 mr-3 flex-row
      items-center justify-center"
    >
      <Text className="mr-[2px]">{v}</Text>
      <MaterialCommunityIcons name="currency-kzt" size={16} color="black" />
    </Pressable>
  ));

  const onTransferPress = async () => {
    const values = [phone, foundPerson, amount, selectedCard];

    if (values.every(v => v !== null || v !== "")) {
      Alert.alert("Fill out all information");
      return;
    }
  };

  console.log(error);

  return (
    <Layout>
      <View className="mb-8">
        <Title title={"Phone Transfer"} centered />
        <Text className="text-center text-gray-500">
          Please, fill out all nesseccary fields
        </Text>
      </View>

      <View className="mb-5">
        <RequiredText title={"Phone number"} />
        <InputField
          onChange={setPhone}
          value={phone}
          placeholder={"Enter phone number"}
          type="tel"
        />
      </View>

      <View className="mb-3">
        <RequiredText title={"Amout"} />
        <InputField
          onChange={setAmount}
          value={amount}
          placeholder={"Enter amount of money"}
          type="numeric"
        />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex-row mb-7"
      >
        {renderedDefaultAmounts}
      </ScrollView>

      <View className="mb-7">
        <RequiredText title="Card Type" boxClassName="pl-2 mb-2" />
        <SelectList
          placeholder="Select a type"
          dropdownStyles={{
            backgroundColor: "rgb(243 244 246)",
            borderWidth: 0,
          }}
          boxStyles={{ backgroundColor: "rgb(243 244 246)", borderWidth: 0 }}
          search={false}
          setSelected={(c: ICard) => setSelectedCard(c)}
          data={renderedCard}
          save="key"
        />
      </View>

      <View className="mb-7">
        <Button onPress={onTransferPress} title={"Transfer"} />
      </View>

      <AlertMessage text={error} type="error" />
    </Layout>
  );
};
