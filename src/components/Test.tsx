import { useState } from "react";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY; // Replace with your actual API key
const MODEL_NAME = "gemini-1.5-flash";

export default function PdfSummarizer() {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
    });
  };

  const summarizePdf = async () => {
    if (!file) {
      alert("Please upload a PDF file.");
      return;
    }
    setLoading(true);
    try {
      const base64Data = await fileToBase64(file);
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1/models/" +
          MODEL_NAME +
          ":generateContent?key=" +
          API_KEY,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                text: "Summarize this PDF document concisely in markdown format.",
              },
              {
                inlineData: {
                  mimeType: "application/pdf",
                  data: base64Data,
                },
              },
            ],
            generationConfig: {
              temperature: 0.7,
              topK: 40,
              topP: 0.95,
              maxOutputTokens: 1024,
            },
          }),
        }
      );
      const data = await response.json();
      setSummary(data.candidates?.[0]?.text || "No summary available.");
    } catch (error) {
      console.error("Error summarizing PDF:", error);
      setSummary("Failed to summarize the PDF.");
    }
    setLoading(false);
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-4">PDF Summarizer</h1>
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        className="mb-4"
      />
      <button
        onClick={summarizePdf}
        className="bg-blue-500 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? "Summarizing..." : "Summarize PDF"}
      </button>
      {summary && (
        <div className="mt-4 p-2 border rounded bg-gray-100">
          <h2 className="font-semibold">Summary:</h2>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}






