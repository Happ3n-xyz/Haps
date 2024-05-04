import React, { Fragment, useEffect, useState } from "react";
import { Box, Button, Center, Grid, Text } from "@chakra-ui/react";
import Image from "next/image";
import { Happ3nEvent } from "../../src/models/Event";
import FeaturedEvent from "../../components/cards/FeaturedEvent";
import { useAccount, useSignMessage } from "wagmi";
import { useRouter } from "next/router";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Head from "next/head";
import { PrivateGet, PublicPost } from "../../src/utils/DataManagement";
import toast from "react-hot-toast";
import { useUser } from "../../context/userContext";

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
  const { isConnected , address} = useAccount();
  const {user, setUser} = useUser();
  const [featuredEvents, setFeaturedEvents] = useState(EventsDummy);
  const [selectedButton, setSelectedButton] = useState('mine');
  const [nonce, setNonce] = useState<string | null>(null);
  const [getToken , setGetToken] = useState(false);
  const router = useRouter();
  const { signMessage, data} = useSignMessage()
  
  useEffect(() => {
    if (!isConnected) {
      router.push("/");
    }
  }, [isConnected, router]);
  
  useEffect(() => {
    if (!isConnected) return;
    const token = localStorage.getItem('token');
    if (!token || token === undefined) {
      getNonce();
    } else {
      verifyToken();
    }
  }, [isConnected, getToken]);

  useEffect(() => {
    if (!data) return;
    loginUser(data);
  }, [signMessage, data])
  

  const getNonce = async () => {
    try {
      const response = await PublicPost('/auth/request-nonce', {
        address: address, 
      });
      setNonce(response.nonce);
      signMessage({message: response.nonce});      
    } catch (error) {
      console.log('error fetchin nonces is', error);
      toast.error('An error occurred while trying to login. Please tsry again later.');
    }
  }
  const verifyToken = async () => {
    try {
      const response = await PrivateGet('/auth/auto-login-user');
      setUser({
        isLogged: true,
        token: response.token,
        user: response.user,
      })
      toast.success('You have been logged in successfully.');
    } catch (error) {
      localStorage.removeItem('token');
      getNonce();
      toast.error('An error occurred while trying to login. Please try again later.');
    }
  }
  const loginUser = async (data: any) => {
    try {
      const body = {
        address: address,
        nonce: nonce ?? '',
        signature: data,
      }
      const response = await PublicPost('/auth/login-user', body);
      localStorage.setItem('token', response.token);
      setUser({
        isLogged: true,
        token: response.token,
        user: response.user,
      })
      setGetToken(!getToken);
      toast.success('You have been logged in successfully.');
    } catch (error) {
      console.log('error logging in is', error);
      toast.error('An error occurred while trying to login. Please try again later.');
    }
  }
  const handleButtonClick = (button : string) => {
    setSelectedButton(button);
  };

  return (
    <Fragment>
      <Head>
        <title>My Haps - By Happ3n</title>
        <meta
          name="Haps by happ3n"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>
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
