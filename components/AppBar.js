import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import ToggleColorBtn from "./ToggleColorBtn";

function AppBar() {
  return (
    <Flex p="3" mb="8" align="center" justify="space-between" position="sticky">
      <Heading>Simple Blog</Heading>
      <ToggleColorBtn />
    </Flex>
  );
}

export default AppBar;
