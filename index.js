import dotenv from 'dotenv';
import ora from 'ora';
import promptSync from 'prompt-sync';
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const prompt = promptSync();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function askGemini(question) {
  const spinner = ora('Thinking...').start();
  try {
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: question }] }]
    });
    const response = await result.response;
    const text = response.text();
    spinner.stop();
    console.log(`\nGemini: ${text}\n`);
  } catch (error) {
    spinner.stop();
    console.error("Error:", error.message || error);
  }
}

console.log("Chat with Gemini (type 'exit' to quit)");

async function chatLoop() {
  while (true) {
    const input = prompt('You: ');
    if (input.trim().toLowerCase() === 'exit') {
      console.log('Goodbye!');
      break;
    }
    await askGemini(input);
  }
}

chatLoop();
