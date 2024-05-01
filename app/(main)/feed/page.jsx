import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";
import { auth } from "@/auth";
import VideoPlayer from "@/components/video-player";
import { mediaJSON } from "@/lib/demoData";
import { getAllFeedItems, getUserPoints } from "@/actions/redeem";
import Image from "next/image";
import UserCard from "@/components/user-card";

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
                className="text-xl my-4 text-sky-900 font-medium"
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
                <div className=" w-[360px] lg:w-[500px] p-1 lg:p-3 mb-2 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] ">
                  <p className="lg:p-6 p-2 my-2 text-sm text-center">
                    {item.content}
                  </p>
                </div>
              )}
            </>
          ))}
        </div>
      </FeedWrapper>
      <StickyWrapper>
       <UserCard/>
      </StickyWrapper>
      {console.log(session)}
    </div>
  );
};

export default Feed;
