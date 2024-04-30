import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";
import { auth } from "@/auth";
import VideoPlayer from "@/components/video-player";
import { mediaJSON } from "@/lib/demoData";
import { getAllFeedItems, getUserPoints } from "@/actions/redeem";
import Image from "next/image";

const Feed = async () => {
  const session = await auth();
  const points = await getUserPoints(session.user.email);
  const feedItems = await getAllFeedItems();
  console.log(feedItems, "feeeeeeeeeeeeeed");
  return (
    <div className="flex gap-[48px] lg:px-6 px-0.5">
      <FeedWrapper>
        <Header title={"Home"} />
        <div className="flex justify-center items-center flex-col">
          {/* {mediaJSON.map((media, index) => (
            <VideoPlayer
              title={media.title}
              videosrc={media.sources[0]}
              description={media.description}
              key={index}
            />
          ))} */}

          {feedItems.map((item) => (
            <>
              <h2
                className="text-xl mb-2 mt-3 text-sky-900 font-medium"
                key={item.id}
              >
                {item.title}
              </h2>
              {item.videoUrl && (
                <VideoPlayer
                  // title={item.title}
                  videosrc={item.videoUrl}
                  description={item.description}
                />
              )}
              {item.imageUrl && (
                <>
                  {" "}
                  <Image
                    src={item.imageUrl}
                    alt={item.description}
                    height={70}
                    width={100}
                    className="h-[212px] w-[360px] bg-slate-950 p-1 lg:p-2 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] "
                  />
                  <p className="lg:px-12 lg:py-6 p-2 my-2 text-sm text-center">
                    {item.description}
                  </p>
                </>
              )}
              {item.content && (
                <div className="  p-1 lg:p-2 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] ">
                  <p className="lg:px-8 lg:py-6 p-2 my-2 text-sm text-center">
                    {item.content}
                  </p>
                </div>
              )}
            </>
          ))}
        </div>
      </FeedWrapper>
      <StickyWrapper>
        <div className="flex justify-between items-center space-x-4 shadow-2xl py-6 px-8">
          <div className="space-y-1">
            <h4 className="text-sm text-sky-700 font-semibold">
              Welcome to Buzz
            </h4>
            <p className="text-sm">
              Name: <span className="font-semibold">{session.user.name}</span>
            </p>
            <p className="text-sm">
              Email: <span className="font-semibold">{session.user.email}</span>
            </p>
            <div className="flex items-center py-2">
              <span className="text-xs text-muted-foreground">
                Your Total Points are: {points}
              </span>
            </div>
          </div>
        </div>
      </StickyWrapper>
      {console.log(session)}
    </div>
  );
};

export default Feed;
