import { createContext, useContext, useState, type ReactNode } from "react";
import type { LanguageContextType, ThemeContextType } from "../types/Type";

export interface CombinedContextType extends LanguageContextType, ThemeContextType {} 

const GlobalContext = createContext<CombinedContextType | undefined>(undefined); 

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<string>("en"); 
  const [themeMode, setThemeMode] = useState<"light" | "dark">("light"); 

  return (
    <GlobalContext.Provider value={{ language, setLanguage, themeMode, setThemeMode }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): CombinedContextType => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
