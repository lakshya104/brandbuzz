import { ProgressBarLink } from "@/components/progress-bar";
import { Button } from "@/components/ui/button";

const PostCard = ({ title, type, id }) => {
  return (
    <div className="lg:max-w-[1024px] mx-auto bg-white rounded-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row space-y-2 justify-between items-center my-3 border-2 p-5">
          <h2 className="text-lg md:text-xl font-semibold text-sky-800 mb-2">
            <span className="text-slate-800 mr-1"> Title:</span> {title}
          </h2>
          <div className="lg:w-[50%] w-full flex justify-between items-center">
            <span className="px-3 py-1 bg-sky-100 text-sky-800 text-xs font-bold rounded-full">
              {type}
            </span>
            <ProgressBarLink href={`createQuestion/${id}`}>
              <Button variant="superOutline" className="border">
                Add Question
              </Button>
            </ProgressBarLink>
          </div>
        </div>
    </div>
  );
};

export default PostCard;
