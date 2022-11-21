import { useEffect, useState } from "react";
import { getReplies } from "../../../services/replies";
import { useAppSelector } from "../../../types/store";
import { Reply } from "../../../types/replies";
import ReplyCard from "../../UI/ReplyCard";
import { Alert, AlertIcon, Button, Spinner } from "@chakra-ui/react";
import { REPLY_FORMAT } from "../../../utils/constants";
import "./style.css";

const SavedReplies = () => {
  const { uid } = useAppSelector((state) => state.auth);
  const [replies, setReplies] = useState<Reply[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserReplies();
  }, [uid]);

  const getUserReplies = async () => {
    setLoading(true);
    const replies = await getReplies(uid);
    setLoading(false);
    setReplies(replies);
  };

  return (
    <div>
      {loading && <Spinner className="spinner" size="lg" color="pink.400" />}
      {replies.length === 0 && !loading && (
        <Alert status="warning">
          <AlertIcon />
          You have no saved replies
        </Alert>
      )}
      <br />
      <Button variant="outline" onClick={getUserReplies} colorScheme="pink">
        Get Replies
      </Button>
      <br />
      <br />
      {REPLY_FORMAT.map((category) => (
        <div key={category}>
          <b>{category}</b>
          {replies?.map((reply: Reply, index) => {
            return <ReplyCard category={category} reply={reply} key={index} />;
          })}
        </div>
      ))}
    </div>
  );
};

export default SavedReplies;
