import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";
import { auth } from "@/auth";

const LearnPage = async () => {
  const session = await auth();
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      {/* <StickyWrapper>{JSON.stringify(session)}</StickyWrapper> */}
      {/* <Header title={"Home"} /> */}
      {console.log(session)}
      <FeedWrapper>
        <h4 className="font-medium text-sky-900">
          Welcome to Buzz {session.user.name}!
        </h4>
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
