"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// Define animation variants for the network section
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
      <h1 className="text-center text-4xl font-semibold">OUR NETWORK</h1>
      <div className=" w-full">
        <div className="w-full relative text-brand-light">
          <Image
            src="/images/networks/background.png"
            alt=""
            width={2000}
            height={1000}
            className="w-full h-full object-cover"
          />
          {/* Network 1 */}
          <motion.div
            className="absolute top-0 left-0 w-1/4 h-1/4 flex flex-col justify-center items-center translate-x-[45%] translate-y-[60%]"
            variants={robotVariants}
            initial="hidden"
            whileInView="visible"
            animate="float"
          >
            <div className="w-full h-full -translate-y-1/2 z-10">
              <Image
                src="/images/networks/network-1.png"
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
          </motion.div>
          {/* Network 2 */}
          <motion.div
            className="absolute top-0 right-0 w-1/4 h-1/4 flex flex-col justify-center items-center -translate-x-[25%] translate-y-[70%]"
            variants={robotVariants}
            initial="hidden"
            whileInView="visible"
            animate="float"
          >
            <div className="w-full h-full -translate-y-1/2 z-10">
              <Image
                src="/images/networks/network-2.png"
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
          </motion.div>
          {/* Network 3 */}
          <motion.div
            className="absolute bottom-0 left-0 w-1/4 h-1/4 flex flex-col justify-center items-center translate-x-1/3 -translate-y-2/3"
            variants={robotVariants}
            initial="hidden"
            whileInView="visible"
            animate="float"
          >
            <Image
              src="/images/networks/network-3.png"
              alt=""
              fill
              className="object-contain z-10"
            />
          </motion.div>
          {/* Network 4 */}
          <motion.div
            className="absolute bottom-0 right-0 w-1/4 h-1/4 flex flex-col justify-center items-center -translate-x-1/3 -translate-y-2/3"
            variants={robotVariants}
            initial="hidden"
            whileInView="visible"
            animate="float"
          >
            <Image
              src="/images/networks/network-4.png"
              alt=""
              fill
              className="object-contain z-10"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default OurNetwork;
