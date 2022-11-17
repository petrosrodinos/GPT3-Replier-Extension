import { useEffect, useState } from "react";
import { getReplies } from "../../../services/reviews";
import { useAppSelector } from "../../../types/store";
import { Reply } from "../../../types/replies";
import ReplyCard from "../../ReplyCard";
import "./style.css";

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

  return (
    <div>
      {replies?.map((reply: Reply, index) => (
        <ReplyCard reply={reply} index={index} key={index} />
      ))}
    </div>
  );
};

export default SavedReviews;
