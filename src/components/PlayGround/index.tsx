import { getReply, getRandomReply } from "../../utils/gpt3";
import TestReview from "../UI/TestReview";
import { TEST_REVIEWS } from "../../utils/constants";
import { Text, Highlight } from "@chakra-ui/react";
import "./style.css";

let pressed = false;
let replies: string[] = [];
let downPressed = 1;
let prevId = "";

const getInputElement = (
  arrow: string = "ArrowUp"
): HTMLInputElement | null => {
  let id = document.activeElement?.id;
  if (!id) return null;
  if (arrow === "ArrowUp") {
    if (id !== prevId) {
      replies = [];
      prevId = id;
    }
  }
  let input = document.getElementById(id) as HTMLInputElement;
  return input;
};

const handleArrowUp = async () => {
  let input = getInputElement();
  if (!input) return;
  if (downPressed > 1) {
    downPressed--;
    input.value = replies[replies.length - downPressed];
    return;
  }
  input.style.cursor = "wait";
  const review = await getClipboardValue();
  // const reply = await getReply(review);
  const reply = getRandomReply();
  replies.push(reply);
  input.style.cursor = "default";
  input.value = reply;
};

const handleArrowDown = async () => {
  let input = getInputElement("ArrowDown");
  if (!input) return;
  downPressed++;
  if (downPressed > replies.length) {
    downPressed = 1;
  }
  input.value = replies[replies.length - downPressed];
};

document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (pressed) return;
  checkKey(key);
  pressed = true;
  setTimeout(() => {
    pressed = false;
  }, 500);
});

const checkKey = async (key: string) => {
  if (key === "ArrowUp") {
    handleArrowUp();
  } else if (key === "ArrowDown") {
    handleArrowDown();
  }
};

const getClipboardValue = async () => {
  const text = await navigator.clipboard.readText();
  return text;
};

function PlayGround() {
  return (
    <>
      <div className="playground-info-container">
        <Highlight
          query={["up arrow", "arrow down"]}
          styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
        >
          Copy a review from the spotlight section and press the up arrow key to
          get a reply and the arrow down key to get the previews reply.
        </Highlight>
      </div>
      {TEST_REVIEWS.map((review, index) => {
        return <TestReview review={review} index={index} />;
      })}
    </>
  );
}

export default PlayGround;
