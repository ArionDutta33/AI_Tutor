import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileText,
  Upload,
  FileUp,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Download,
} from "lucide-react";

const PdfSummarizer = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === "application/pdf") {
      setFile(droppedFile);
      setError(null);
    } else {
      setError("Please upload a PDF file");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.type === "application/pdf") {
        setFile(selectedFile);
        setError(null);
      } else {
        setError("Please upload a PDF file");
      }
    }
  };

  const handleSummarize = () => {
    if (!file) return;

    setIsProcessing(true);
    setSummary(null);

    // Simulate processing delay
    setTimeout(() => {
      // Mock summary result
      setSummary(`# Summary of ${file.name}

## Key Points

1. **Introduction to the Topic**
   - Overview of main concepts
   - Historical context and background
   - Significance in the field of study

2. **Main Arguments**
   - First major point with supporting evidence
   - Second major point and its implications
   - Contrasting perspectives presented

3. **Methodology**
   - Approach used in the document
   - Data collection and analysis methods
   - Limitations of the approach

4. **Findings & Results**
   - Summary of key discoveries
   - Statistical significance of results
   - Comparison with previous research

5. **Conclusions**
   - Author's interpretation of findings
   - Broader implications for the field
   - Recommendations for future research

## Critical Analysis
The document presents a compelling argument supported by substantial evidence, though some assertions would benefit from additional context. The methodology is sound, with appropriate controls and considerations for variables.

## Recommended Follow-up
For a deeper understanding, consider exploring the referenced works in sections 3 and 4, particularly regarding the theoretical framework.`);

      setIsProcessing(false);
    }, 3000);
  };

  const resetForm = () => {
    setFile(null);
    setSummary(null);
    setError(null);
  };

  return (
    <section id="summarizer" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-tutor-blue/10 text-tutor-blue text-sm font-medium mb-4">
            <FileText className="h-4 w-4 mr-2" />
            <span>PDF Summarizer</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Extract <span className="text-gradient">Key Insights</span>{" "}
            Instantly
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Upload any PDF document and get a comprehensive summary. Save hours
            of reading time and focus on what matters.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-card overflow-hidden">
            <CardContent className="p-6">
              {!summary ? (
                <>
                  <div
                    className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                      isDragging
                        ? "border-tutor-blue bg-tutor-blue/5"
                        : error
                        ? "border-red-300 bg-red-50"
                        : file
                        ? "border-green-300 bg-green-50"
                        : "border-gray-300 hover:border-tutor-blue hover:bg-tutor-blue/5"
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    {error ? (
                      <div className="text-red-500 flex flex-col items-center">
                        <AlertCircle className="h-16 w-16 mb-4" />
                        <p className="text-lg font-medium">{error}</p>
                        <Button
                          variant="outline"
                          className="mt-4"
                          onClick={resetForm}
                        >
                          Try Again
                        </Button>
                      </div>
                    ) : file ? (
                      <div className="text-green-600 flex flex-col items-center">
                        <CheckCircle2 className="h-16 w-16 mb-4" />
                        <p className="text-lg font-medium">File Selected:</p>
                        <p className="mb-4">{file.name}</p>
                        <div className="flex gap-3">
                          <Button
                            variant="outline"
                            className="border-red-300 text-red-500 hover:bg-red-50 hover:text-red-600"
                            onClick={resetForm}
                          >
                            Cancel
                          </Button>
                          <Button
                            className="bg-tutor-blue hover:bg-tutor-light-blue"
                            onClick={handleSummarize}
                            disabled={isProcessing}
                          >
                            {isProcessing ? (
                              <>
                                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                                Processing...
                              </>
                            ) : (
                              <>
                                <Sparkles className="mr-2 h-4 w-4" />
                                Summarize PDF
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <Upload className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                        <p className="text-lg font-medium text-gray-700 mb-2">
                          Drag & Drop your PDF here
                        </p>
                        <p className="text-gray-500 mb-6">or</p>
                        <Button className="bg-tutor-blue hover:bg-tutor-light-blue">
                          <label className="cursor-pointer flex items-center">
                            <FileUp className="mr-2 h-4 w-4" />
                            Browse Files
                            <input
                              type="file"
                              accept=".pdf"
                              className="hidden"
                              onChange={handleFileChange}
                            />
                          </label>
                        </Button>
                      </>
                    )}
                  </div>
                </>
              ) : (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold flex items-center">
                      <FileText className="h-5 w-5 text-tutor-blue mr-2" />
                      Summary of {file?.name}
                    </h3>
                    <div className="flex gap-3">
                      <Button variant="outline" onClick={resetForm}>
                        Summarize Another
                      </Button>
                      <Button className="bg-tutor-blue hover:bg-tutor-light-blue">
                        <Download className="mr-2 h-4 w-4" />
                        Download Summary
                      </Button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-6 max-h-[500px] overflow-y-auto bg-white">
                    <div className="prose prose-blue max-w-none">
                      {summary.split("\n\n").map((paragraph, index) => {
                        if (paragraph.startsWith("##")) {
                          return (
                            <h3
                              key={index}
                              className="text-lg font-semibold mt-6 mb-3"
                            >
                              {paragraph.replace("## ", "")}
                            </h3>
                          );
                        } else if (paragraph.startsWith("#")) {
                          return (
                            <h2
                              key={index}
                              className="text-xl font-bold mt-6 mb-4"
                            >
                              {paragraph.replace("# ", "")}
                            </h2>
                          );
                        } else if (paragraph.includes("**")) {
                          // Handle bullet points with bold text
                          return (
                            <div key={index} className="mb-4">
                              {paragraph.split("\n").map((line, lineIndex) => {
                                const match = line.match(
                                  /^(\d+)\.\s+\*\*(.*?)\*\*/
                                );
                                if (match) {
                                  return (
                                    <div key={lineIndex} className="mb-2">
                                      <strong>
                                        {match[1]}. {match[2]}
                                      </strong>
                                      <p>{line.replace(`${match[0]}`, "")}</p>
                                    </div>
                                  );
                                }
                                // Handle indented bullet points
                                if (line.startsWith("   - ")) {
                                  return (
                                    <div key={lineIndex} className="ml-8 mb-1">
                                      <div className="flex">
                                        <span className="mr-2">•</span>
                                        <span>{line.replace("   - ", "")}</span>
                                      </div>
                                    </div>
                                  );
                                }
                                return (
                                  <p key={lineIndex} className="mb-1">
                                    {line}
                                  </p>
                                );
                              })}
                            </div>
                          );
                        } else {
                          return (
                            <p key={index} className="mb-4">
                              {paragraph}
                            </p>
                          );
                        }
                      })}
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PdfSummarizer;
