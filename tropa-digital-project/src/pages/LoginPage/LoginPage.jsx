import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import notebookImage from "../../assets/notebookImage.jpg";
import logoTropa from "../../assets/logoTropa.jpg";
import hidePassword from "../../assets/notVisible.png";
import showPassword from "../../assets/visible.png";
import { goToHomePage } from "../../Routes/coordinator";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleChange = () => setShow(!show);
  return (
    <Flex alignItems={"center"} bgColor={'#ff6c22'} justifyContent={"center"} minHeight={"937px"}>
      <Flex
        width={"800px"}
        height={"500px"}
        bgColor={"white"}
        borderRadius={"5px"}
      >
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          paddingLeft={"32px"}
          gap={"15px"}
        >
          <Image src={logoTropa} />
          <Flex flexDirection={"column"} gap={"8px"}>
            <Input
              width={"300px"}
              placeholder={"Digite seu email"}
              fontSize={"sm"}
            />
            <InputGroup>
              <Input
                width={"300px"}
                type={show ? 'text' : 'password'}
                placeholder={"Digite sua senha"}
                fontSize={"sm"}
              />
              <InputRightElement>
                <Button fontSize={"smaller"} onClick={handleChange}>
                  {show ? <Image src={hidePassword} /> : <Image src={showPassword} />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button
              width={"150px"}
              color={"white"}
              colorScheme={"cyan"}
              onClick={() => goToHomePage(navigate)}
            >
              Acessar
            </Button>
          </Flex>
        </Flex>

        <Flex>
          <Image src={notebookImage} borderRadius={'0 5px 5px 0'}/>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LoginPage;
