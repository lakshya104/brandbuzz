import { ProgressBarLink } from "@/components/progress-bar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { BackHeader } from "../../backHeader";

const ImageComponent = ({ data }) => {
  return (
    <div className="lg:w-[600px] w-[320px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
     <BackHeader title={"Post"}/>
      <Image
        className="w-full h-[320px] lg:h-[600px] object-cover object-center"
        src={data.imageUrl}
        alt={data.title}
        height={500}
        width={300}
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold">{data.title}</h2>
        <p className="mt-2 text-gray-600">{data.description}</p>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Questions:</h3>
          <ul className="list-disc pl-5">
            {data.questions.map((question) => (
              <li key={question.id} className="text-gray-600">
                {question.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4 flex justify-center items-center">
          <ProgressBarLink href={`/quiz/${data.id}`}>
            <Button variant="super">Try Your Luck</Button>
          </ProgressBarLink>
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;
