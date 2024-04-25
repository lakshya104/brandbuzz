import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";
import { auth } from "@/auth";
import VideoPlayer from "@/components/video-player";
import { mediaJSON } from "@/lib/demoData";
import { getUserPoints } from "@/data/user";

const LearnPage = async () => {
  const session = await auth();
  const points = await getUserPoints(session.user.email);
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
          Welcome to Buzz {session.user.name}! <br />
          Your Total Points are {points}
        </h4>
      </StickyWrapper>
      {console.log(session)}
    </div>
  );
};

export default LearnPage;
