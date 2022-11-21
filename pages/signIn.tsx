import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { SignInForm } from "../src/components/SignIn";

export default function SignIn() {
  return (
    <Box height={"100vh"}>
      <Head>
        <title>Sign In</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box height={"100%"}>
        <SignInForm />
      </Box>
    </Box>
  );
}
