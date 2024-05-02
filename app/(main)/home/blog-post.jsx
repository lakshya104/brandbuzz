import { ProgressBarLink } from "@/components/progress-bar";
import { Button } from "@/components/ui/button";

const BlogPost = ({ title, content,id }) => (
  <div className="max-w-lg mx-auto my-8 p-5 bg-white shadow-lg rounded-lg">
    <div className="px-4 py-2">
      <h2 className="lg:text-2xl text-xl text-center font-bold text-gray-800 mb-4">
        {title}
      </h2>
      <p className="text-gray-600 text-lg mb-4 text-justify">{content}</p>
      <ProgressBarLink href={`blog/${id}`}>
        <Button
          variant="super"
          className="block text-white font-bold py-2 px-4 rounded mb-4 mx-auto w-[50%] text-center"
        >
          {" "}
          Read More
        </Button>
      </ProgressBarLink>
    </div>
  </div>
);

export default BlogPost;
