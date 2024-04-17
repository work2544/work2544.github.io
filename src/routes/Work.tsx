import { Center, Divider, Flex, Heading, Stack, Text } from "@chakra-ui/react";

export default function Work() {
  return (
    <Flex
      
      alignContent={"center"}
      justifyContent={"center"}
      direction={"column"}
      gap={20}
    >
      <Center>
        <Stack>
          <Heading color={"black"} textAlign={"center"}>
            Hi, Work.
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
