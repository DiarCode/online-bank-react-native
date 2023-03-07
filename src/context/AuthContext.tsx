import { User, onAuthStateChanged } from "firebase/auth";
import { FC, createContext, useEffect, useMemo, useState } from "react";
import { firebaseAuth } from "../config/firebase/firebase";
import { FirebaseService } from "../services/firebase";
import { SignUpDTO } from "../types/dto/singup";

interface IContext {
  user: User | null;
  error: string;
  isLoading: boolean;
  setError: (v: string) => void;
  register: (dto: SignUpDTO) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoadingInitial, setIsLoadingInitial] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const registerHandler = async (dto: SignUpDTO) => {
    setIsLoading(true);
    try {
      const { user } = await FirebaseService.register(dto.email, dto.password);
      await FirebaseService.addToUserCollection(dto, user);
    } catch (error: any) {
      console.log(error);
      setError(JSON.stringify(error?.code));
    } finally {
      setIsLoading(false);
    }
  };

  const loginHandler = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      await FirebaseService.login(email, password);
    } catch (error: any) {
      console.log(error);
      setError(JSON.stringify(error?.code));
    } finally {
      setIsLoading(false);
    }
  };

  const logoutHandler = async () => {
    setIsLoading(true);
    try {
      await FirebaseService.logout();
    } catch (error: any) {
      console.log(error);
      setError(JSON.stringify(error?.code));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, user => {
      setUser(user || null);
    });

    setIsLoadingInitial(false);
  }, []);

  const value = useMemo(() => {
    return {
      user,
      isLoading,
      login: loginHandler,
      logout: logoutHandler,
      register: registerHandler,
      error,
      setError,
    };
  }, [user, isLoading]);

  const renderedChildren = !isLoadingInitial && children;

  return (
    <AuthContext.Provider value={value}>
      {renderedChildren}
    </AuthContext.Provider>
  );
};
