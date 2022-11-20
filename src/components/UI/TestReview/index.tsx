import { FC } from "react";
import { Textarea, Text, Icon } from "@chakra-ui/react";
import { Card } from "@chakra-ui/card";
import { BiCopy } from "react-icons/bi";
import "./style.css";

interface IProps {
  review: string;
  index: number;
}

const TestReview: FC<IProps> = ({ review, index }) => {
  const copyToClickboard = async () => {
    await navigator.clipboard.writeText(review);
  };

  return (
    <Card className="playground-card-container">
      <Icon
        as={BiCopy}
        onClick={copyToClickboard}
        className="copy-to-clickboard-icon"
        color="pink.600"
      >
        Copy to Clipboard
      </Icon>
      <Text color="pink.700" fontWeight="bold" fontSize="lg">
        {review}
      </Text>

      <br />
      <Textarea
        id={`review-${index}`}
        size="lg"
        placeholder="You reply will be displayed here"
      />
    </Card>
  );
};

export default TestReview;
