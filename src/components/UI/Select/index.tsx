import { Select } from "@chakra-ui/react";
import { REPLY_FORMAT } from "../../../utils/constants";
import { FC } from "react";
import { useAppSelector } from "../../../types/store";

interface IProps {
  onChange: (value: string) => void;
  value: string;
}

const ReplySelector: FC<IProps> = ({ onChange, value }) => {
  const { settings } = useAppSelector((state) => state.auth);

  const onValueChange = (e: any) => {
    onChange(e.target.value);
  };

  return (
    <>
      <Select
        onChange={onValueChange}
        variant="filled"
        placeholder="Generate reply for..."
        value={value}
      >
        {REPLY_FORMAT.map((value: string) => (
          <option value={value}>{value}</option>
        ))}
      </Select>
      <br />
    </>
  );
};

export default ReplySelector;
