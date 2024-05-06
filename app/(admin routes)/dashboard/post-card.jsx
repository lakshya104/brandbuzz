import { ProgressBarLink } from "@/components/progress-bar";
import { Button } from "@/components/ui/button";

const PostCard = ({ title, type, id }) => {
  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg overflow-hidden md:max-w-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="md:flex">
        <div className="w-full p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg md:text-xl font-semibold text-sky-800 mb-2">Title: {title}</h2>
            <span className="px-3 py-1 bg-sky-100 text-sky-800 text-xs font-bold rounded-full">
              {type}
            </span>
          </div>
          <div className="px-2 pt-4 pb-2">
            <ProgressBarLink href={`createQuestion/${id}`}>
              <Button variant="secondary" className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                Add Question
              </Button>
            </ProgressBarLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;