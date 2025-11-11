import { AspectRatio } from "@/lib/main";

export default function AspectRatioDemo() {
  return (
    <>
      <h2>Aspect Ratio</h2>
      <p className="app-spacing-bottom">Image using aspect ratio set to 21/9.</p>
      <AspectRatio ratio={21 / 9}>
        <img
          src="https://picsum.photos/id/260/1600/900"
          alt="Card Image"
          className="app-media-rounded"
        />
      </AspectRatio>
    </>
  );
}

