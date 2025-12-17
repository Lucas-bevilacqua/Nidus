
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY || "" });

export interface ValidationResult {
  score: number;
  fase1: string;
  fase2: string;
  fase3: string;
  feedback: string;
}

export const validateStartupIdea = async (idea: string): Promise<ValidationResult> => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Analyze this B2B SaaS startup idea according to Nidus Ventures' methodology.
    Idea: ${idea}
    Provide:
    1. A validation score (0-100).
    2. Concrete steps for 'A Concepção' (Phase 1).
    3. Concrete steps for 'A Incubação' (Phase 2).
    4. Potential path for 'O Voo' (Phase 3).
    5. Honest feedback.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          score: { type: Type.NUMBER },
          fase1: { type: Type.STRING },
          fase2: { type: Type.STRING },
          fase3: { type: Type.STRING },
          feedback: { type: Type.STRING },
        },
        required: ["score", "fase1", "fase2", "fase3", "feedback"],
      },
    },
  });

  return JSON.parse(response.text);
};
