import { createContext, useContext, useState } from "react";

export const ExampleContext = createContext();

export const ExampleProvider = ({ children }) => {
  const [exampleContextValue, setExampleContextValue] = useState("");

  return (
    <ExampleContext.Provider
      value={{ exampleContextValue, setExampleContextValue }}
    >
      {children}
    </ExampleContext.Provider>
  );
};

export const useExampleContext = () => {
  const context = useContext(ExampleContext);

  if (context === undefined) {
    throw new Error("ExampleContext must be used within a ExampleProvider");
  }

  return context;
};
