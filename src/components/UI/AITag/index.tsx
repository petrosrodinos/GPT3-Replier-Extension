import { Tag, TagLabel, TagCloseButton } from "@chakra-ui/react";
import { FC, useState, useEffect } from "react";
import { MAX_TAGS } from "../../../utils/constants";
import { useToast } from "@chakra-ui/react";
import "./style.css";
interface IProps {
  tag: string;
  tags: string[];
  length: number;
  onDelete: (tag: string) => void;
  onAdd: (tag: string) => void;
}

const AITag: FC<IProps> = ({ tag, tags, length, onDelete, onAdd }) => {
  const [selected, setSelected] = useState(false);
  const toast = useToast();

  useEffect(() => {
    if (!tags) return;
    if (tags?.includes(tag)) {
      setSelected(true);
    }
  }, [tags]);

  const handleClick = () => {
    if (!selected) {
      if (length + 1 > MAX_TAGS) {
        toast({
          title: "Max 5 tags allowed for better AI accuracy",
          status: "warning",
          duration: 5000,
          isClosable: true,
        });
        return;
      }
      onAdd(tag);
      setSelected(true);
    }
  };

  const handleDelete = (e: any) => {
    e.stopPropagation();
    onDelete(tag);
    setSelected(false);
  };

  return (
    <Tag
      onClick={handleClick}
      className={selected ? "selected" : "tag"}
      size="lg"
      borderRadius="full"
      variant={selected ? "solid" : "outline"}
      colorScheme="pink"
    >
      <TagLabel className="tag-label">{tag}</TagLabel>
      {selected && <TagCloseButton color="white" onClick={handleDelete} />}
    </Tag>
  );
};

export default AITag;
