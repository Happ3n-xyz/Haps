import { Box, Text } from "@chakra-ui/react";
import { format, parseISO } from 'date-fns';

type Props = {
  date: string;
  time?: boolean;  // Prop opcional para mostrar la hora
};

export const DateBadge = ({ date, time = false }: Props) => {
  // Parsear la fecha ISO y formatear
  const dateObject = parseISO(date);
  const dayOfMonth = format(dateObject, "d");  
  const month = format(dateObject, "MMM");  
  const hour = format(dateObject, "HH:mm"); 

  return (
    <Box width="42px" height={time ? "62px" : "42px"} position="relative">
      <Box
        width="40px"
        height="40px"
        position="absolute"
        left="0"
        top="0"
        bg="white"
        borderRadius="6px"
      />
      <Text
        width="30px"
        height="20px"
        position="absolute"
        left="5px"
        top="16px"
        textAlign="center"
        color="black"
        fontSize="16px"
        fontWeight="600"
        fontFamily="Poppins"
      >
        {dayOfMonth}
      </Text>
      <Text
        width="30px"
        height="18px"
        position="absolute"
        left="5px"
        top="5px"
        textAlign="center"
        color="black"
        fontSize="10px"
        fontWeight="600"
        fontFamily="Poppins"
        textTransform="uppercase"
      >
        {month}
      </Text>
      {time && (
        <Text
          width="40px"
          height="20px"
          position="absolute"
          left="1px"
          top="45px"
          textAlign="center"
          color="white"
          fontSize="12px"
          fontWeight="600"
          fontFamily="Poppins"
        >
          {hour}
        </Text>
      )}
    </Box>
  );
};

export default DateBadge;
