import { Tag, TagLabel, TagCloseButton } from "@chakra-ui/react";
import { FC, useState } from "react";
import "./style.css";

interface IProps {
  tag: string;
  onDelete: (tag: string) => void;
  onAdd: (tag: string) => void;
}

const AITag: FC<IProps> = ({ tag, onDelete, onAdd }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(true);
    if (!selected) {
      onAdd(tag);
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
