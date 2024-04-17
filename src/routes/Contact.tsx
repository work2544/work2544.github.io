import { Center, Divider, Flex, Heading, Stack, Text } from "@chakra-ui/react";

export default function Contact() {
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
            Hi, Contact.
          </Heading>
          <Heading color={"red"} textAlign={"center"}>
            I'm a developer.
          </Heading>
        </Stack>
      </Center>
      <Divider orientation="horizontal" />
      <Center>
        <Text
          textAlign={"center"}
          color={"black"}
        >
          Let's build websites.
        </Text>
      </Center>
    </Flex>
  );
}
