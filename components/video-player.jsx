"use client";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Skeleton } from "@/components/ui/skeleton";

const VideoPlayer = ({ title, videosrc, description }) => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <div className="max-w-lg flex justify-center items-center flex-col mx-auto my-8 lg:p-5">
      <h2 className="lg:text-2xl text-xl font-bold text-gray-800 mb-4">{title}</h2>
      {!hasWindow ? (
        <Skeleton className="h-[212px] bg-slate-300 rounded-none w-[360px]" />
      ) : (
        <ReactPlayer
          width="360px"
          height="212px"
          url={videosrc}
          playing={true}
          controls={true}
          light={"https://buzz-navy.vercel.app/watch.svg"}
          pip={true}
          muted={true}
          stopOnUnmount={false}
          className="bg-slate-950 p-1 lg:p-2 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] "
        />
      )}
      <source src={videosrc} type="video/mp4" />
      <p className="lg:px-12 lg:py-4 p-2 my-2 text-justify text-gray-600 text-base">
        {description}
      </p>
    </div>
  );
};

export default VideoPlayer;
