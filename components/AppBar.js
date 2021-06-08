import React from "react";
import { Flex, Heading, useColorMode } from "@chakra-ui/react";
import ToggleColorBtn from "./ToggleColorBtn";

function AppBar() {
  const { colorMode } = useColorMode();
  return (
    <Flex
      p="3"
      mb="8"
      align="center"
      justify="space-between"
      position="sticky"
      top="0"
      bg={colorMode === "light" ? "teal.100" : "teal.600"}
    >
      <Heading>Simple Blog</Heading>
      <ToggleColorBtn />
    </Flex>
  );
}

export default AppBar;
