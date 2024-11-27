import HeroImg from "../assets/banner.jpg";

const FeaturedImage = () => {
  return (
    <div className="px-40">
      <img
        src={HeroImg}
        alt=""
        className="rounded-3xl ring-4 ring-white p-6 bg-white/10 inline-block max-h-[650px] w-full object-cover object-center"
      />
    </div>
  );
};

export default FeaturedImage;
