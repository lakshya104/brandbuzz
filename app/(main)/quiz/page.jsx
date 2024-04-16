import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import dynamic from "next/dynamic";

const VideoPlayer = dynamic(() => import("@/components/video-player"), {
  ssr: false,
});

const Quiz = () => {
  const mediaJSON = [
    {
      description:
        "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
      sources: [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      ],
      subtitle: "By Blender Foundation",
      thumb: "images/BigBuckBunny.jpg",
      title: "Big Buck Bunny",
    },
    {
      description: "The first Blender Open Movie from 2006",
      sources: [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      ],
      subtitle: "By Blender Foundation",
      thumb: "images/ElephantsDream.jpg",
      title: "Elephant Dream",
    },
    {
      description:
        "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",
      sources: [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      ],
      subtitle: "By Google",
      thumb: "images/ForBiggerBlazes.jpg",
      title: "For Bigger Blazes",
    },
    {
      description:
        "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
      sources: [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      ],
      subtitle: "By Google",
      thumb: "images/ForBiggerEscapes.jpg",
      title: "For Bigger Escape",
    },
  ];

  return (
    <div className="flex gap-[48px] px-6">
      <FeedWrapper>
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
      <StickyWrapper>Hello</StickyWrapper>
    </div>
  );
};

export default Quiz;
