import React, { FC } from "react";
import { AuthProvider } from "../../context/AuthContext";
import { StoriesProvider } from "../../context/StoriesProvider";

interface ProvidersLayoutProps {
  children: React.ReactNode;
}

export const ProvidersLayout: FC<ProvidersLayoutProps> = ({ children }) => {
  return (
    <AuthProvider>
      <StoriesProvider>{children}</StoriesProvider>
    </AuthProvider>
  );
};

