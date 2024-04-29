import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Ban } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Questions = ({ ques, inc, dec }) => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      {ques.map((question) => (
        <div key={question.id} className=" lg:border-r w-full lg:pr-6">
          <h2 className="font-semibold lg:text-xl text-sky-800 mt-2 lg:mt-3.5 ml-5">
            {question.text}
          </h2>
          <ul className="mb-5">
            {question.answers.map((answer) => (
              <li key={answer.id} className="ml-5">
                <div className="flex justify-start items-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        disabled={loading}
                        onClick={() => {
                          setLoading(true);
                          setTimeout(() => {
                            setLoading(false);
                          }, 1000);
                          if (answer.isCorrect) {
                            inc();
                          } else {
                            dec();
                          }
                        }}
                        className="my-1 text-[12px] lg:text-[15px]"
                      >
                        {answer.text}
                      </Button>
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
          </ul>
        </div>
      ))}
    </>
  );
};

export default Questions;
