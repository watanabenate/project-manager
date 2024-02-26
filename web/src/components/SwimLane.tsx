import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { AddButton } from "./AddButton";

export function SwimLane(props: { title: string }) {
  return (
    <Box flexDirection='column' width={'45%'} flex='0 1 auto'>
      <Heading>{props.title}</Heading>
      <AddButton/>
      <Box bg="#f2f2f2" height={'80%'} mx="5"></Box>
    </Box>
  );
}
