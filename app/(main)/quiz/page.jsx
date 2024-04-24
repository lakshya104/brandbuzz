import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { mediaJSON } from "@/lib/demoData";
import dynamic from "next/dynamic";

const VideoPlayer = dynamic(() => import("@/components/video-player"), {
  ssr: false,
});

const Quiz = () => {
 

  return (
    <div className="flex gap-[48px]">
      <FeedWrapper>
        {/* <div className="flex justify-center items-center flex-col">
          {mediaJSON.map((media, index) => (
            <VideoPlayer
              title={media.title}
              videosrc={media.sources[0]}
              description={media.description}
              key={index}
            />
          ))}
        </div> */}
      </FeedWrapper>
      <StickyWrapper>Hello</StickyWrapper>
    </div>
  );
};

export default Quiz;
