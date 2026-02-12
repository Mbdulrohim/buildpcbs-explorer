import { GoogleGenAI } from "@google/genai";
import { Project } from "../types";

// Initialize Gemini Client
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const askAiAboutProject = async (project: Project, question: string): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please configure the environment.";
  }

  try {
    const projectContext = JSON.stringify({
      title: project.title,
      description: project.description,
      specs: project.specs,
      bom: project.bom,
      isVerified: project.siliconSeal,
      author: project.author.username
    });

    const systemPrompt = `
      You are an expert Hardware Engineer AI for BuildPCBs.
      You are analyzing a specific hardware project manifest.
      
      Project Context:
      ${projectContext}
      
      Your goal is to answer technical questions about this specific design.
      If the user asks about compatibility, voltage, or components, use the BOM and Specs provided.
      Keep answers concise, technical but accessible.
      If the information isn't in the specs, make a reasonable inference based on standard engineering practices for this type of device, but mention it is an estimation.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: systemPrompt,
      }
    });

    return response.text || "I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "An error occurred while analyzing the hardware specs.";
  }
};

export const generateSummary = async (project: Project): Promise<string> => {
  if (!apiKey) return "API Key missing.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Summarize this hardware project in one punchy sentence for a marketplace listing: ${project.title} - ${project.description}`,
    });
    return response.text || project.description;
  } catch (e) {
    return project.description;
  }
};
