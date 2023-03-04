import { useContext, useEffect, useMemo, useState } from "react";
import { FirebaseService } from "../services/firebase";
import { IStory } from "../types/story";
import { StoriesContext } from "../context/StoriesProvider";

export const useStories = () => {
  const [stories, setStories] = useState<IStory[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { activeStories, setActiveStories } = useContext(StoriesContext);

  useEffect(() => {
    setIsLoading(true);
    FirebaseService.getStories(s => {
      setStories(s);
      setIsLoading(false);
    });
  }, []);

  const values = useMemo(() => ({ stories, isLoading }), [isLoading, stories]);

  return { ...values, activeStories, setActiveStories };
};
