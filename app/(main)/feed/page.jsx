import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";
import { auth } from "@/auth";

const LearnPage = async () => {
  const session = await auth();
  return (
    <div className="flex gap-[48px] px-6">
      <FeedWrapper>
        <Header title={"Home"} />
      </FeedWrapper>
      <StickyWrapper>
        <h4 className="font-medium text-sky-900">
          Welcome to Buzz {session.user.name}!
        </h4>
      </StickyWrapper>
      {console.log(session)}
    </div>
  );
};

export default LearnPage;
