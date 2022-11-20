import { Select } from "@chakra-ui/react";
import { FC } from "react";
import { useAppDispatch } from "../../../types/store";

const ReplySelector: FC = () => {
  const dispatch = useAppDispatch();

  const onChange = (e: any) => {
    console.log(e.target.value);
    // dispatch(updateTags(e.target.value));
  };

  return (
    <>
      <Select
        onChange={onChange}
        variant="filled"
        placeholder="Generate reply for..."
      >
        <option value="review">Review</option>
        <option value="email">Email</option>
        <option value="message">Message</option>
      </Select>
      <br />
    </>
  );
};

export default ReplySelector;
