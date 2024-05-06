import { getAllFeedItems, getAllQuestionsWithAnswers } from "@/actions/redeem";
import PostCard from "./post-card";

const AdminPanel = async () => {
  const questionsData = await getAllQuestionsWithAnswers();
  const feedItems = await getAllFeedItems();

  return (
    <div className="min-h-screen bg-gray-100 p-2 lg:p-8">
      <h1 className="lg:text-4xl text-2xl font-bold text-sky-800 mb-4">
        Admin Panel <span className="text-base">(Dashboard)</span>
      </h1>
      <div className="bg-white shadow-md rounded-lg p-1 lg:p-6">
        {feedItems.map((item) => (
          <PostCard
            key={item.id}
            type={item.type}
            title={item.title}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
