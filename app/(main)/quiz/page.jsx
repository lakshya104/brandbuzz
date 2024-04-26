import { auth } from "@/auth";
import Main from "./main";

const Quiz = async () => {
  const session = await auth();
  return (
    <div className="flex gap-[48px]">
      <Main email={session.user.email} name={session.user.name}/>
    </div>
  );
};

export default Quiz;
