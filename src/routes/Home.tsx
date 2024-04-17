import {
  AbsoluteCenter,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Home() {
  return (
    // <Flex
    //   alignContent={"center"}
    //   justifyContent={"center"}
    //   direction={"column"}
    //   gap={20}
    // >
    // <Center>
    //   <Heading size="4xl" color={"black"} textAlign={"center"}>
    //     WELCOM TO <br /> MY PORTFOLIO
    //   </Heading>
    // </Center>
    // <Center>
    //   <Text
    //     fontSize="3xl"
    //     fontWeight={"bold"}
    //     textAlign={"center"}
    //     color={"black"}
    //   >
    //     LET'S SEE
    //   </Text>
    // </Center>
    // </Flex>
    <Container>
      <AbsoluteCenter>
        <Center>
          <Heading size="4xl" color={"black"} textAlign={"center"}>
            WELCOM TO <br /> MY PORTFOLIO
          </Heading>
        </Center>
        <Center>
          <Text
            fontSize="3xl"
            fontWeight={"bold"}
            textAlign={"center"}
            color={"black"}
          >
            LET'S SEE
          </Text>
        </Center>
      </AbsoluteCenter>
    </Container>
  );
}
