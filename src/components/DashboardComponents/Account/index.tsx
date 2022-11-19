import { Stat, StatLabel, StatNumber, StatHelpText } from "@chakra-ui/react";
import { Card } from "@chakra-ui/card";
import { useAppSelector } from "../../../types/store";
import "./style.css";

const Account = () => {
  const { plan } = useAppSelector((state) => state.auth);
  return (
    <>
      <Card className="stat-card-container">
        <Stat className="stat-details-container">
          <StatLabel>Remained Requests</StatLabel>
          <StatNumber className="stat-details">{plan?.requests}</StatNumber>
          <StatHelpText> Plan activated: Feb 12 - Feb 28</StatHelpText>
        </Stat>
      </Card>
      <Card className="stat-card-container">
        <Stat className="stat-details-container">
          <StatLabel>Remained Replies to Save</StatLabel>
          <StatNumber className="stat-details">{plan?.savedReplies}</StatNumber>
          <StatHelpText> Plan activated: Feb 12 - Feb 28</StatHelpText>
        </Stat>
      </Card>
    </>
  );
};

export default Account;
