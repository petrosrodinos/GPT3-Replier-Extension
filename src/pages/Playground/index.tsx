import { Text } from "@chakra-ui/react";
import { Card } from "@chakra-ui/card";
import AuthHandler from "../../components/auth";
import "./style.css";

const Playground = () => {
  return (
    <div>
      <Card className="playground-card-container">
        <Text fontWeight="bold" color="pink.400">
          Sign Up to Use PlayGround
        </Text>
      </Card>
      <br />
      <AuthHandler />
    </div>
  );
};

export default Playground;
