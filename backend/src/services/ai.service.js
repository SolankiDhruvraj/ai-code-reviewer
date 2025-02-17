import dotenv from "dotenv";
dotenv.config()
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash", systemInstruction: "You are an code reviewer and you have an experties in development and you are expert in code reviewing, give me code explaination, Give answer in short , show the code again and explain" }
);

const generateContent = async (prompt) => {
    const result = await model.generateContent(prompt);
    return result.response.text();
}

export default generateContent