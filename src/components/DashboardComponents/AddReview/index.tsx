import { Button, Textarea, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useAppSelector } from "../../../types/store";
import { addReview } from "../../../services/reviews";

const AddReview = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [review, setReview] = useState("");
  const [isValid, setIsValid] = useState(false);
  const { uid } = useAppSelector((state) => state.auth);

  const addNewReview = async () => {
    if (!review) {
      setIsValid(true);
      return;
    }
    setLoading(true);
    const reviewAdded = await addReview({ review, userId: uid });
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
      setError("Could not add your reply");
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
        isInvalid={isValid}
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Add a reply"
        size="md"
      />
      <br />
      <br />
      <Button isLoading={loading} onClick={addNewReview} colorScheme="pink">
        Add
      </Button>
    </div>
  );
};

export default AddReview;
