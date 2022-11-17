import { useState } from "react";
import { getReply, getRandomReply } from "../utils/gpt3";

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
    if (id === prevId) {
      // if (replies.length >= 3) {
      //   alert("You can only use this feature 3 times");
      //   return null;
      // }
    } else {
      prevId = id;
      replies = [];
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
  const reply = await getReply(review);
  // const reply = getRandomReply();
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

const TEST_REVIEW =
  "Amazing stay, place was beautiful and in good location. Highly recommend to anyone";

function Test() {
  const [review, setReview] = useState(TEST_REVIEW);

  const copyToClickboard = async () => {
    await navigator.clipboard.writeText(review);
  };

  return (
    <div className="App">
      <input
        onChange={(e: any) => setReview(e.target.value)}
        type="text"
        value={review}
        style={{ width: "100%" }}
      />
      <button onClick={copyToClickboard}>COPY</button>

      <br />
      <textarea id="input" placeholder="review" rows={10} cols={50} />
    </div>
  );
}

export default Test;