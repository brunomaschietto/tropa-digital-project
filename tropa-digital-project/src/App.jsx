import React from "react";
import { GlobalContext } from "./contexts/GlobalContext";
import { ChakraProvider } from "@chakra-ui/react";
import Router from "./Routes/Router";

const App = () => {
  const context = {}
  return (
    <GlobalContext.Provider value={context}>
      <ChakraProvider>
        <Router />
      </ChakraProvider>
    </GlobalContext.Provider>
  );
};

export default App;
