import React from "react";
import { Text, Flex, Link } from "@chakra-ui/react";
import "./App.css";

import { FaGithub, FaLinkedin, FaTwitter, FaFileAlt } from "react-icons/fa";

const SocialIcon = ({ Icon, link }) => (
  <Link href={link}>
    <Text as={Icon} style={{ fontSize: "30px", marginRight: "20px" }} />
  </Link>
);

function App() {
  return (
    <Flex
      height="100%"
      ml={{ base: "5vw", lg: "20vw" }}
      mt={{ base: "30vh", lg: "30vh" }}
      flexDirection="column"
      width="50%"
    >
      <Flex flexDirection="column">
        <Text fontSize={{ base: "4xl", lg: "6xl" }}>Hi, I'm Tayeeb Hasan.</Text>
        <Text fontSize={{ base: "xl", lg: "4xl" }}>
          🔬 & 💻 Computer Science Undergraduate.
        </Text>
      </Flex>
      <Flex
        mt={{ base: "3vh", lg: "8vh" }}
        justifyContent="flex-start"
        width="50%"
      >
        <SocialIcon Icon={FaGithub} link="https://github.com/flozender" />
        <SocialIcon
          Icon={FaLinkedin}
          link="https://www.linkedin.com/in/tayeebhasan/"
        />
        <SocialIcon
          Icon={FaTwitter}
          link="https://www.twitter.com/HasanTayeeb"
        />
        <SocialIcon Icon={FaFileAlt} link="https://bit.ly/3osCNWR" />
      </Flex>
    </Flex>
  );
}

export default App;
