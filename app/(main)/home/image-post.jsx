import { ProgressBarLink } from "@/components/progress-bar";
import Image from "next/image";

const ImagePost = ({ item }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <h2 className="lg:text-2xl text-xl text-center font-bold text-gray-800 mb-4">
        {item.title}
      </h2>
      <Image
        src={item.imageUrl}
        alt={item.description}
        height={500}
        width={500}
        className="w-full h-auto bg-slate-950 p-1 lg:p-2 shadow-[4px_8px_8px_rgba(0,0,0,0.38)]"
      />
      <p className="lg:px-12 lg:py-4 p-2 my-2 text-justify text-gray-600 text-base">
        {item.description}
      </p>
      <ProgressBarLink
        href={`blog/${item.id}`}
        className="block bg-sky-600 hover:bg-sky-800 transition text-white font-bold py-2 px-4 rounded mb-4 mx-auto w-[50%] text-center"
      >
        Learn More
      </ProgressBarLink>
    </div>
  );
};

export default ImagePost;
