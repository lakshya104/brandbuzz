import Main from "./main";
import { fetchFeedItemById, getUserId } from "@/actions/redeem";

export default async function Page({ params }) {
  const data = await fetchFeedItemById(params.id);
  const ques = data.questions;
  const id = await getUserId();
  return (
    <div className="flex gap-[48px]">
      <Main
        id={id}
        ques={ques}
      />
    </div>
  );
}
