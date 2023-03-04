import { FC } from "react";
import { TextInput } from "react-native";

type KeyboardType = "email-address" | "phone-pad" | "number-pad";

interface FieldProps {
  onChange: (value: string) => void;
  value: string;
  placeholder: string;
  isSecure?: boolean;
  type?: KeyboardType | undefined;
}

export const TextField: FC<FieldProps> = ({
  onChange,
  value,
  placeholder,
  isSecure = false,
  type,
}) => {
  return (
    <TextInput
      autoCapitalize="none"
      placeholder={placeholder}
      onChangeText={onChange}
      value={value}
      secureTextEntry={isSecure}
      className="rounded-xl bg-gray-100 p-4 w-full mt-3"
    />
  );
};
