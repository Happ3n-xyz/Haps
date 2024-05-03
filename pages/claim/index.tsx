import React, { Fragment } from "react";
import {
  Box,
  Center,
  Text,
  Grid,
  GridItem,
  Image,
  Input,
  Button,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons"; // Asumiendo que tienes iconos
import { DateBadge } from "../../components/cards/DateBatch";

const Claim = () => {
  return (
    <Fragment>
      <Box mt={"70px"} w={"100%"} h={"700px"} px={"30px"} >
        <Center mt={100} >
          <Grid templateColumns="repeat(2, 1fr)" gap={6} alignItems={'center'}>
            <GridItem w="100%" mr={"50px"}>
              {/* Columna Izquierda con Imagen */}
              <Image
                src="https://picsum.photos/500/500"
                alt="Imagen del Hap"
                width={500}
                height={500}
                borderRadius={30}
              />
            </GridItem>
            <GridItem w="500px">
              <Box display="flex" alignItems="center" mb={4} h={"70px"}>
                <DateBadge date="2024-04-05T17:45:33.789" time />
                <Text
                  ml={"20px"}
                  h={"100%"}
                  fontSize={"30px"}
                  w={"100%"}
                  isTruncated
                  alignItems={"flex-start"}
                >
                  Event Title
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
                Texto de la segunda fila Texto de la segunda fila Texto de la
                segunda fila Texto de la segunda fila Texto de la segunda fila
                Texto de la segunda fila Texto de la segunda fila Texto de la
                segunda fila
              </Text>
              <Box
                border="1px"
                mt={10}
                borderColor="#2a2a2a"
                borderRadius="20px"
                p={4}
                bg={"cardBackground"}
              >
                <Text mb={1} fontSize={"14px"}>
                  Secret Word:
                </Text>
                <Input placeholder="Type secret word here..." mb={4} />
                <Button
                  bg={"buttonPrimary.bg"}
                  color={"buttonPrimary.color"}
                  _hover={{
                    bg: "buttonPrimary.hover",
                    color: "gray.600",
                  }}
                >
                  Claim Hap
                </Button>
              </Box>
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

export default Claim;
