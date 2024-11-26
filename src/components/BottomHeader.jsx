import HeroImg from "../assets/banner.jpg";

const BottomHeader = () => {
  return (
    <div>
      <div className="">
        <img
          src={HeroImg}
          alt=""
          className="rounded-3xl ring-4 ring-white p-6 bg-white/10 "
        />
      </div>
    </div>
  );
};

export default BottomHeader;
