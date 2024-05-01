import { fetchFeedItemById } from "@/actions/redeem";
import ImageComponent from "./image-component";

export default async function Page({ params }) {
  const data = await fetchFeedItemById(params.id);
  return (
    <div className="max-w-4xl mx-auto p-4">
     {data.type==="IMAGE" && <ImageComponent data={data} />}
    </div>
  );
}
