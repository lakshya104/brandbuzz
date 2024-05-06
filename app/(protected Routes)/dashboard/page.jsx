import { getAllQuestionsWithAnswers } from "@/actions/redeem";
import { QuestionForm } from "./question-form";

const AdminPanel = async () => {
  const questionsData = await getAllQuestionsWithAnswers();

  return (
    <div className="min-h-screen bg-gray-100 p-2 lg:p-8">
      <h1 className="lg:text-4xl text-2xl font-bold text-sky-800 mb-4">
        Admin Panel <span className="text-base">(Dashboard)</span>
      </h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        Create New Question
      </h2>
      <div className="bg-white shadow-md rounded-lg p-1 lg:p-6">
        <QuestionForm />
      </div>
    </div>
  );
};

export default AdminPanel;
