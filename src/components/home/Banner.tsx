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
      <div
        className="h-[700px] translate-y-[-50px] z-1 w-full hidden md:block bg-[url('/images/banner/bg-banner.png')] bg-cover bg-center"
        style={{
          clipPath:
            "polygon(0 0, 35% 0, 40% 6%, 65% 6%, 70% 0, 100% 0, 100% 90%, 95% 100%, 0 100%)",
        }}
      >
        <div className="flex justify-center mt-4 md:absolute md:bottom-0 md:left-0 md:translate-x-[80px] md:translate-y-[-200px]">
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
      {/* Mobile container for the animation and text block */}
      <div className="md:hidden flex justify-center mt-4 md:absolute md:bottom-0 md:left-0 md:translate-x-[80px] md:translate-y-[-10px]">
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
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
            <h1 className="text-sm sm:text-base md:text-xl lg:text-3xl font-semibold text-brand-orange">
              WE ARE SMURF
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-brand-orange max-w-xs mx-auto">
              Super Movement Unleashing Revolution Future
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
