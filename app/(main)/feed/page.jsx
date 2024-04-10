import { redirect } from "next/navigation";

// import { Promo } from "@/components/promo";
// import { Quests } from "@/components/quests";
import { FeedWrapper } from "@/components/feed-wrapper";
// import { UserProgress } from "@/components/user-progress";
import { StickyWrapper } from "@/components/sticky-wrapper";

// import { Unit } from "./unit";
import { Header } from "./header";

const LearnPage = async () => {

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>Hello</StickyWrapper>
      <Header title={"Home"} />
      <FeedWrapper>World</FeedWrapper>
    </div>
  );
};

export default LearnPage;
