import React from "react";
import { Text, Flex } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <Flex
      height="100%"
      ml={{ base: "5vw", lg: "20vw" }}
      mt={{ base: "30vh", lg: "40vh" }}
      flexDirection="column"
    >
      <Text fontSize={{ base: "4xl", lg: "6xl" }}>Hi, I'm Tayeeb Hasan.</Text>
      <Text fontSize={{ base: "xl", lg: "4xl" }}>
        🔬 & 💻 Computer Science Undergraduate.
      </Text>
    </Flex>
  );
}

export default App;
