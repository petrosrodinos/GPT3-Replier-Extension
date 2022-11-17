import { useEffect, useState } from "react";
import { getReplies } from "../../../services/reviews";
import { useAppSelector } from "../../../types/store";
import { Reply } from "../../../types/replies";
import { Card, CardBody } from "@chakra-ui/card";
import "./style.css";
import { Icon } from "@chakra-ui/react";
import { MdContentCopy } from "react-icons/md";
import { Tooltip } from "@chakra-ui/react";

const SavedReviews = () => {
  const { uid } = useAppSelector((state) => state.auth);
  const [replies, setReplies] = useState<Reply[]>();

  useEffect(() => {
    getUserReplies();
  }, [uid]);

  const getUserReplies = async () => {
    const replies = await getReplies(uid);
    setReplies(replies);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div>
      {replies?.map((reply: any, index) => (
        <Card className="card-container" key={index}>
          <CardBody>
            <div className="card-content_container">
              <span>{reply.review}</span>
              <Icon
                className="card-icon"
                color="pink.500"
                onClick={() => copyToClipboard(reply.review)}
                as={MdContentCopy}
              />
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default SavedReviews;
