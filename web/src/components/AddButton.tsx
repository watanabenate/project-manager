import React from "react";
import { Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

export function AddButton() {
    function createTask(){

    }

    return (
        <Button width={'90%'} margin={'3'} onClick={createTask}>
            <AddIcon />
        </Button>
    );
}