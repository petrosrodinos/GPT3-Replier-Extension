import { Text } from "@chakra-ui/react";
import { Card } from "@chakra-ui/card";
import { FC } from "react";
import AuthHandler from "../";
import { useNavigate } from "react-router-dom";

interface IProps {
  label: string;
  redirect: string;
}

const AuthIndicator: FC<IProps> = ({ label, redirect }) => {
  let navigate = useNavigate();

  const onUserLogin = () => {
    navigate(`/${redirect}`);
  };

  return (
    <div>
      <Card className="playground-card-container">
        <Text fontWeight="bold" color="pink.400">
          {label}
        </Text>
      </Card>
      <br />
      <AuthHandler onUserLogin={onUserLogin} />
    </div>
  );
};

export default AuthIndicator;
