"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const RubyVariants = {
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

const FlyVariants = {
  hidden: { opacity: 0, x: 500 },
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

const OurRoadmap = () => {
  return (
    <motion.div
      className="flex flex-col justify-center items-center mt-[150px] "
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
    >
      <div className="w-full mb-5">
        <motion.h1
          className="text-center text-4xl mb-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          OUR ROADMAP
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src="/svg/line.svg"
            alt="what-is-smurf"
            width={1000}
            height={1000}
            className="w-full"
          />
        </motion.div>
      </div>

      <div className="relative bg-[url('/images/smurf/roadmap.png')] bg-cover bg-center p-8 w-full h-[600px] flex justify-center items-center">
        {/* Ruby 1 - Bottom Left */}
        <motion.div
          className="hidden sm:block absolute bottom-[5%] -left-[5%] w-1/4 h-1/4 z-1"
          variants={RubyVariants}
          initial="hidden"
          whileInView="visible"
          animate="float"
        >
          <Image
            src="/images/smurf/ruby.png"
            alt="Ruby"
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Ruby 2 - Mid-Bottom */}
        <motion.div
          className="hidden sm:block absolute bottom-[15%] left-[17%] w-1/5 h-1/5 z-1"
          variants={RubyVariants}
          initial="hidden"
          whileInView="visible"
          animate="float"
        >
          <Image
            src="/images/smurf/ruby.png"
            alt="Ruby"
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Ruby 3 - Mid-Left */}
        <motion.div
          className="hidden sm:block absolute top-[48%] left-[38%] w-1/5 h-1/5 z-1"
          variants={RubyVariants}
          initial="hidden"
          whileInView="visible"
          animate="float"
        >
          <Image
            src="/images/smurf/ruby.png"
            alt="Ruby"
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Ruby 4 - Mid-Right */}
        <motion.div
          className="hidden sm:block absolute top-[35%] right-[25%] w-1/5 h-1/5 z-1"
          variants={RubyVariants}
          initial="hidden"
          whileInView="visible"
          animate="float"
        >
          <Image
            src="/images/smurf/ruby.png"
            alt="Ruby"
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Ruby 5 - Top-Mid */}
        <motion.div
          className="hidden sm:block absolute top-[10%] right-[15%] w-1/6 h-1/6 z-1"
          variants={RubyVariants}
          initial="hidden"
          whileInView="visible"
          animate="float"
        >
          <Image
            src="/images/smurf/ruby.png"
            alt="Ruby"
            fill
            className="object-contain"
          />
        </motion.div>
        <motion.div
          className="hidden sm:block absolute -top-[1%] right-[20%] w-1/12 h-1/12 z-1"
          variants={RubyVariants}
          initial="hidden"
          whileInView="visible"
          animate="float"
        >
          <Image
            src="/images/smurf/ruby.png"
            alt="Ruby"
            fill
            className="object-contain"
          />
        </motion.div>

        <motion.div
          className="hidden sm:block absolute bottom-[1%] -right-[10%]  w-1/2 h-1/2 z-1"
          variants={FlyVariants}
          initial="hidden"
          whileInView="visible"
          animate="float"
        >
          <Image
            src="/images/smurf/fly.png"
            alt="Ruby"
            fill
            className="object-contain"
          />
        </motion.div>

        <div className="absolute top-8 sm:left-8 flex flex-col bg-[#151414BF] p-6 w-full max-w-md text-center z-2">
          <h1 className="text-4xl font-bold">Stage 1</h1>
          <ul className="text-brand-light mt-4 space-y-2 text-start p-2 roadmap-text-box">
            <li>
              - Gaming Guild Expertise: Originating as a Vietnamese Web3 gaming
              guild, we understand how to build, engage, and scale crypto gaming
              communities.
            </li>
            <li>
              - Marketing & Partnerships: Strong connections with KOLs, GameFi
              guilds, and Web3 projects for strategic growth.
            </li>
            <li>
              - Content & Social Engagement: Creating viral Web3 gaming content
              that drives organic adoption.
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default OurRoadmap;
