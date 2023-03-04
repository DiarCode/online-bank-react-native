import { useMemo, useState } from "react";
import { useAuth } from "./useAuth";
import { FirebaseService } from "../services/firebase";

export const useUpdateProfile = () => {
  const { user } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const updateName = async (name: string, docId: string) => {
    setIsLoading(true);
    if (!user) return;
    try {
      FirebaseService.updateProfileName(name, docId);
      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (error: any) {
      setError(error?.code || "Error on update profile");
    } finally {
      setIsLoading(false);
    }
  };

  const values = useMemo(() => {
    return { isLoading, updateName, isSuccess, error };
  }, [isLoading, updateName, error, isSuccess]);

  return values;
};
