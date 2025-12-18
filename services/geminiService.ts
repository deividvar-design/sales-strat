import { GoogleGenAI } from "@google/genai";
import { TeamSize } from '../types';

const getAI = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API Key not found in environment variables");
    throw new Error("API Key missing");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateSalesAdvice = async (
  query: string,
  teamSize: TeamSize | string,
  history: { role: string; text: string }[]
): Promise<string> => {
  try {
    const ai = getAI();
    const model = ai.models;
    
    const systemInstruction = `
      You are a world-class VP of Sales Operations and Strategy with over 10 years of experience.
      You specialize in advising Solopreneurs, Small Teams (2-10), and Mid-Scale Teams (10-20).
      
      Your Goal: Provide specific, actionable advice on sales tool stacks, processes, and strategies.
      
      Context:
      - The user's team size is: ${teamSize}.
      - Keep answers professional, concise, and focused on ROI (Return on Investment) and ease of implementation.
      - If suggesting tools, mention specific names (e.g., Salesforce, HubSpot, Apollo, Gong, Outreach) but explain *why* based on the team size.
      - Avoid generic fluff. Use industry terms like "Sales Velocity", "CAC", "Win Rates", "Enrichment", "Sequencing".
      
      Formatting:
      - Use Markdown for readability (bullet points, bold text).
    `;

    // Convert history to Gemini format if needed, or just append to context for simplicity in a single-turn mental model
    // For chat history, we'll use the generateContent with a constructed prompt including history, 
    // or use the chat API. Let's use the chat API for better context management.

    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemInstruction,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: query });
    return result.text || "I couldn't generate a response at this time.";

  } catch (error) {
    console.error("Error generating sales advice:", error);
    return "I apologize, but I'm having trouble connecting to my strategy database right now. Please check your API key or try again later.";
  }
};

export const generateCustomStrategy = async (
  teamSize: TeamSize,
  industry: string,
  challenge: string
): Promise<string> => {
    try {
        const ai = getAI();
        const prompt = `
          Create a custom Sales Strategy Guide for a ${teamSize} company in the ${industry} industry.
          
          Current Challenge: ${challenge}
          
          Please provide a structured response with:
          1. **Diagnostic**: Briefly analyze why this challenge exists at this stage.
          2. **Recommended Tool Stack**: 3-5 specific tools to solve this.
          3. **Process Changes**: 3 actionable operational changes (e.g., meeting cadence, data discipline).
          4. **KPIs to Track**: What metrics prove this is working?
        `;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt
        });

        return response.text || "Unable to generate strategy.";
    } catch (error) {
        console.error("Strategy generation error:", error);
        return "Error generating custom strategy.";
    }
};