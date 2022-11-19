import { Button, SimpleGrid } from "@chakra-ui/react";
import { REPLY_TAGS } from "../../../utils/constants";
import AITag from "../../AITag";
import { useState, useEffect } from "react";
import { useAppSelector } from "../../../types/store";
import "./style.css";

const AISettings = () => {
  const { tags: selectedTags } = useAppSelector((state) => state.auth);
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onDelete = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const onAdd = (tag: string) => {
    setTags([...tags, tag]);
  };

  const saveTags = () => {
    setLoading(true);
  };

  return (
    <div>
      <SimpleGrid columns={[2, null, 5]} spacing="10px">
        {REPLY_TAGS.map((tag) => (
          <AITag
            tag={tag}
            onDelete={onDelete}
            onAdd={onAdd}
            tags={selectedTags}
            key={tag}
          />
        ))}
      </SimpleGrid>
      <br />
      <Button isLoading={loading} onClick={saveTags} colorScheme="pink">
        Save Tags
      </Button>
    </div>
  );
};

export default AISettings;
