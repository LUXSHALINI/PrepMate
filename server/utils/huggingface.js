// server/seed/utils/huggingface.js
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const HF_API_URL = 'https://api-inference.huggingface.co/models/bigscience/bloomz-560m';
const HF_API_KEY = process.env.HF_API_KEY;

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const generateAnswer = async (question) => {
  try {
    const response = await axios.post(
      HF_API_URL,
      { inputs: question },
      {
        headers: {
          Authorization: `Bearer ${HF_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const output = response.data?.[0]?.generated_text;
    return output || 'Answer not available';
  } catch (error) {
    console.error(` Error generating answer for "${question}" → ${error.message}`);
    return 'Answer not available';
  } finally {
    await delay(1000); // Rate-limit avoid panna 1 sec delay
  }
};
