import React, { Fragment, useEffect, useState } from "react";
import {
  Box,
  Text,
  Button,
  Grid,
  Center,
  Flex,
  useTheme,
} from "@chakra-ui/react";
import Image from "next/image";

const Featured = () => {

  return (
    <Fragment>
      <Box mt={"150px"} w={"100%"}  >
        <Center mb={10} justifyContent={"center"} w={"100%"}>
          <Image  
            src={'images/logo.svg'}
            alt="happ3n logo"
            height={120}
            width={120}
          />
        </Center>
        <Center justifyContent={'center'}>
          <Text fontSize="60px" fontWeight="bold" textAlign="center" w={'50%'}>
            {'Join Haps! And engage your community'}
          </Text>
        </Center>
      </Box>
    </Fragment>
  );
};

export default Featured;
