import AuthHandler from "../../components/auth";
import { Text } from "@chakra-ui/react";
import { Card } from "@chakra-ui/card";

const Auth = () => {
  return (
    <>
      <Card className="playground-card-container">
        <Text fontWeight="bold" color="pink.400">
          Sign Up to use AI Generated Replies
        </Text>
      </Card>
      <br />
      <AuthHandler />
    </>
  );
};

export default Auth;
