import { Select } from "@chakra-ui/react";
import { REPLY_FORMAT } from "../../../utils/constants";
import { FC } from "react";

interface IProps {
  onChange: (value: string) => void;
  value: string;
}

const ReplySelector: FC<IProps> = ({ onChange, value }) => {
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
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </Select>
      <br />
    </>
  );
};

export default ReplySelector;
