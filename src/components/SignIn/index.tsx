import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import * as React from "react";
import { Logo } from "./Logo";
import { signIn } from "next-auth/react";
import { GitHubIcon } from "./ProviderIcons";

export const SignInForm = () => (
  <Box
    bgGradient={{ sm: "linear(to-r, blue.600, purple.600)" }}
    py={{ base: "12", md: "24" }}
    height={"100%"}
  >
    <Container
      maxW="md"
      py={{ base: "0", sm: "8" }}
      px={{ base: "4", sm: "10" }}
      bg={useBreakpointValue({ base: "transparent", sm: "white" })}
      boxShadow={{ base: "none", sm: "xl" }}
      borderRadius={{ base: "none", sm: "xl" }}
    >
      <Stack spacing="8">
        <Stack spacing="6" align="center">
          <Logo />
          <Stack spacing="3" textAlign="center">
            <Heading size="xs">Log in to your account</Heading>
            <Text color="muted">Start making your dreams come true</Text>
          </Stack>
        </Stack>
        <Stack spacing="6">
          <Button
            leftIcon={<GitHubIcon boxSize="5" />}
            iconSpacing="3"
            onClick={() => signIn("github")}
          >
            Continue with Github
          </Button>
          <Divider />
        </Stack>
        <Stack spacing="0.5" align="center">
          <Text fontSize="sm" color="muted">
            Having trouble logging in?
          </Text>
          <Button variant="link" colorScheme="blue" size="sm">
            Contact us
          </Button>
        </Stack>
      </Stack>
    </Container>
  </Box>
);
