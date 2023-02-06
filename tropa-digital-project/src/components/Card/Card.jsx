import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import calendarIcon from "../../assets/calendarIcon2.png";

const Card = () => {
  return (
    <Flex
      width={"500px"}
      height={"250px"}
      bgColor={"white"}
      borderRadius={"5px"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <Box>
        <Image src="https://picsum.photos/id/1/470/150" borderRadius={"5px"} />
        <Flex
          width={"90px"}
          height={"24px"}
          bgColor={"black"}
          position={"relative"}
          top={"-140px"}
          left={"350px"}
          opacity={"0.6"}
          gap={'5px'}
          alignItems={'center'}
          justifyContent={'center'}
          borderRadius={'3px'}
        >
          <Image src={calendarIcon} height={'16px'}/>
          <Text color={"white"} fontSize={"10px"} textAlign={"center"}>
            2 min atrás
          </Text>
        </Flex>
        <Text fontWeight={"bold"} fontSize={"small"}>
          Lorem ipsum is simply dummy text of the printing and typeseltin...
        </Text>
        <Text fontSize={"smaller"}>
          Lorem ipsum is simply dummy text of the printing and typeseltin...
        </Text>
      </Box>
    </Flex>
  );
};

export default Card;
