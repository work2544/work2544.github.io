import {
  AbsoluteCenter,
  Center,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Container>
      <AbsoluteCenter>
        <Center>
          <Heading size="4xl" textAlign={"center"}>
            WELCOM TO <br /> MY PORTFOLIO
          </Heading>
        </Center>
        <Center>
          <Text
            fontSize="3xl"
            fontWeight={"bold"}
            textAlign={"center"}
          >
            LET'S SEE
          </Text>
        </Center>
      </AbsoluteCenter>
    </Container>
  );
}
