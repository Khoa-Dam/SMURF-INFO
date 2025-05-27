"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const OurCapabilities = () => {
  return (
    <div className="w-full max-w-[2536px] mx-auto relative p-2 overflow-hidden mt-[150px]">
      <h1 className="text-center text-4xl mb-20 font-semibold">
        OUR CAPABILITIES
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-0">
        <motion.div
          className="w-full h-full relative flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          <Image
            src="/svg/frame-capability.svg"
            alt="line"
            width={1000}
            height={1000}
            className="w-full object-contain "
          />
          <div className="absolute inset-0 flex flex-col p-5 sm:p-8 lg:p-5 2xl:p-7">
            <p className="text-xl sm:text-2xl lg:text-[30px] xl:text-5xl 2xl:text-5xl text-[#484848] sm:mb-2">
              01
            </p>
            <h1 className="text-sm sm:text-sm lg:text-[15px] xl:text-2xl 2xl:text-4xl text-brand-orange sm:mb-5">
              Web3 Game Development & Publishing
            </h1>
            <p className="text-[10px] sm:text-[10px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px] text-brand-light ">
              - Built for Web3: We create engaging blockchain games that
              integrate NFTs, token economies, and play-to-earn mechanics.
              <br />
              - Successful Launches: MemeForest is one of the first Movement
              blockchain games, pioneering Telegram-based gaming.
              <br />- GameFi Strategy: Expertise in designing incentive models
              that balance gameplay enjoyment and economic sustainability.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="w-full h-full relative flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Image
            src="/svg/frame-capability.svg"
            alt="line"
            width={1000}
            height={1000}
            className="w-full object-contain "
          />
          <div className="absolute inset-0 flex flex-col p-5 sm:p-8 lg:p-5 2xl:p-7">
            <p className="text-xl sm:text-2xl lg:text-[30px] xl:text-5xl 2xl:text-5xl text-[#484848] sm:mb-2">
              02
            </p>
            <h1 className="text-sm sm:text-sm lg:text-[15px] xl:text-2xl 2xl:text-4xl text-brand-orange sm:mb-5">
              Blockchain Technology & Infrastructure
            </h1>
            <p className="text-[10px] sm:text-[10px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px] text-brand-light ">
              - Move & EVM Compatibility: Leveraging Movement blockchain for
              scalable and secure transactions.
              <br />
              - Smart Contract Development: Secure and efficient NFT, DeFi, and
              staking contracts tailored for Web3 gaming.
              <br />- Cross-Chain Integrations: Building multi-chain compatible
              ecosystems to maximize accessibility and adoption.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-0">
        <div className="hidden lg:block"></div>
        <motion.div
          className="w-full h-full relative flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Image
            src="/svg/frame-capability.svg"
            alt="line"
            width={1000}
            height={1000}
            className="w-full object-contain "
          />
          <div className="absolute inset-0 flex flex-col p-5 sm:p-8 lg:p-5 2xl:p-7">
            <p className="text-xl sm:text-2xl lg:text-[30px] xl:text-5xl 2xl:text-5xl text-[#484848] sm:mb-2">
              03
            </p>
            <h1 className="text-sm sm:text-sm lg:text-[15px] xl:text-2xl 2xl:text-4xl text-brand-orange sm:mb-5">
              Community & Ecosystem Growth
            </h1>
            <p className="text-[10px] sm:text-[10px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px] text-brand-light ">
              - Gaming Guild Expertise: Originating as a Vietnamese Web3 gaming
              guild, we understand how to build, engage, and scale crypto gaming
              communities.
              <br />
              - Marketing & Partnerships: Strong connections with KOLs, GameFi
              guilds, and Web3 projects for strategic growth.
              <br />- Content & Social Engagement: Creating viral Web3 gaming
              content that drives organic adoption.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="w-full h-full relative flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Image
            src="/svg/frame-capability.svg"
            alt="line"
            width={1000}
            height={1000}
            className="w-full object-contain "
          />
          <div className="absolute inset-0 flex flex-col p-5 sm:p-8 lg:p-5 2xl:p-7">
            <p className="text-xl sm:text-2xl lg:text-[30px] xl:text-5xl 2xl:text-5xl text-[#484848] sm:mb-2">
              04
            </p>
            <h1 className="text-sm sm:text-sm lg:text-[15px] xl:text-2xl 2xl:text-4xl text-brand-orange sm:mb-5">
              Web3 Business Development
            </h1>
            <p className="text-[10px] sm:text-[10px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px] text-brand-light ">
              - Move & EVM Compatibility: Leveraging Movement blockchain for
              scalable and secure transactions.
              <br />
              - Smart Contract Development: Secure and efficient NFT, DeFi, and
              staking contracts tailored for Web3 gaming.
              <br />- Cross-Chain Integrations: Building multi-chain compatible
              ecosystems to maximize accessibility and adoption.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurCapabilities;
