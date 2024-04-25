import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
// import VideoPlayer from "@/components/video-player";
// import { mediaJSON } from "@/lib/demoData";


const Quiz = () => {
 

  return (
    <div className="flex gap-[48px]">
      <FeedWrapper>
        <div className="flex justify-center items-center flex-col">
          {/* {mediaJSON.map((media, index) => (
            <VideoPlayer
              title={media.title}
              videosrc={media.sources[0]}
              description={media.description}
              key={index}
            />
          ))} */}
          Quiz
        </div>
      </FeedWrapper>
      <StickyWrapper>Hello</StickyWrapper>
    </div>
  );
};

export default Quiz;
