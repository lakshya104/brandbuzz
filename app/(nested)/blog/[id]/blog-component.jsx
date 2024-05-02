import { ProgressBarLink } from "@/components/progress-bar";
import { Button } from "@/components/ui/button";
import React from "react";
import { BackHeader } from "../../backHeader";

const BlogComponent = ({ data }) => {
  return (
    <div className="w-full max-w-4xl mx-auto my-8 overflow-hidden shadow-xl rounded-lg">
      <BackHeader title={"Post"} />
      <div className="bg-gradient-to-r from-sky-500 via-red-500 to-indigo-500 p-4 shadow-md">
        <h1 className="text-4xl font-bold text-center text-white">
          {data.title}
        </h1>
      </div>
      <div className="px-4 pt-4 bg-white">
        <p className="text-gray-700 text-lg text-justify leading-relaxed">{data.content}</p>
        <p className="text-gray-700 text-lg text-justify leading-relaxed">{data.content}</p>
      </div>
      <div className="p-4 flex justify-center items-center">
          <ProgressBarLink href={`/quiz/${data.id}`}>
            <Button variant="super">Try Your Luck</Button>
          </ProgressBarLink>
        </div>
    </div>
  );
};

export default BlogComponent;
