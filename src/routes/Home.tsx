import {
  AbsoluteCenter,
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      width={"100%"}
      height={"100vh"}
      alignContent={"center"}
      justifyContent={"center"}
      direction={"column"}
      gap={20}
    >
      <Center>
        <Stack>
          <Heading color={"black"} textAlign={"center"}>
            Hi, my name is Latthaphol.
          </Heading>
          <Heading color={"red"} textAlign={"center"}>
            {" "}
            I'm a developer.
          </Heading>
        </Stack>
      </Center>
      <Divider orientation="horizontal" />
      <Center>
        <Text
          fontSize="1rem"
          fontWeight={"bold"}
          textAlign={"center"}
          color={"black"}
        >
          Let's build websites.
        </Text>
      </Center>
    </Flex>
  );
}
