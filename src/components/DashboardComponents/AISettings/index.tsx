import { Button, SimpleGrid } from "@chakra-ui/react";
import { REPLY_TAGS, MIN_TAGS } from "../../../utils/constants";
import AITag from "../../UI/AITag";
import { useState, useEffect } from "react";
import { useAppSelector } from "../../../types/store";
import { useToast, Select } from "@chakra-ui/react";
import { addTags } from "../../../services/tags";
import { updateTags } from "../../../redux/actions/auth/authSlice";
import { useAppDispatch } from "../../../types/store";
import "./style.css";
import ReplySelector from "../../UI/Select";

const AISettings = () => {
  const toast = useToast();
  const dispatch = useAppDispatch();
  const { uid, tags: selectedTags } = useAppSelector((state) => state.auth);
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTags(selectedTags);
  }, []);

  const onDelete = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const onAdd = (tag: string) => {
    setTags([...tags, tag]);
  };

  const saveTags = async () => {
    if (tags.length < MIN_TAGS) {
      toast({
        title: "Please select at least 3 tags",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setLoading(true);
    const tagsAdded = await addTags({ tags, userId: uid });
    if (tagsAdded) {
      setLoading(false);
      dispatch(updateTags(tags));
      toast({
        title: "Tags added successfully",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else {
      setLoading(false);
      toast({
        title: "Could not update tags",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <ReplySelector />
      <SimpleGrid columns={[2, null, 5]} spacing="10px">
        {REPLY_TAGS.map((tag) => (
          <AITag
            length={tags.length}
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
