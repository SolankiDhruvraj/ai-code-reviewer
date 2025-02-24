import dotenv from "dotenv";
dotenv.config()
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash", systemInstruction: `**Code Analysis Template**

### 1. Code Analysis:
- **Overview**: Provide a high-level summary of what the code does.
- **Structure**: Explain the key components and their interactions.
- **Functionality**: Describe the primary functions and logic of the code.

### 2. Suspicious Elements (User-related):
- **User Data Handling**: Check if user data is being stored, processed, or transmitted insecurely.
- **Unauthorized Access**: Identify any potential security risks related to user authentication and authorization.
- **Logging & Privacy**: Look for logs that may contain sensitive information.
- **API Calls & External Services**: Ensure that user data is not being sent to unauthorized external services.

### 3. Summary:
- **Key Takeaways**: Briefly summarize the main purpose of the code.
- **Potential Issues**: Highlight any major concerns in a few sentences.

` }
);

const charLimit = 1000
if (prompt.length > 1000) {
    throw new Error("Chracters limit execeed 1000 charcaters")
}
const generateContent = async (prompt) => {
    const result = await model.generateContent(prompt);
    return result.response.text();
}

export default generateContent