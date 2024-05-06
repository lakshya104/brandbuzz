"use client";
import { createQuestionWithAnswers } from "@/actions/redeem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const QuestionForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const question = formData.get("text");
    const option1 = {
      text: formData.get("option1"),
      isCorrect: formData.get("correctOption") === "option1",
    };
    const option2 = {
      text: formData.get("option2"),
      isCorrect: formData.get("correctOption") === "option2",
    };
    const option3 = {
      text: formData.get("option3"),
      isCorrect: formData.get("correctOption") === "option3",
    };
    const option4 = {
      text: formData.get("option4"),
      isCorrect: formData.get("correctOption") === "option4",
    };
    createQuestionWithAnswers(
      "clvm713t300014bzkuen90iy9",
      question,
      option1,
      option2,
      option3,
      option4
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-2 lg:px-8 pt-6 pb-8 mb-4"
    >
      <div className="mb-4">
        <label
          htmlFor="text"
          className="block text-sky-700 text-lg font-bold mb-2"
        >
          Question Text:
        </label>
        <Input
          type="text"
          id="text"
          name="text"
          required
          className="shadow appearance-none text-muted-foreground font-semibold border rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <fieldset className="mb-4">
        <legend className="text-sky-700 text-lg font-bold mb-2">
          Options:
        </legend>
        <div className="flex items-center justify-start mb-4">
          <Input
            type="radio"
            id="option1"
            name="correctOption"
            value="option1"
            required
            className="h-4 w-4 mr-2"
          />
          <label
            htmlFor="option1"
            className="mr-2 text-muted-foreground font-semibold"
          >
            Option 1
          </label>
          <Input
            type="text"
            id="option1Text"
            name="option1"
            required
            className="shadow w-[200px] font-semibold text-muted-foreground appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-start mb-4">
          <Input
            type="radio"
            id="option2"
            name="correctOption"
            value="option2"
            required
            className="h-4 w-4 mr-2"
          />
          <label
            htmlFor="option1"
            className="mr-2 text-muted-foreground font-semibold"
          >
            Option 2
          </label>
          <Input
            type="text"
            id="option2Text"
            name="option2"
            required
            className="shadow w-[200px] font-semibold text-muted-foreground appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-start mb-4">
          <Input
            type="radio"
            id="option3"
            name="correctOption"
            value="option3"
            required
            className="h-4 w-4 mr-2"
          />
          <label
            htmlFor="option1"
            className="mr-2 text-muted-foreground font-semibold"
          >
            Option 3
          </label>
          <Input
            type="text"
            id="option3Text"
            name="option3"
            required
            className="shadow w-[200px] font-semibold text-muted-foreground appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-start mb-4">
          <Input
            type="radio"
            id="option4"
            name="correctOption"
            value="option4"
            required
            className="h-4 w-4 mr-2"
          />
          <label
            htmlFor="option1"
            className="mr-2 text-muted-foreground font-semibold"
          >
            Option 4
          </label>
          <Input
            type="text"
            id="option4Text"
            name="option4"
            required
            className="shadow w-[200px] font-semibold text-muted-foreground appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </fieldset>

      <Button type="submit">Create Question</Button>
    </form>
  );
};
