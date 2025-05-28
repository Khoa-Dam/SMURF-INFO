"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const networkVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const robotVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      duration: 1.8,
      ease: "easeOut",
      delay: 0.5,
    },
  },
  float: {
    y: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const OurNetwork = () => {
  return (
    <motion.div
      className="w-full max-w-[2536px] relative  overflow-hidden mt-[150px] bg-black"
      variants={networkVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h1 className="text-center text-2xl sm:text-4xl 2xl:text-6xl font-semibold">
        OUR NETWORK
      </h1>
      <div className=" w-full">
        <div className="w-full relative ">
          <Image
            src="/images/networks/background.png"
            alt=""
            width={2000}
            height={1000}
            className="w-full h-full object-cover"
          />
          {/* Network 1 */}
          <div className="absolute top-0 left-0 w-1/4 h-1/4 flex flex-col justify-center items-center translate-x-[45%] translate-y-[60%]">
            <div className="w-full h-full -translate-y-1/2 z-10">
              <div className="relative w-1/3 h-1/3 translate-x-[100%] translate-y-[20%] z-11">
                <p className="w-[300%] relative text-[7px] sm:text-xl md:text-sm lg:text-base xl:text-2xl 2xl:text-3xl font-semibold z-12 -translate-x-1/3 -translate-y-10/12  text-center">
                  SMURF STUDIO
                </p>
                <motion.div
                  className="w-full h-full relative z-12 -translate-y-[30%]"
                  variants={robotVariants}
                  initial="hidden"
                  whileInView="visible"
                  animate="float"
                >
                  <Image
                    src="/images/networks/ruby.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </div>

              <Image
                src="/images/networks/network.png"
                alt=""
                fill
                className="object-contain z-10"
              />
            </div>

            <Image
              src="/images/networks/layer-bottom.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          {/* Network 2 */}
          <div className="absolute top-0 right-0 w-1/4 h-1/4 flex flex-col justify-center items-center -translate-x-[25%] translate-y-[70%]">
            <div className="w-full h-full -translate-y-1/2 z-10">
              <div className="relative w-1/3 h-1/3 translate-x-[100%] translate-y-[20%] z-11">
                <p className="w-[300%] relative text-[7px] sm:text-xl md:text-sm lg:text-sm xl:text-2xl 2xl:text-3xl font-semibold z-12 -translate-x-1/3  -translate-y-[95%] md:-translate-x-[30%] text-center">
                  SMURF LAB
                </p>
                <motion.div
                  className="w-full h-full relative z-12 -translate-y-[30%]"
                  variants={robotVariants}
                  initial="hidden"
                  whileInView="visible"
                  animate="float"
                >
                  <Image
                    src="/images/networks/ruby.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </div>

              <Image
                src="/images/networks/network.png"
                alt=""
                fill
                className="object-contain z-10"
              />
            </div>

            <Image
              src="/images/networks/layer-bottom.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          {/* Network 3 */}
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 flex flex-col justify-center items-center translate-x-1/3 -translate-y-2/3">
            <div className="w-full h-full -translate-y-1/12 z-11">
              <div className="relative w-1/3 h-1/3 translate-x-[100%] translate-y-[50%] z-11">
                <p className="w-[300%] relative text-[7px] sm:text-2xl md:text-sm lg:text-base xl:text-2xl 2xl:text-3xl font-semibold z-12 -translate-x-1/3 -translate-y-[95%] md:-translate-x-1/3 text-center">
                  SMURF Gaming
                  <br />
                  Guild
                </p>
                <motion.div
                  className="w-full h-full relative z-12 -translate-y-[70%]"
                  variants={robotVariants}
                  initial="hidden"
                  whileInView="visible"
                  animate="float"
                >
                  <Image
                    src="/images/networks/ruby.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </div>
            </div>
            <Image
              src="/images/networks/network.png"
              alt=""
              fill
              className="object-contain z-10"
            />
          </div>
          {/* Network 4 */}
          <div className="absolute bottom-0 right-0 w-1/4 h-1/4 flex flex-col justify-center items-center -translate-x-1/3 -translate-y-2/3">
            <div className="w-full h-full -translate-y-1/12 z-11">
              <div className="relative w-1/3 h-1/3 translate-x-[100%] translate-y-[50%] z-11">
                <p className="w-[300%] relative text-[7px] sm:text-2xl md:text-sm lg:text-base xl:text-2xl 2xl:text-3xl font-semibold z-12 -translate-x-1/3 -translate-y-[95%] md:-translate-x-1/3 text-center">
                  WEb3 HUB
                </p>
                <motion.div
                  className="w-full h-full relative z-12 -translate-y-[30%]"
                  variants={robotVariants}
                  initial="hidden"
                  whileInView="visible"
                  animate="float"
                >
                  <Image
                    src="/images/networks/ruby.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </div>
            </div>
            <Image
              src="/images/networks/network.png"
              alt=""
              fill
              className="object-contain z-10"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OurNetwork;
