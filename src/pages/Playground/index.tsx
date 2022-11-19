import { useAppSelector } from "../../types/store";
import AuthIndicator from "../../components/auth/AuthIndicator";
import { Card } from "@chakra-ui/card";
import { Textarea, Text } from "@chakra-ui/react";
import PlayGround from "../../components/PlayGround";
import "./style.css";

const Playground = () => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  return (
    <div>
      {isLoggedIn ? (
        <PlayGround />
      ) : (
        <AuthIndicator
          redirect="playground"
          label="Sign Up to Use PlayGround"
        />
      )}
    </div>
  );
};

export default Playground;
