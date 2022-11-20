import { Button, Textarea, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useAppSelector } from "../../../types/store";
import { addReply } from "../../../services/replies";

const AddReply = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [review, setReview] = useState("");
  const [isValid, setIsValid] = useState(false);
  const { uid } = useAppSelector((state) => state.auth);

  const addNewReply = async () => {
    if (!review) {
      setIsValid(true);
      return;
    }
    setLoading(true);
    const reviewAdded = await addReply({ review, userId: uid });
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
  return (
    <div>
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
