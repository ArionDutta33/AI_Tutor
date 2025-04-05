const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

export async function fetchExplanation(topic: string): Promise<string> {
  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama3-8b-8192",
          messages: [
            {
              role: "system",
              content:
                "You are a helpful AI assistant that explains complex topics in very simple terms that a 5-year-old could understand. Use analogies, simple examples, and avoid jargon. Keep explanations concise but thorough. Format your response with simple language, short paragraphs, and occasional emojis where appropriate to make the explanation engaging.",
            },
            {
              role: "user",
              content: `Explain this complex topic in extremely simple terms as if I'm five years old: ${topic}`,
            },
          ],
          temperature: 0.7,
          max_tokens: 800,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Error calling Groq API:", error);
    throw new Error("Failed to get explanation from AI service");
  }
}
