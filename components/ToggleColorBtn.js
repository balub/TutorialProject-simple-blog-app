import React from "react";
import { useColorMode, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function ToggleColorBtn() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      colorScheme="teal"
      size="lg"
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
    />
  );
}

export default ToggleColorBtn;
