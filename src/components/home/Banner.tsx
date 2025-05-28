"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// Define animation variants for the banner
const bannerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Banner = () => {
  return (
    <motion.div
      className="translate-y-[-50px]"
      variants={bannerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* Desktop video container */}
      <div
        className="hidden md:block h-[700px]  translate-y-[-50px] z-1 w-full relative"
        style={{
          clipPath:
            "polygon(0 0, 35% 0, 40% 6%, 65% 6%, 70% 0, 100% 0, 100% 90%, 95% 100%, 0 100%)",
        }}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover bg-cover bg-center"
          src="/images/banner/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          typeof="video/mp4"
        ></video>
        <div className="flex justify-center mt-4 md:absolute md:bottom-0 md:left-0 md:translate-x-[80px] md:translate-y-[-200px] relative z-10">
          {/* Container for Image (relative positioning context for text) */}
          <div className="relative w-full max-w-sm h-auto sm:max-w-md md:max-w-lg lg:max-w-xl">
            <Image
              src="/svg/animation.svg"
              alt="banner"
              width={550}
              height={600}
              className="w-full h-auto"
            />
            {/* Text div (absolute, centered over image) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full px-4">
              <h1 className="text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold text-brand-orange">
                WE ARE SMURF
              </h1>
              <p className="text-xs sm:text-sm md:text-base xl:text-lg 2xl:text-2xl text-brand-orange  ">
                Super Movement Unleashing Revolution Future
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile video container */}
      <div className="md:hidden flex justify-center mt-4 md:absolute md:bottom-0 md:left-0 md:translate-x-[80px] md:translate-y-[-10px] relative h-[500px]">
        {/* Replaced video with image for mobile background */}
        <Image
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/banner/bg-banner2.png"
          alt="Mobile banner background"
          layout="fill"
          objectFit="cover"
        />
        {/* Container for Image (relative positioning context for text) */}
        <div className="relative w-full max-w-sm h-auto sm:max-w-md md:max-w-lg lg:max-w-xl  z-10">
          {/* Text div (absolute, centered over image) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full px-4">
            <Image
              src="/svg/animation.svg"
              alt="banner"
              width={550}
              height={600}
              className="w-full h-auto translate-y-[50px]"
            />
            <h1 className="text-4xl lg:text-3xl font-semibold text-brand-orange">
              WE ARE SMURF
            </h1>
            <p className="text-xl  text-brand-orange text-start max-w-xs ">
              Super Movement Unleashing Revolution Future
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
