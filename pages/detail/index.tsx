import React, { Fragment, useEffect, useState } from "react";
import {
  Box,
  Center,
  Text,
  Grid,
  GridItem,
  Image,
  Input,
  Button,
  HStack,
} from "@chakra-ui/react";

import { DateBadge } from "../../components/cards/DateBatch";
import Head from "next/head";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { Happ3nEvent } from "../../src/models/Event";
import { PrivatePost, PublicFetch } from "../../src/utils/DataManagement";

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(true);
  const [loadingAction, setLoadingAction] = useState(false);
  const [event, setEvent] = useState<Happ3nEvent | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [secretWord, setSecretWord] = useState<string>("");
  const [invalidHap, setInvalidHap] = useState<boolean>(false);
  useEffect(() => {
    if (id) {
      loadEventInfo();
    }
  }, [id]);
  const loadEventInfo = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      let url = `/haps/${id}`;
      if (token) url += `?token=${token}`;
      const response = await PublicFetch(url);
      if (!response) {
        setLoading(false);
        setInvalidHap(true);
        return;
      }
      setEvent(response);
      setLoading(false);
      //TODO - Fetch the json file from IPFS when the project is on https , now is rejected by CORS
      // const jsonInfo = await fetch(response.ipfsHash);
      // if (!jsonInfo.ok) {
      //   return;
      // }
      // const data = await response.json();
    } catch (error) {
      toast.error(
        "An error occurred while trying to read Hap. Please try again later."
      );
      setLoading(false);
    }
  };
  const onClickButton = async () => {
    try {
      if (!event) return;
      if (!event.joined) {
        setLoadingAction(true);
        const responseJoin = await PrivatePost(`/haps/join/${id}`, {});
        toast.success("You have joined the Hap successfully", {
          duration: 5000,
        });
      } else if (event.joined && !event.joined?.claimed) {
        setLoadingAction(true);
        const body = {
          id: id,
          secretWord: secretWord,
        };
        const responseClaim = await PrivatePost("/haps/claim", body);
        toast.success("You have claimed the Hap successfully", {
          duration: 5000,
        });
      } else {
        const newWindow = window.open(
          event.externalUrlEvent,
          "_blank",
          "noopener,noreferrer"
        );
        if (newWindow) {
          newWindow.opener = null;
        }
      }
      setLoadingAction(false);
      loadEventInfo();
    } catch (error) {
      toast.error(
        "An error occurred while processing the request. Please try again later."
      );
      setLoadingAction(false);
    }
  };
  const changeInput = (e: any) => {
    setSecretWord(e.target.value);
  };
  const onClickEvent = () => {
    if (!event) return;
    const newWindow = window.open(
      event.externalUrlEvent,
      "_blank",
      "noopener,noreferrer"
    );
    if (newWindow) {
      newWindow.opener = null;
    }
  };
  const onIpfsClick = () => {
    if (!event) return;
    const newWindow = window.open(
      event.ipfsHash,
      "_blank",
      "noopener,noreferrer"
    );
    if (newWindow) {
      newWindow.opener = null;
    }
  };
  const onHashClick = () => {
    if (!event) return;
    const newWindow = window.open(
      `https://alfajores.celoscan.io/tx/${event.joined?.txHash}`,
      "_blank",
      "noopener,noreferrer"
    );
    if (newWindow) {
      newWindow.opener = null;
    }
  }
  if (invalidHap) {
    return (
      <Center h={"50vh"}>
        <Text fontSize="18px" textAlign="center" mt={2} mb={10} color={"white"}>
          Invalid Hap
        </Text>
      </Center>
    );
  }
  return loading && !event ? (
    <Center h={"50vh"}>
      <Text fontSize="18px" textAlign="center" mt={2} mb={10} color={"white"}>
        Loading...
      </Text>
    </Center>
  ) : (
    <Fragment>
      <Head>
        <title>Hap Detail - By Happ3n</title>
        <meta name="Haps by happ3n" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Box mt={"70px"} w={"100%"} h={"700px"} px={"30px"}>
        <Center mt={100}>
          <Grid templateColumns="repeat(2, 1fr)" gap={6} alignItems={"center"}>
            <GridItem w="100%" mr={"50px"}>
              <Image
                src={event?.nftImage}
                alt="Hap Image"
                width={500}
                height={500}
                borderRadius={30}
              />
            </GridItem>
            <GridItem w="500px">
              <Box
                display="flex"
                alignItems="center"
                mb={4}
                h={"70px"}
                cursor={"pointer"}
                onClick={onClickEvent}
              >
                {event && <DateBadge date={event?.eventDate} time />}
                <Text
                  ml={"20px"}
                  h={"100%"}
                  fontSize={"30px"}
                  w={"100%"}
                  isTruncated
                  alignItems={"flex-start"}
                >
                  {event?.eventName}
                </Text>
              </Box>
              <Text
                mb={4}
                w={"90%"}
                isTruncated
                textOverflow="ellipsis"
                whiteSpace="wrap"
                ml={10}
                textAlign={"justify"}
              >
                {event?.message}
              </Text>
              <Box
                border="1px"
                mt={10}
                borderColor="#2a2a2a"
                borderRadius="20px"
                p={4}
                bg={"cardBackground"}
              >
                {event?.joined && !event?.joined.claimed && (
                  <Fragment>
                    <Text mb={1} fontSize={"14px"}>
                      Secret Word:
                    </Text>
                    <Input
                      placeholder="Type secret word here..."
                      mb={4}
                      value={secretWord}
                      onChange={(e) => changeInput(e)}
                      maxLength={30}
                    />
                  </Fragment>
                )}
                {event?.joined && event?.joined?.claimed && (
                  <Fragment>
                    <Text mb={5} fontSize={"14px"}>
                      Congrats , this Hap is yours! Visit the event URL:
                    </Text>
                  </Fragment>
                )}
                {!event?.joined && (
                  <Fragment>
                    <Text mb={5} fontSize={"14px"}>
                      Want to join this Hap?:
                    </Text>
                  </Fragment>
                )}
                <Button
                  bg={"buttonPrimary.bg"}
                  color={"buttonPrimary.color"}
                  _hover={{
                    bg: "buttonPrimary.hover",
                    color: "gray.600",
                  }}
                  onClick={onClickButton}
                  disabled={loadingAction}
                >
                  {loadingAction
                    ? "Processing..."
                    : !event?.joined
                    ? "Join Hap"
                    : event?.joined && event?.joined?.claimed
                    ? "Visit event URL"
                    : "Claim Hap"}
                </Button>
              </Box>
              <Text
                mt={4}
                w={"100%"}
                isTruncated
                textOverflow="ellipsis"
                whiteSpace="wrap"
                ml={3}
                textAlign={"justify"}
                textDecor={"underline"}
                cursor={"pointer"}
                onClick={onIpfsClick}
              >
                {"NFT Info"}
              </Text>
              {event?.joined?.txHash && (
                <Text
                  mt={4}
                  w={"100%"}
                  isTruncated
                  textOverflow="ellipsis"
                  whiteSpace="wrap"
                  ml={3}
                  textAlign={"justify"}
                  textDecor={"underline"}
                  cursor={"pointer"}
                  onClick={onHashClick}
                >
                  {"NFT TX Info"}
                </Text>
              )}
            </GridItem>
          </Grid>
        </Center>
      </Box>
      <Text fontSize="18px" textAlign="center" mt={2} mb={10} color={"#666666"}>
        By Happ3n
      </Text>
    </Fragment>
  );
};

export default Detail;
