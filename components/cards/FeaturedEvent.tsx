import React from "react";
import { FaEye } from "react-icons/fa";
import { Box, Image, Text, Flex, Card, CardBody, Icon } from "@chakra-ui/react";
import { DateBadge } from "./DateBatch";
import { Happ3nEvent } from "../../src/models/Event";
import {
  FormatDateStringToHours,
  FormatTime,
} from "../../src/utils/DataFormat";
type Props = {
  event: Happ3nEvent;
};

const FeaturedEvent = ({ event }: Props) => {
  return (
    <Card
      h={{ base: "auto", sm: "150px", md: "200px", lg: "200px" }}
      w={{ base: "auto", sm: "250px", md: "300px", lg: "300px" }}
      bgImage={`url(${event.nftImage})`}
      bgPos="center"
      bgSize="cover"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      position="relative"
      cursor="pointer" 
      _hover={{
        transform: "scale(1.05)", 
        transition: "transform 0.2s ease-in-out" 
      }}
    >
      <CardBody
        padding={"40px"}
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        height="100%"
      >
        <Box
          position="absolute"
          top={0}
          right={0}
          bottom={0}
          left={0}
          bgGradient="linear-gradient(180deg, rgba(16.75, 12.70, 12.70, 0.57) 11%, rgba(30.10, 22.83, 22.83, 0.19) 40%, rgba(0, 0, 0, 0.80) 76%)"
          borderRadius="lg"
          zIndex={0}
        />
        <Box zIndex={2} h={'100%'}>
          <Flex alignItems="center" justifyContent="space-between" mb={2}>
            <DateBadge 
              date="2024-04-05T17:45:33.789"
            />
          </Flex>
          <Flex alignItems="center" justifyContent="space-between" mb={2}>

          <Text
              fontSize="md"
              fontWeight="600"
              flex="1"
              height={'50px'}
              textShadow="1px 1px 2px rgba(0,0,0,0.9)"
              color="white"
            >
              {event.eventName}
            </Text>
          </Flex>
          <Flex alignItems="center" justifyContent="space-between">
            <Flex w={"50%"} justifyContent={"flex-start"}>
              <Text
                fontSize="12px"
                fontWeight="600"
                flex="0.5"
                lineHeight={"32px"}
                color={"textBrand"}
              >
                {FormatDateStringToHours(event.eventDate)}
              </Text>
            </Flex>
          </Flex>
        </Box>
      </CardBody>
    </Card>
  );
};

export default FeaturedEvent;
