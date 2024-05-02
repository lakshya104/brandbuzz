"use client";
import { createUserAnswer, getAnswersByQuestionId } from "@/actions/redeem";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Ban, Check, LoaderCircle } from "lucide-react";
import React, { useEffect, useState, useTransition } from "react";

const Questions = ({ ques, id, inc, dec }) => {
  const [answers, setAnswers] = useState({});
  const [loadingBtn, setLoadingBtn] = useState(true);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        const answersMap = {};
        for (const question of ques) {
          const fetchedAnswers = await getAnswersByQuestionId(question.id);
          answersMap[question.id] = fetchedAnswers;
        }
        setAnswers(answersMap);
        setLoadingBtn(false);
      } catch (error) {
        console.error("Error fetching answers:", error);
      }
    };

    // startTransition(() => {
    fetchAnswers();
    // });
  }, [ques]);

  const handleClick = (id, answer) => {
    // createUserAnswer(id, answer.questionId);
    if (answer.isCorrect) {
      inc();
    } else {
      dec();
    }
  };

  return (
    <div className="flex items-start flex-col justify-start">
      {ques.map((question) => (
        <div key={question.id} className="w-full lg:pr-6">
          <h2 className="font-semibold lg:text-xl text-sky-800 mt-2 lg:mt-3.5 ml-5">
            {question.text}
          </h2>
          <ul className="mb-5">
            {answers[question.id] ? (
              <>
                {answers[question.id].map((answer) => (
                  <li key={answer.id} className="ml-5">
                    <div className="flex justify-start items-center">
                      <Dialog>
                        <DialogTrigger asChild>
                          {isPending ? (
                            <Skeleton className="h-[38px] bg-sky-100 rounded-lg my-2 w-[300px]" />
                          ) : (
                            <Button
                              disabled={isPending}
                              onClick={() => handleClick(id, answer)}
                              className="my-1 text-[12px] lg:text-[15px]"
                            >
                              {answer.text}
                              {/* {isPending && (
                            <LoaderCircle className="animate-spin ml-2 h-5 w-5 text-slate-600" />
                          )} */}
                            </Button>
                          )}
                        </DialogTrigger>
                        <DialogContent className="shadow-inner w-[300px] py-8 rounded- px-4 lg:px-12 z-50">
                          <div className="flex items-center justify-center flex-col space-y-4">
                            {answer.isCorrect ? (
                              <div className="flex items-center justify-center">
                                <Check className="text-green-600 stroke-[4] mr-2 h-6 w-6" />
                                <h3 className="font-semibold text-green-600">
                                  You got it right!
                                </h3>
                              </div>
                            ) : (
                              <div className="flex items-center justify-center">
                                <Ban className="text-red-600 mr-2 stroke-[4] h-4 w-4" />
                                <h3 className="font-semibold text-red-600">
                                  Oops! Not correct.
                                </h3>
                              </div>
                            )}
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </li>
                ))}
              </>
            ) : (
              <>
              <Skeleton className="h-[38px] bg-sky-100 rounded-lg my-2 w-[300px]" />
              <Skeleton className="h-[38px] bg-sky-100 rounded-lg my-2 w-[300px]" />
              <Skeleton className="h-[38px] bg-sky-100 rounded-lg my-2 w-[300px]" />
              <Skeleton className="h-[38px] bg-sky-100 rounded-lg my-2 w-[300px]" />
              </>

            )}
          </ul>
        </div>
      ))}
    </div>
  );
};
const QuestionsComponent = React.memo(Questions);
export default QuestionsComponent;