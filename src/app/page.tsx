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
        viewport={{ amount: 0.3 }}
      >
        <div className="w-full ">
          <motion.h1
            className="text-center text-4xl mb-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            WHAT IS SMURF
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
          className="flex flex-row w-full mt-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
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
