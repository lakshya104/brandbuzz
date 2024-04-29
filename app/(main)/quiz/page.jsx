import { auth } from "@/auth";
import Main from "./main";
import { getAllQuestionsWithAnswers, getUserId } from "@/actions/redeem";

const Quiz = async () => {
  const ques = await getAllQuestionsWithAnswers();
  const session = await auth();
  const id = await getUserId()
  return (
    <div className="flex gap-[48px]">
      <Main email={session.user.email} id={id} name={session.user.name} ques={ques}/>
    </div>
  );
};

export default Quiz;
