import { FC } from "react";
import { InputModeOptions, TextInput } from "react-native";

interface FieldProps {
  onChange: (value: string) => void;
  value: string;
  placeholder: string;
  isSecure?: boolean;
  type?: InputModeOptions | undefined;
}

export const InputField: FC<FieldProps> = ({
  onChange,
  value,
  placeholder,
  isSecure = false,
  type = "text",
}) => {
  return (
    <TextInput
      autoCapitalize="none"
      placeholder={placeholder}
      onChangeText={onChange}
      value={value}
      secureTextEntry={isSecure}
      inputMode={type}
      className="rounded-xl bg-gray-100 p-4 w-full mt-3"
    />
  );
};
