import { FeedWrapper } from "@/components/feed-wrapper";
import React from "react";
import { getAllQuestionsWithAnswers } from "@/actions/redeem";
import { Check } from 'lucide-react';
import { Ban } from 'lucide-react';

const Support = async () => {
  const ques = await getAllQuestionsWithAnswers();

  return (
    <FeedWrapper>
      {ques.map((question) => (
        <div key={question.id}>
          <h2 className="font-semibold text-sky-800 mt-2 ml-5">{question.text}</h2>
          <ul className="mb-5">
            {question.answers.map((answer) => (
              <li key={answer.id} className="ml-5">
               <div className="flex justify-start items-center"> {answer.text}  {answer.isCorrect ? <Check className="text-green-600 ml-2 h-6 w-6" />: <Ban className="text-red-600 ml-2 h-4 w-4" />}</div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </FeedWrapper>
  );
};

export default Support;
