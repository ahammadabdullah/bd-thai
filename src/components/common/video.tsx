import fallback from "@/assets/fallback.png";
const src =
  "https://res.cloudinary.com/dyli16gvr/video/upload/v1758972566/qqxqte5llbxd46vx8cwg.mp4";

const Video = () => (
  <div
    className={`relative w-full h-[60vh] overflow-hidden bg-black mt-10 rounded-md`}
  >
    <video
      src={src}
      className="w-full h-full object-cover rounded-md"
      autoPlay
      muted
      loop
      playsInline
      poster={fallback.src}
    />
    <div className="absolute inset-0 bg-black/30" />
  </div>
);

export default Video;
