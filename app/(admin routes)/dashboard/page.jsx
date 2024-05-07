import { getAllFeedItems } from "@/actions/redeem";
import PostCard from "./post-card";

const AdminPanel = async () => {
  const feedItems = await getAllFeedItems();

  return (
    <>
      <h2 className="text-2xl text-center font-semibold text-gray-700 mb-6">
        Manage Posts
      </h2>
      {feedItems.map((item) => (
        <PostCard
          key={item.id}
          type={item.type}
          title={item.title}
          id={item.id}
        />
      ))}
    </>
  );
};

export default AdminPanel;
