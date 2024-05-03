import React, { useEffect } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Text,
  useDisclosure,
  Image,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isConnected } = useAccount();
  useEffect(() => {}, []);

  return (
    <Box pt={"70px"} position="relative" justifyContent={"center"}>
      <Box
        position="absolute"
        top={0}
        maxH={"500px"}
        h={"100%"}
        left={0}
        right={0}
        bgImage={"url('/header.svg')"}
        bgSize="cover"
        bgPosition="center"
        zIndex={0}
      />
      <Box
        bg="transparent"
        px={4}
        width={{ base: "100%", md: "85%", lg: "94%" }}
        margin="0px auto"
        borderRadius="20px"
        zIndex={2}
        position="relative"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            color="white"
            bg="brand.darkie"
            opacity="90%"
            _hover={{
              transitionDuration: "0.2s",
              transitionTimingFunction: "ease-in-out",
              transform: "scale(1.05)",
            }}
          />
          <HStack spacing={2} alignItems={"center"} justifyContent={"space-between"} w={'100%'}>
            <Link href="/">
              <Image
                src="/images/login/login-logo.svg"
                width={70}
                height={70}
                alt="Picture of the author"
              />
            </Link>
            {isConnected && <ConnectButton />}
          </HStack>
        </Flex>
      </Box>
      <Box position="relative" zIndex={1}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
