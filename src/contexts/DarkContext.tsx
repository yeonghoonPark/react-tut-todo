import { createContext, useState } from "react";

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

export default function DarkTest({ children }: Props) {
  const [isDark, setIsDark] = useState(false);
  const toggleDark = () => setIsDark((prev) => (prev = !prev));

  return (
    <DarkContext.Provider value={{ isDark, toggleDark }}>
      {children}
    </DarkContext.Provider>
  );
}
