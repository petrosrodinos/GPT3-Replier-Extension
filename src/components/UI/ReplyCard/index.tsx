import { CardBody, Card } from "@chakra-ui/card";
import { Tooltip, Text } from "@chakra-ui/react";
import { FC, useState } from "react";
import { Reply } from "../../../types/replies";

interface IProps {
  reply: Reply;
  category?: string;
}

const ReplyCard: FC<IProps> = ({ reply, category }) => {
  const [copyState, setCopyState] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopyState(true);
    setTimeout(() => {
      setCopyState(false);
    }, 500);
  };

  return category === reply.category ? (
    <Tooltip label={!copyState ? "Copy to Clipboard" : "Copied"}>
      <Card
        onClick={() => copyToClipboard(reply.review)}
        className="card-container"
      >
        <CardBody>
          <Text>{reply.review}</Text>
        </CardBody>
      </Card>
    </Tooltip>
  ) : null;
};

export default ReplyCard;
