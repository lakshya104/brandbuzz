import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ImageComponent = ({ data }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Image
        className="w-full h-96 object-cover object-center"
        src={data.imageUrl}
        alt={data.title}
        height={500}
        width={500}
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
          <Button variant="super">
            Try Your Luck
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;
