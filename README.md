# 💬 Gemini Chatbot (JavaScript Terminal App)

A simple Node.js terminal chatbot using **Google's Gemini 1.5 Flash API**. This app allows real-time chatting with Gemini from your command line using OpenAI-like responses.

> ✅ Built with JavaScript  
> ✅ Uses official Google Generative AI SDK  
> ✅ Interactive command-line chat experience  
> ✅ Designed for quick testing and demo purposes  

---

## 📸 Demo Preview

```bash
Chat with Gemini (type 'exit' to quit)
You: hi
Gemini: Hi there! How can I help you today?

You: tell me a joke
Gemini: Why don't skeletons fight each other? They don't have the guts!
🚀 Features
🌐 Connects to Gemini 1.5 Flash model using Google Generative AI SDK

📥 Takes user input via terminal using readline

🔄 Keeps the conversation going in a loop until you type exit

🎯 Clean output with a loading spinner (ora)

🛡️ Uses .env for secure API key storage

🧠 Requirements
Node.js v16+ installed

Google Generative AI API Key

Internet connection

🔧 Setup Instructions
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/YOUR_USERNAME/gemini-js-demo.git
cd gemini-js-demo
2. Install dependencies
bash
Copy
Edit
npm install
3. Add your API key
Create a .env file in the root directory with the following:

ini
Copy
Edit
GOOGLE_API_KEY=your_google_api_key_here
🗝️ To get a key:
Visit https://makersuite.google.com/app/apikey

4. Run the chatbot
bash
Copy
Edit
node index.js
Type your messages and chat with Gemini!

🗂️ File Structure
bash
Copy
Edit
gemini-js-demo/
├── node_modules/
├── .env               # Your API key (keep it secret)
├── index.js           # Main chatbot script
├── package.json       # Project metadata & dependencies
└── README.md          # You're reading it!
🧰 Tech Stack
Node.js – JavaScript runtime

Google Generative AI SDK – To access Gemini API

Readline – CLI input

Ora – Spinner for better UX

Dotenv – Securely store API key

🧪 Sample Questions to Try
Tell me a fun fact about space

Summarize the plot of Inception

Translate "hello" to French

What's the capital of Japan?

Write a haiku about programming

🛑 Exit the chatbot
Type:

bash
Copy
Edit
exit
✨ Author
Made with 💻 by Asrith Behala
📧 uudoonasrith@gmail.com
