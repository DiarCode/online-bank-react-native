import { useCallback, useMemo, useState } from "react";
import { FirebaseService } from "../services/firebase";
import { IProfile } from "./useProfile";
import { TurboModuleRegistry } from "react-native";

export const usePhoneTransfer = () => {
  const [profile, setProfile] = useState<IProfile | null>(null);
  const [error, setError] = useState("");

  const getUserByPhone = useCallback((phone: string) => {
    try {
      FirebaseService.getProfileByPhone(phone, p => setProfile(p));
    } catch (error: any) {
      setError(JSON.stringify(error?.code));
    } finally {
      return profile;
    }
  }, []);

  const transferMoneyToUser = useCallback(
    (profile: IProfile, amount: number) => {
      try {
      } catch (error: any) {
        setError(JSON.stringify(error?.code));
      }
    },
    []
  );

  const values = useMemo(() => {
    return { profile, error, getUserByPhone, transferMoneyToUser, setProfile };
  }, [profile, error]);

  return values;
};
