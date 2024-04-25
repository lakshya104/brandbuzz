
import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";
import { auth } from "@/auth";
import VideoPlayer from "@/components/video-player";
import { mediaJSON } from "@/lib/demoData";

const LearnPage = async () => {
  const session = await auth();
  return (
    <div className="flex gap-[48px] lg:px-6 px-0.5">
      <FeedWrapper>
        <Header title={"Home"} />
        <div className="flex justify-center items-center flex-col">
          {mediaJSON.map((media, index) => (
            <VideoPlayer
              title={media.title}
              videosrc={media.sources[0]}
              description={media.description}
              key={index}
            />
          ))}
        </div>
      </FeedWrapper>
      <StickyWrapper>
        <h4 className="font-medium text-sky-900">
          Welcome to Buzz {session.user.name}!
        </h4>
      </StickyWrapper>
      {console.log(session)}
    </div>
  );
};

export default LearnPage;
