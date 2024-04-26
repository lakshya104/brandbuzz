import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";
import { auth } from "@/auth";
import VideoPlayer from "@/components/video-player";
import { mediaJSON } from "@/lib/demoData";
import { getUserPoints } from "@/actions/redeem";
import { ProfileHeader } from "@/components/profile-header";
import ProfileDropdown from "@/components/profile-dropdown";
import SignOutButton from "@/components/auth/signout-button";

const Feed = async () => {
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
