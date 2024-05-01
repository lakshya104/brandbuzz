"use client";
import { Button } from "@/components/ui/button";
import { Check, LoaderCircle } from "lucide-react";
import { Ban } from "lucide-react";
import React, { useEffect, useState, useTransition } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { createUserAnswer, hasUserAnsweredQuestion } from "@/actions/redeem";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const Questions = ({ ques, inc, dec, id }) => {
  const [loading, setLoading] = useState(true);
  const [loadingBtn, setLoadingBtn] = useState(true);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleClick = (id, answer) => {
    setLoading(true);
    createUserAnswer(id, answer.questionId);
    if (answer.isCorrect) {
      inc();
    } else {
      dec();
    }
  }

  useEffect(() => {
    const handleIsAnswered = async (qid) => {
      try {
        const answered = await hasUserAnsweredQuestion(id, qid);
        return answered;
      } catch (error) {
        console.error(
          "Error checking if user has answered the question:",
          error
        );
        return false;
      }
    };

    const fetchAnsweredQuestions = async () => {
      const answeredQuestions = await Promise.all(
        ques.map((question) => handleIsAnswered(question.id))
      );
      setAnsweredQuestions(answeredQuestions);
      setLoading(false);
    };

    startTransition(() => {
      fetchAnsweredQuestions();
    });
    setLoadingBtn(false);
  }, [ques, loading, id]);

  return (
    <div className="flex items-start flex-col justify-start">
      {ques.map((question, index) => (
        <div key={question.id} className="lg:border-r w-full lg:pr-6">
          <h2
            className={cn(
              "font-semibold lg:text-xl text-sky-800 mt-2 lg:mt-3.5 ml-5"
            )}
          >
            {question.text}
          </h2>
          <ul className="mb-5">
            {question.answers.map((answer) => (
              <li key={answer.id} className="ml-5">
                <div className="flex justify-start items-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      {loadingBtn ? (
                        <Skeleton className="h-[38px] bg-sky-100 rounded-lg my-2 w-[300px]" />
                      ) : (
                        <Button
                          disabled={isPending || answeredQuestions[index]}
                          onClick={()=>handleClick(id, answer)
                            
                          //   () => {
                          //   setLoading(true);
                          //   createUserAnswer(id, answer.questionId);
                          //   if (answer.isCorrect) {
                          //     inc();
                          //   } else {
                          //     dec();
                          //   }
                          // }
                        }
                          className="my-1 text-[12px] lg:text-[15px]"
                        >
                          {answer.text}
                          {isPending && (
                            <LoaderCircle className="animate-spin ml-2 h-5 w-5 text-slate-600" />
                          )}
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
            {answeredQuestions[index] && (
              <p className="text-xs text-red-500 ml-4">
                * This question has been answered by you.
              </p>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};
const QuestionsComponent = React.memo(Questions);
export default QuestionsComponent;
