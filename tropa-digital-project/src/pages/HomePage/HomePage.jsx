import { Box, Button, Flex, Image, Text, Wrap } from "@chakra-ui/react";
import React, { useState } from "react";
import logoTropa from "../../assets/logoTropa2.jpg";
import logoInicio from "../../assets/logoInicio.png";
import { HorizontalLine } from "./styles";
import Card from "../../components/Card/Card";

const HomePage = () => {
  const arrayOfCards = [
    { id: "card1" },
    { id: "card2" },
    { id: "card3" },
    { id: "card4" },
    { id: "card5" },
    { id: "card6" },
  ];
  return (
    <Flex minHeight={"937px"}>
      <Flex flexDirection={"column"} width={"450px"} paddingLeft={"30px"}>
        <Box>
          <Image src={logoTropa} />
        </Box>
        <Flex flexDirection={"column"} gap={"8px"}>
          <Button
            bgColor={"#f3f3f3"}
            borderRadius={"5px 0 0 5px"}
            height={"45px"}
            fontSize={"sm"}
            justifySelf={"start"}
            gap={"5px"}
          >
            <Image src={logoInicio} />
            Inicio
          </Button>
          <Flex flexDirection={"column"} gap={"8px"} paddingRight={"8px"}>
            <Button
              bgColor={"#2eb0b2"}
              color={"white"}
              height={"45px"}
              fontSize={"sm"}
            >
              Contatos
            </Button>
            <Button
              bgColor={"#2eb0b2"}
              color={"white"}
              height={"45px"}
              fontSize={"sm"}
            >
              Relatórios
            </Button>
            <Button
              bgColor={"#2eb0b2"}
              color={"white"}
              height={"45px"}
              fontSize={"sm"}
            >
              Contatos
            </Button>
            <Button
              bgColor={"#2eb0b2"}
              color={"white"}
              height={"45px"}
              fontSize={"sm"}
            >
              Contatos
            </Button>
            <Button
              bgColor={"#2eb0b2"}
              color={"white"}
              height={"45px"}
              fontSize={"sm"}
            >
              Contatos
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        minHeight={"937px"}
        minWidth={"1700px"}
        bgColor={"#f3f3f3"}
        flexDirection={"column"}
        paddingLeft={"50px"}
        paddingTop={"40px"}
        gap={"30px"}
      >
        <Flex gap={'5px'}>
        <Text fontFamily={'Sofia Sans Extra Condensed'} fontSize={'40px'} fontWeight={'1'}>Olá</Text>
        <Text fontFamily={'Sofia Sans Extra Condensed'} fontSize={'40px'} fontWeight={'400'}>Usuário</Text>
        </Flex>
        
        <HorizontalLine />
        <Flex wrap={'wrap'} gap={'50px'}>
          {arrayOfCards.map((card) => {
            return <Card key={card.id} />;
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HomePage;
