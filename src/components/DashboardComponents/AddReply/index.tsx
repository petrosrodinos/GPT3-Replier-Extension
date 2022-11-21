import { Button, Textarea, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useAppSelector } from "../../../types/store";
import { addReply } from "../../../services/replies";
import ReplySelector from "../../UI/Select";
import { REPLY_FORMAT } from "../../../utils/constants";

const AddReply = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [review, setReview] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [replyFor, setReplyFor] = useState<string>(REPLY_FORMAT[0]);
  const { uid, plan } = useAppSelector((state) => state.auth);

  const addNewReply = async () => {
    if (!review) {
      setIsValid(true);
      return;
    }
    if (plan?.savedReplies == 0) {
      toast({
        title: "You can't add more replies",
        description: "Please upgrade your plan to continue",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setLoading(true);
    const reviewAdded = await addReply({
      review,
      userId: uid,
      category: replyFor,
    });
    if (reviewAdded) {
      setReview("");
      setLoading(false);
      toast({
        title: "Reply added successfully",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else {
      setLoading(false);
      toast({
        title: "Could not add your reply",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const onChange = (value: string) => {
    setReplyFor(value);
  };

  return (
    <div>
      <ReplySelector onChange={onChange} value={replyFor} />
      <Textarea
        cols={20}
        rows={5}
        isInvalid={isValid}
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Add a reply"
        size="md"
      />
      <br />
      <br />
      <Button isLoading={loading} onClick={addNewReply} colorScheme="pink">
        Add
      </Button>
    </div>
  );
};

export default AddReply;
