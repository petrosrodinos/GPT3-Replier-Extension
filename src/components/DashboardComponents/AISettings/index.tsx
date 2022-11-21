import { Button, SimpleGrid } from "@chakra-ui/react";
import { REPLY_TAGS, MIN_TAGS, REPLY_FORMAT } from "../../../utils/constants";
import AITag from "../../UI/AITag";
import { useState, useEffect } from "react";
import { useAppSelector } from "../../../types/store";
import { useToast } from "@chakra-ui/react";
import { addTags } from "../../../services/tags";
import { updateSettings } from "../../../redux/actions/auth/authSlice";
import { useAppDispatch } from "../../../types/store";
import ReplySelector from "../../UI/Select";
import "./style.css";

const AISettings = () => {
  const toast = useToast();
  const dispatch = useAppDispatch();
  const { uid, settings } = useAppSelector((state) => state.auth);
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [replyFor, setReplyFor] = useState<string>(
    settings?.replyFormat || REPLY_FORMAT[0]
  );

  useEffect(() => {
    setTags(settings?.tags || []);
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
    const tagsAdded = await addTags(tags, uid, replyFor);
    if (tagsAdded) {
      setLoading(false);
      dispatch(updateSettings({ tags, replyFormat: replyFor }));
      toast({
        title: "AI Settings updated successfully",
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

  const onChange = (value: string) => {
    setReplyFor(value);
  };

  return (
    <div>
      <ReplySelector onChange={onChange} value={replyFor} />
      <SimpleGrid columns={[2, null, 5]} spacing="10px">
        {REPLY_TAGS.map((tag) => (
          <AITag
            length={tags.length}
            tag={tag}
            onDelete={onDelete}
            onAdd={onAdd}
            tags={settings?.tags || []}
            key={tag}
          />
        ))}
      </SimpleGrid>
      <br />
      <Button isLoading={loading} onClick={saveTags} colorScheme="pink">
        Save
      </Button>
    </div>
  );
};

export default AISettings;
