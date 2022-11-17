import {
  HStack,
  Tag,
  TagLabel,
  TagCloseButton,
  SimpleGrid,
} from "@chakra-ui/react";
import { REPLY_TAGS } from "../../../utils/constants";
import "./style.css";

const AISettings = () => {
  return (
    <div>
      <SimpleGrid columns={[5, null, 5]} spacing="10px">
        {REPLY_TAGS.map((tag) => (
          <Tag
            className="tag"
            size="lg"
            key={tag}
            borderRadius="full"
            variant="solid"
            colorScheme="green"
          >
            <TagLabel className="tag-label">{tag}</TagLabel>
            <TagCloseButton />
          </Tag>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default AISettings;
