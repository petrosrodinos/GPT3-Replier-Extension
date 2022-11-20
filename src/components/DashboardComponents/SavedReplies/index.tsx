import { useEffect, useState } from "react";
import { getReplies } from "../../../services/replies";
import { useAppSelector } from "../../../types/store";
import { Reply } from "../../../types/replies";
import ReplyCard from "../../UI/ReplyCard";
import { Alert, AlertIcon, Spinner } from "@chakra-ui/react";
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
      {replies?.map((reply: Reply, index) => (
        <ReplyCard reply={reply} index={index} key={index} />
      ))}
    </div>
  );
};

export default SavedReplies;
