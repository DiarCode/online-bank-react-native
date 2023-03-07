import { useEffect, useMemo, useState } from "react";
import { useAuth } from "./useAuth";
import { FirebaseService } from "../services/firebase";

export interface IProfile {
  userId: string;
  displayName: string;
  phone: string;
  docId: string;
}

export const useProfile = () => {
  const { user } = useAuth();

  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState<IProfile | null>(null);
  const [name, setName] = useState("");

  useEffect(() => {
    if (user) {
      setIsLoading(true);
      FirebaseService.getUserById(user.uid, p => {
        setProfile(p);
        setName(p.displayName);
        setIsLoading(false);
      });
    }
  }, []);

  const value = useMemo(() => {
    return {
      isLoading,
      profile,
      name,
      setName,
    };
  }, [isLoading, profile, name]);

  return value;
};
