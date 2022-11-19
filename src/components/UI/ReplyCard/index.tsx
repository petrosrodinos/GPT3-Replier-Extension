import { CardBody, Card } from "@chakra-ui/card";
import { Tooltip, Text } from "@chakra-ui/react";
import { FC, useState } from "react";
import { Reply } from "../../../types/replies";

interface IProps {
  reply: Reply;
  index: number;
}

const ReplyCard: FC<IProps> = ({ reply, index }) => {
  const [copyState, setCopyState] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopyState(true);
    setTimeout(() => {
      setCopyState(false);
    }, 500);
  };

  return (
    <Tooltip label={!copyState ? "Copy to Clipboard" : "Copied"}>
      <Card
        onClick={() => copyToClipboard(reply.review)}
        className="card-container"
        key={index}
      >
        <CardBody>
          <Text>{reply.review}</Text>
        </CardBody>
      </Card>
    </Tooltip>
  );
};

export default ReplyCard;
