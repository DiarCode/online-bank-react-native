import {
  Dispatch,
  FC,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from "react";
import { IStory } from "../types/story";

interface IContext {
  activeStories: IStory | null;
  setActiveStories: Dispatch<SetStateAction<IStory | null>>;
}
export const StoriesContext = createContext<IContext>({} as IContext);

interface StoriesProviderProps {
  children: React.ReactNode;
}

export const StoriesProvider: FC<StoriesProviderProps> = ({ children }) => {
  const [activeStories, setActiveStories] = useState<IStory | null>(null);

  const value = useMemo(
    () => ({ activeStories, setActiveStories }),
    [activeStories]
  );

  return (
    <StoriesContext.Provider value={value}>{children}</StoriesContext.Provider>
  );
};
