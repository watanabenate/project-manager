import React from "react";
import { Box, Heading } from "@chakra-ui/react";

export function SwimLane(props: { title: string }) {
  return (
    <Box flexDirection='column'>
      <Heading>{props.title}</Heading>
      <Box bg="#f2f2f2" width="40" height={'100%'} mx="5"></Box>
    </Box>
  );
}
