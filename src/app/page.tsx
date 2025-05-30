"use client";
import Link from "next/dist/client/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Banner from "@/components/home/Banner";
import OurProject from "@/components/home/OurProject";
import OurCapabilities from "@/components/home/OurCapabilities";
import OurNetwork from "@/components/home/OurNetwork";
import Contact from "@/components/home/ConTact";
import { motion } from "framer-motion";
import OurRoadmap from "@/components/home/OurRoadmap";
// Define animation variants for sections
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <main className="mt-15 text-brand-orange bg-[#080401]">
      <Banner />
      <motion.div
        className="flex flex-col justify-center items-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="w-full ">
          <motion.h1
            className="text-center text-4xl mb-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            WHAT IS SMURF
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
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
        <motion.div
          className="flex flex-row w-full mt-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/smurf/WHAT-IS-SMURF.png"
            alt="what-is-smurf"
            width={500}
            height={300}
            className="hidden xl:block max-w-[500px] max-h-[500px]"
          />
          <div className="flex flex-col ml-5 gap-0">
            <div className="mb-20">
              <h3 className="text-3xl 2xl:text-4xl mb-5">
                SMURF Ecosystem: Empowering the Future of VietNam Web3 Gaming
              </h3>
              <p className="text-brand-light 2xl:text-2xl">
                SMURF is a dynamic Web3 gaming ecosystem that merges blockchain
                technology, GameFi, and community-driven value creation.
                Originally founded as a gaming guild, SMURF has evolved into a
                full-fledged Web3 ecosystem, developing innovative projects like
                MemeForest and MoveWiffrent. With a strong foundation in
                blockchain gaming, NFT economies, and decentralized finance,
                SMURF empowers players and creators to earn, engage, and thrive
                in the digital economy. Built on Movement blockchain, SMURF
                offers seamless transactions, scalable solutions, and
                sustainable tokenomics for the next generation of Web3 users.
                Join us as we redefine gaming and digital ownership in the SMURF
                Ecosystem!
              </p>
            </div>

            <Link
              href="/"
              className="flex flex-row gap-2 text-3xl 2xl:text-4xl"
            >
              Read more
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className="w-full max-w-[2536px] mx-auto relative p-2 overflow-hidden mt-[150px]"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="text-center text-4xl mb-5 font-semibold">
          OUR PROJECTS
        </h1>
        <OurProject />
      </motion.div>

      <OurCapabilities />

      <motion.div
        className="flex flex-col justify-center items-center mt-[150px]"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="w-full ">
          <motion.h1
            className="text-center text-4xl mb-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            NFT
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
        <motion.div
          className="flex flex-row w-full mt-10 gap-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col ml-5 gap-0">
            <div className="mb-15">
              <h3 className=" sm:text-2xl md:text-3xl 2xl:text-4xl mb-5">
                SMURF Genesis
              </h3>
              <p className="text-brand-light sm:text-sm md:text-base 2xl:text-2xl">
                In an increasingly complex digital world, we wear masks that
                hide our true selves, blurring the lines between good and evil,
                nobility and baseness. Inspired by Eastern culture and the
                Shinobi of Naruto, SMURF GAMING GUILD presents the
                &quot;SMURF&quot; Genesis NFT collection—a vibrant tapestry
                celebrating the hidden identities behind our online personas,
                inviting you on a journey of self-discovery.
              </p>
            </div>

            <Link
              href="/"
              className="flex flex-row gap-2 text-3xl 2xl:text-4xl"
            >
              Read more
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
          {/* <video
            className="hidden md:block sm:max-w-[300px] sm:max-h-[300px]  md:min-w-[500px]  md:max-h-[500px] "
            src="/images/smurf/NFT.mp4"
            autoPlay
            loop
            muted
            playsInline
            typeof="video/mp4"
          ></video> */}
          <Image
            src="/images/smurf/NFT2.png"
            alt="what-is-smurf"
            width={500}
            height={500}
            className="hidden md:block sm:max-w-[300px] sm:max-h-[300px]  md:min-w-[500px]  md:max-h-[500px] "
          />
        </motion.div>
      </motion.div>
      <OurRoadmap />
      {/* <OurTeam /> */}
      <OurNetwork />
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Contact />
      </motion.div>
    </main>
  );
}
