import React, { Fragment, useEffect, useState } from "react";
import {
  Box,
  Text,
  Button,
  Grid,
  Center,
  Flex,
  useTheme,
  useColorModeValue,
} from "@chakra-ui/react";
import { useAccount } from 'wagmi'
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/router";

const Featured = () => {
  const { isConnected } = useAccount()
  const router = useRouter()
  if (isConnected) {
    //go to myHaps page
    router.push("/myHaps");
  }

  return (
    <Fragment>
      <Box mt={"100px"} w={"100%"} h={'100%'}>
        <Center mb={10} justifyContent={"center"} w={"100%"}>
          <Image
            src={"images/logo.svg"}
            alt="happ3n logo"
            height={120}
            width={120}
          />
        </Center>
        <Center justifyContent={"center"}>
          <Text fontSize="60px" fontWeight="bold" textAlign="center" w={"50%"}>
            {"Join Haps! And engage your community"}
          </Text>
        </Center>
        <Center mt={16}>
          <ConnectButton.Custom>
            {({ openConnectModal }) => (
              <Button
                onClick={openConnectModal}
                color={'textPrimary'}
                bg="transparent"
                border="1px"
                borderColor={'gray.600'}
                borderRadius="md"
                _hover={{ bg: "gray.600" }}
              >
                <Box as="span" mr={6}>
                  <Image
                    src="/images/WalletIcon.svg"
                    alt="Wallet Icon"
                    width={24}
                    height={24}
                  />
                </Box>
                Connect Wallet
              </Button>
            )}
          </ConnectButton.Custom>
        </Center>
      </Box>
    </Fragment>
  );
};

export default Featured;
