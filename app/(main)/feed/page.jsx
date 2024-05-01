import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";
import { auth } from "@/auth";
import VideoPlayer from "@/components/video-player";
import { getAllFeedItems } from "@/actions/redeem";
import UserCard from "@/components/user-card";
import BlogPost from "./blog-post";
import ImagePost from "./image-post";

const Feed = async () => {
  const session = await auth();
  const feedItems = await getAllFeedItems();
  console.log(session);
  return (
    <div className="flex gap-[48px] lg:px-6 px-0.5">
      <FeedWrapper>
        <Header title={"Home"} />
        <div className="flex justify-center items-center flex-col">
          {feedItems.map((item) => (
            <>
              {item.type === "VIDEO" && (
                <VideoPlayer
                  title={item.title}
                  videosrc={item.videoUrl}
                  description={item.description}
                />
              )}
              {item.type === "IMAGE" && <ImagePost item={item} />}
              {item.type === "BLOG_POST" && (
                <BlogPost title={item.title} content={item.content} />
              )}
            </>
          ))}
        </div>
      </FeedWrapper>
      <StickyWrapper>
        <UserCard />
      </StickyWrapper>
    </div>
  );
};

export default Feed;
