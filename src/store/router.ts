import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { create } from "zustand";

interface AsPathStoreType {
  prevAsPath: string | undefined;
  currentAsPath: string | undefined;
}

const asPathStore = create<AsPathStoreType>((set) => ({
  prevAsPath: undefined,
  currentAsPath: undefined,
}));

/** use as a hook to get prevAsPath and currentAsPath*/
export const useAsPath = () => {
  return asPathStore((state) => state);
};

export const getAsPath = () => {
  return asPathStore.getState();
};

/** Only use this in root file or Provider */
export const useAsPathInitializer = () => {
  const asPath = usePathname();
  const { currentAsPath } = useAsPath();

  useEffect(() => {
    if (currentAsPath !== asPath) {
      asPathStore.setState((state) => ({
        ...state,
        currentAsPath: asPath,
        prevAsPath: currentAsPath,
      }));
    }
  }, [asPath, currentAsPath]);
};