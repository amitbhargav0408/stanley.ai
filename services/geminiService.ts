import { GoogleGenAI, Chat, Type } from "@google/genai";
import type { InterviewSetupData, Feedback } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
const model = 'gemini-2.5-flash';

export const startInterviewSession = async (
  data: InterviewSetupData
): Promise<{ chat: Chat; firstQuestion: string }> => {
  
  const systemInstruction = `You are a friendly but professional AI hiring manager from EmployAbility.AI.
Your task is to conduct a job interview for the position of "${data.jobTitle}".
The job description is: "${data.jobDescription}".
The candidate's resume is: "${data.resume}".
Base your questions on the job description and the candidate's resume. Ask one question at a time.
Start with a friendly greeting and then ask the first question. Keep your responses concise and focused on the interview. Do not ask for the candidate's name as it is not provided.`;

  const chat = ai.chats.create({
    model,
    config: { systemInstruction },
  });

  const response = await chat.sendMessage({ message: "Hello, let's begin the interview. Please ask your first question." });
  
  return { chat, firstQuestion: response.text };
};

export const getInterviewFeedback = async (transcript: string): Promise<Feedback> => {
  const prompt = `Please analyze the following interview transcript. The candidate was applying for a senior-level position.
Provide a comprehensive evaluation of the candidate's performance.
Your analysis should be fair, constructive, and detailed.
Based on the transcript, provide the following in JSON format:
- "strengths": An array of strings, highlighting at least 3 key strengths.
- "improvements": An array of strings, suggesting at least 3 areas for improvement.
- "summary": A concise paragraph summarizing the candidate's performance.
- "overallScore": A numerical score from 1 to 100, representing their suitability for the role.

Transcript:
---
${transcript}
---
`;

  const response = await ai.models.generateContent({
    model,
    contents: prompt,
    config: {
        responseMimeType: "application/json",
        responseSchema: {
            type: Type.OBJECT,
            properties: {
                strengths: { type: Type.ARRAY, items: { type: Type.STRING } },
                improvements: { type: Type.ARRAY, items: { type: Type.STRING } },
                summary: { type: Type.STRING },
                overallScore: { type: Type.NUMBER },
            },
        },
    },
  });

  const jsonText = response.text.trim();
  return JSON.parse(jsonText);
};