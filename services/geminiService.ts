import { GoogleGenAI } from "@google/genai";
import { STACK_DATA } from "../constants";

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("API_KEY is not set in process.env");
      throw new Error("API Key missing");
    }
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
};

export const generateArchitecturalInsight = async (query: string): Promise<string> => {
  try {
    const client = getClient();
    
    // Construct a context-aware system prompt
    const stackContext = STACK_DATA.map(s => `- ${s.name_ar} (${s.name_en}): ${s.category}`).join('\n');
    
    const systemInstruction = `
      You are an expert Google Cloud Platform Solutions Architect.
      You are advising a team managing the following technology stack (defined in Arabic and English):
      
      ${stackContext}
      
      Your goal is to provide concise, technical, and actionable advice.
      When answering, specificy which service in the stack you are referring to.
      If the user asks about a service not in the stack, politely mention it's not currently in their defined architecture but offer a brief comparison.
      
      Format your response with Markdown. Use bullet points for clarity.
      If the query is in Arabic, respond in Arabic. If English, respond in English.
    `;

    const response = await client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: query,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "Unable to generate insight at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error connecting to AI Architect. Please check your API configuration.";
  }
};
