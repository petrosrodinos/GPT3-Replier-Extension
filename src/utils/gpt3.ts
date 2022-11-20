import { OPEN_AI_KEY } from "./constants";

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: OPEN_AI_KEY,
});

export const openai = new OpenAIApi(configuration);
