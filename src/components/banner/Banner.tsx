import Header from "../layout/Header";
import Image from "next/image";
const Banner = () => {
  return (
    <>
      <Header />
      <div
        className="bg-[#222222] h-[700px] translate-y-[-50px] z-1"
        style={{
          clipPath:
            "polygon(0 0, 35% 0, 40% 6%, 65% 6%, 70% 0, 100% 0, 100% 90%, 95% 100%, 0 100%)",
        }}
      >
        <Image
          src="/svg/404.svg"
          alt="banner"
          width={100}
          height={100}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <div className="absolute bottom-0 left-0 translate-x-[80px] translate-y-[-100px]">
          <Image
            src="/svg/animation.svg"
            alt="banner"
            width={550}
            height={600}
          />
          <div className="absolute bottom-0 left-0 translate-x-[40px] translate-y-[-5px] text-brand-orange">
            <h1 className="text-white text-5xl font-bold">WE ARE SMURF</h1>
            <p className="text-white text-3xl">
              Super Movement Unleashing Revolution Future
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
