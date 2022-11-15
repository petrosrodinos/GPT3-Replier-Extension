import { getRandomReply, getReply } from "./gpt3";

const TEST_REVIEW =
  "Amazing stay, place was beautiful and in good location. Highly recommend to anyone";

let pressed = false;

const handleArrowUp = async () => {
  let id = document.activeElement?.id;
  if (!id) return;
  console.log(id);
  let input = document.getElementById(id) as HTMLInputElement;
  input.style.cursor = "wait";
  const review = await getClipboardValue();
  // const response = await getReply(TEST_REVIEW);
  const response = getRandomReply();
  input.value = response;
  input.style.cursor = "default";
};

const handleArrowDown = async () => {
  console.log("kato");
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
