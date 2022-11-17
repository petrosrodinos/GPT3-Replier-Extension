import { useEffect, useState } from "react";
import { getReplies } from "../../../services/reviews";
import { useAppSelector } from "../../../types/store";
import { Reply } from "../../../types/replies";
import ReplyCard from "../../ReplyCard";
import "./style.css";
import { Alert, AlertIcon } from "@chakra-ui/react";

const SavedReviews = () => {
  const { uid } = useAppSelector((state) => state.auth);
  const [replies, setReplies] = useState<Reply[]>([]);

  useEffect(() => {
    getUserReplies();
  }, [uid]);

  const getUserReplies = async () => {
    const replies = await getReplies(uid);
    console.log(replies);
    setReplies(replies);
  };

  return (
    <div>
      {replies.length === 0 && (
        <Alert status="warning">
          <AlertIcon />
          You have no saved reviews
        </Alert>
      )}
      {replies?.map((reply: Reply, index) => (
        <ReplyCard reply={reply} index={index} key={index} />
      ))}
    </div>
  );
};

export default SavedReviews;
