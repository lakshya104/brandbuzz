import { auth } from "@/auth";
import Main from "./main";
import { getAllQuestionsWithAnswers } from "@/actions/redeem";

const Quiz = async () => {
  const ques = await getAllQuestionsWithAnswers();
  const session = await auth();
  return (
    <div className="flex gap-[48px]">
      <Main email={session.user.email} name={session.user.name} ques={ques}/>
    </div>
  );
};

export default Quiz;
