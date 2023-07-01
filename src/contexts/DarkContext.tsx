import { createContext, useContext, useState, useEffect } from "react";

type Dark = {
  isDark: boolean;
  toggleDark: () => void;
};

type Props = {
  children: React.ReactNode;
};

export const DarkContext = createContext<Dark>({
  isDark: false,
  toggleDark: () => {},
});

const getIsDarkFromLocalStorage = (): boolean => {
  if (!localStorage.isDark)
    localStorage.setItem("isDark", JSON.stringify(false));
  return JSON.parse(localStorage.isDark);
};

const updateIsDark = (isDark: boolean) => {
  if (!isDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

export const DarkProvider = ({ children }: Props) => {
  const [isDark, setIsDark] = useState(getIsDarkFromLocalStorage);

  const toggleDark = () => {
    setIsDark(!isDark);
    updateIsDark(!isDark);
  };

  useEffect(() => {
    localStorage.isDark = isDark;
    updateIsDark(!isDark);
  }, [isDark]);

  return (
    <DarkContext.Provider value={{ isDark, toggleDark }}>
      {children}
    </DarkContext.Provider>
  );
};

export const useDark = () => useContext(DarkContext);
