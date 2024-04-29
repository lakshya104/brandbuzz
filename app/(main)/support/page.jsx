import { FeedWrapper } from "@/components/feed-wrapper";
import { getAllQuestionsWithAnswers } from "@/actions/redeem";
import Questions from "./questions";

const Support = async () => {
  const ques = await getAllQuestionsWithAnswers();
  return (
    <FeedWrapper>
      {/* <Questions ques={ques} /> */}
    </FeedWrapper>
  );
};

export default Support;
