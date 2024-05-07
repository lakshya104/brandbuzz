"use client";
import { useState } from "react";
import { createQuestionWithAnswers } from "@/actions/redeem";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

export const QuestionForm = ({ id }) => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctOption, setCorrectOption] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (question === "") {
      setError("* Please provide question.");
      return;
    }
    // Ensure all options are provided
    if (options.some((option) => !option)) {
      setError("* Please provide all options.");
      return;
    }
    if (correctOption === null) {
      setError("* Please choose one correct option.");
      return;
    }

    try {
      await createQuestionWithAnswers(
        id,
        question,
        ...options.map((option, index) => ({
          text: option,
          isCorrect: index === correctOption,
        }))
      );

      // Reset form fields
      setQuestion("");
      setOptions(["", "", "", ""]);
      setCorrectOption(null);
      router.push("/dashboard");
      toast({
        title: "Question Created ",
        description: "Question was created successfully!",
      });

      console.log("Question created successfully.");
    } catch (error) {
      console.error("Error creating question:", error);
      setError("An error occurred while creating the question.");
    }
  };

  return (
    <div className="mx-auto my-4 p-3 lg:w-[580px] w-[370px] lg:border rounded-lg">
      <h1 className="text-2xl text-center font-bold text-gray-800 mb-6">
        Create New Question
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-2 lg:px-4 py-4 mb-4 flex flex-col items-center justify-center"
      >
        <div className="mb-4  flex flex-col justify-between items-center">
          <label
            className="block text-sky-700 text-lg font-bold mb-2"
            htmlFor="question"
          >
            Question:
          </label>
          <Input
            className="shadow appearance-none text-muted-foreground font-semibold border rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="question"
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <div className="mb-4">
          {options.map((option, index) => (
            <div
              key={index}
              className="flex flex-col space-y-3 items-center space-x-3 mb-2"
            >
              <label
                className="mr-2 text-muted-foreground font-semibold"
                htmlFor={`option-${index}`}
              >
                {`Option ${index + 1}:`}
              </label>
              <div className="flex justify-center space-x-3 items-center">
                <Input
                  className="shadow w-[200px] font-semibold text-muted-foreground appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id={`option-${index}`}
                  type="text"
                  value={option}
                  onChange={(e) =>
                    setOptions((prevOptions) => [
                      ...prevOptions.slice(0, index),
                      e.target.value,
                      ...prevOptions.slice(index + 1),
                    ])
                  }
                />
                <Input
                  className="h-4 w-4 mr-2"
                  id={`radio-${index}`}
                  type="radio"
                  name="correctOption"
                  checked={correctOption === index}
                  onChange={() => setCorrectOption(index)}
                />
              </div>
            </div>
          ))}
        </div>
        <Button
          variant="superOutline"
          className="w-[250px] border border-indigo-700"
          type="submit"
        >
          Create Question
        </Button>
        {error && <div className="text-red-500 mt-3 text-sm">{error}</div>}
      </form>
    </div>
  );
};
