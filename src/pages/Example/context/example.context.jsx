import { createContext, useContext, useState } from "react";

export const ExampleContext = createContext();

// I'm in 1:08:53 minute of the video: https://www.youtube.com/watch?v=USm-uiVyTuQ&list=RDLVUSm-uiVyTuQ&start_radio=1&rv=USm-uiVyTuQ&t=1329

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
