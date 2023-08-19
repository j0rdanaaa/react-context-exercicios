import GlobalState from "./contexts/GlobalState";
import Card from "./components/Card";
import { ChakraProvider } from "@chakra-ui/react";


function App() {
  return (
    <GlobalState>
      <ChakraProvider>
        <Card />;
      </ChakraProvider>
    </GlobalState>
  );
}

export default App;
