import { View } from "react-native";
import { AuthProvider } from "./src/context/AuthContext";
import { Routes } from "./src/routes/Routes";
import { ProvidersLayout } from "./src/components/layouts/ProvidersLayout";

export default function App() {
  return (
    <ProvidersLayout>
      <Routes />
    </ProvidersLayout>
  );
}
