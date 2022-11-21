import Head from "next/head";
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Spinner,
  Button,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  console.log("data", session);

  if (!session) {
    return (
      <Box
        height={"100vh"}
        bgGradient={{ sm: "linear(to-r, blue.600, purple.600)" }}
        py={{ base: "12", md: "24" }}
        color="white"
      >
        <Head>
          <title>Sign In</title>
          <meta name="description" content="Dashboard" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box height={"100%"}>
          <Container height="100%">
            <Stack direction={"row"} justifyContent="center">
              <Heading mr="2">Loading</Heading>
              <Spinner size={"lg"} />
            </Stack>
          </Container>
        </Box>
      </Box>
    );
  }

  return (
    <Box height={"100vh"} color="white">
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        bgGradient={{ sm: "linear(to-r, blue.600, purple.600)" }}
        py={{ base: "12", md: "24" }}
        height={"100%"}
      >
        <Container maxW={"container.lg"}>
          <Heading height={"100%"}>Dashboard</Heading>
          <Stack>
            <Text>Welcome {session?.user?.name}</Text>
            <Text>
              You are authenticated and are welcome to see this screen.
            </Text>
            <Button variant={"solid"} onClick={() => signOut()}>
              Sign out
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
