import React, { Fragment, useEffect, useState } from "react";
import { Box, Button, Center, Grid, Text } from "@chakra-ui/react";
import Image from "next/image";
import { Happ3nEvent } from "../../src/models/Event";
import FeaturedEvent from "../../components/cards/FeaturedEvent";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const EventsDummy: Happ3nEvent[] = [
  {
    id: 1,
    name: "Lucid Walls",
    shortDescription: "Get in the AI Business Dapp and boost yout ideas.",
    description:
      "I am artist of the real world with creatie acients arts in benin.",
    date: "2024-02-25T23:28:12Z",
    location: "Argentina",
    image: "https://picsum.photos/200/300",
    createdAt: "2024-02-25T23:28:12Z",
    updatedAt: "2024-02-25T23:28:12Z",
  },
  {
    id: 2,
    name: "Lucid ",
    shortDescription: "Get in the AI Business Dapp and boost yout ideas.",
    description:
      "I am artist of the real world with creative ideas of the acients arts in benin.",
    date: "2024-02-25T23:28:12Z",
    location: "Colombia",
    image: "https://picsum.photos/200/300",
    createdAt: "2024-02-25T23:28:12Z",
    updatedAt: "2024-02-25T23:28:12Z",
  },
  {
    id: 3,
    name: "Lucid Walls",
    shortDescription: "Get in the AI Business Dapp and boost yout ideas.",
    description:
      "I am artist of the real world witas of the acients arts in benin.",
    date: "2024-02-25T23:28:12Z",
    location: "Perú",
    image: "https://picsum.photos/200/300",
    createdAt: "2024-02-25T23:28:12Z",
    updatedAt: "2024-02-25T23:28:12Z",
  },
  {
    id: 4,
    name: "Lucid Walls",
    shortDescription: "Get in the AI Business Dapp and boost yout ideas.",
    description:
      "I  of the real world with creative ideas of the acients arts in benin.",
    date: "2024-02-25T23:28:12Z",
    location: "Argentina",
    image: "https://picsum.photos/200/300",
    createdAt: "2024-02-25T23:28:12Z",
    updatedAt: "2024-02-25T23:28:12Z",
  },
  {
    id: 5,
    name: "Lucid Walls",
    shortDescription: "Get in the AI Business Dapp and boost yout ideas.",
    description:
      "I am artist of the real world with creative ideas of the acients anin.",
    date: "2024-02-25T23:28:12Z",
    location: "Argentina",
    image: "https://picsum.photos/200/300",
    createdAt: "2024-02-25T23:28:12Z",
    updatedAt: "2024-02-25T23:28:12Z",
  },
  {
    id: 6,
    name: "Lucid another",
    shortDescription: "Get in the AI Business Dapp and boost yout ideas.",
    description: "I am artist of the real world w acients arts in benin.",
    date: "2024-02-25T23:28:12Z",
    location: "Argentina",
    image: "https://picsum.photos/200/300",
    createdAt: "2024-02-25T23:28:12Z",
    updatedAt: "2024-02-25T23:28:12Z",
  }
];

const MyHaps = () => {
  const [featuredEvents, setFeaturedEvents] = useState(EventsDummy);
  const [selectedButton, setSelectedButton] = useState('mine'); // 'mine' or 'claimed'
  const { isConnected } = useAccount();
  const router = useRouter();
  
  useEffect(() => {
    if (!isConnected) {
      router.push("/");
    }
  }, [isConnected, router]);
  
  const handleButtonClick = (button : string) => {
    setSelectedButton(button);
  };

  return (
    <Fragment>
      <Box mt={"70px"} w={"100%"} h={"700px"}>
        <Center justifyContent={"center"}>
          <Button
            onClick={() => handleButtonClick('mine')}
            bg={selectedButton === 'mine' ? '#363737' : '#1C1C1C'}
            color="#CBCBCB"
            borderRadius="70px"
            mx={2}
            px={5}
            py={4}
            minW={120}
          >
            My Haps
          </Button>
          <Button
            onClick={() => handleButtonClick('claimed')}
            bg={selectedButton === 'claimed' ? '#363737' : '#1C1C1C'}
            color="#CBCBCB"
            borderRadius="70px"
            mx={2}
            px={5}
            py={4}
            minW={120}
          >
            Claimed
          </Button>
        </Center>
        <Center mt={100}>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(3, minmax(0, 1fr))",
            }}
            gap={"30px"}
            mb={10}
          >
            {featuredEvents.map((event, index) => (
              <FeaturedEvent event={event} key={index} />
            ))}
          </Grid>
        </Center>
      </Box>
      <Text fontSize="18px" textAlign="center" mt={2} mb={10} color={'#666666'} >
        By Happ3n
      </Text>
    </Fragment>
  );
};

export default MyHaps;
