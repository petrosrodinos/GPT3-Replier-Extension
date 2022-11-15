import { OPEN_AI_KEY } from "./constants";

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: OPEN_AI_KEY,
});
const openai = new OpenAIApi(configuration);

export const getReply = async (review: string): Promise<string> => {
  const config = "rude and ironic";
  const prompt = `generate a ${config} response for the following review: ${review}`;
  let response: any;
  try {
    response = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: prompt,
      temperature: 0.7,
      max_tokens: 250,
      top_p: 1,
      presence_penalty: 0,
      frequency_penalty: 0.6,
      best_of: 1,
    });
  } catch (error) {
    console.log(error);
  }

  const text = response.data.choices[0].text.trim();
  const reply = text || "could not generate a reply";

  return reply;
};

export const TEST_DATA = [
  "Reply 1",
  "Reply 2",
  "Reply 3",
  "Reply 4",
  "Reply 5",
  "Reply 6",
  "Reply 7",
  "Reply 8",
  "Reply 9",
  "Reply 10",
];

export function getRandomReply(): string {
  const index = randomNumber();
  const reply = TEST_DATA[index];
  console.log(reply);
  return reply;
}

function randomNumber(min = 0, max = 9) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
