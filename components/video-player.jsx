"use client";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ title, videosrc, description }) => {
  return (
    <>
      <h1 className="text-xl my-2 text-sky-900 font-medium">{title}</h1>
        <ReactPlayer
          width="370px"
          height="215px"
          url={videosrc}
          playing={true}
          controls={true}
          light={false}
          pip={true}
          muted={true}
          stopOnUnmount={false}
          className="bg-slate-950 p-2 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] "
        />
      <source src={videosrc} type="video/mp4" />
      <p className="lg:px-12 lg:py-4 p-2 my-2 text-sm text-center">{description}</p>
    </>
  );
};

export default VideoPlayer;
