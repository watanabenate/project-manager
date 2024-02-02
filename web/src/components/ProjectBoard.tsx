import React from "react";
import { SwimLane } from "./SwimLane";
import { Box, Heading } from "@chakra-ui/react";

export function ProjectBoard() {
  return (
    <div style={{width: '100%', height: '100%'}}>
      <Heading>Project Name</Heading>
      <Box display="flex" width={'100%'} height={'100%'}>
        {/* to do */}
        <SwimLane title="To Do" />
        {/* in progress */}
        <SwimLane title="In Progress" />
        {/* done */}
        <SwimLane title="Done" />
      </Box>
    </div>
  );
}
