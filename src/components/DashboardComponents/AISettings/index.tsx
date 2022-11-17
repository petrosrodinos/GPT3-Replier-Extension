import { Button, SimpleGrid } from "@chakra-ui/react";
import { REPLY_TAGS } from "../../../utils/constants";
import AITag from "../../AITag";
import { useState } from "react";
import "./style.css";

const AISettings = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onDelete = (tag: string) => {
    console.log("delete", tag);
  };

  const onAdd = (tag: string) => {
    console.log("add", tag);
  };

  const saveTags = () => {
    setLoading(true);
  };

  return (
    <div>
      <SimpleGrid columns={[2, null, 5]} spacing="10px">
        {REPLY_TAGS.map((tag) => (
          <AITag onDelete={onDelete} onAdd={onAdd} tag={tag} key={tag} />
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
