"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// Define animation variants for the team section
const teamVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const OurTeam = () => {
  return (
    <motion.div
      className="w-full max-w-[2536px] relative p-2 overflow-hidden mt-[150px]"
      variants={teamVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h1 className="text-center text-4xl mb-5 font-semibold">OUR TEAM</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-7">
        <div className="w-full h-full relative flex flex-col  text-brand-light">
          <Image
            src="/images/teams/card-team.png"
            alt=""
            width={1000}
            height={1000}
            className="w-full object-contain "
          />
          <div className="grid grid-cols-4 gap-0 ml-5">
            <Image
              src="/svg/arrow-bottom-left.svg"
              alt=""
              width={5}
              height={5}
              className="w-2/3 object-contain "
            />
            <div className="flex flex-col col-span-3 mt-5">
              <h1 className="text-3xl font-semibold">Ivei Ruan</h1>
              <p className="">CPO</p>
            </div>
          </div>
        </div>
        <div className="w-full h-full relative flex flex-col  text-brand-light">
          <Image
            src="/images/teams/card-team.png"
            alt=""
            width={1000}
            height={1000}
            className="w-full object-contain "
          />
          <div className="grid grid-cols-4 gap-0 ml-5">
            <Image
              src="/svg/arrow-bottom-left.svg"
              alt=""
              width={5}
              height={5}
              className="w-2/3 object-contain "
            />
            <div className="flex flex-col col-span-3 mt-5">
              <h1 className="text-3xl font-semibold">Ivei Ruan</h1>
              <p className="">CPO</p>
            </div>
          </div>
        </div>
        <div className="w-full h-full relative flex flex-col  text-brand-light">
          <Image
            src="/images/teams/card-team.png"
            alt=""
            width={1000}
            height={1000}
            className="w-full object-contain "
          />
          <div className="grid grid-cols-4 gap-0 ml-5">
            <Image
              src="/svg/arrow-bottom-left.svg"
              alt=""
              width={5}
              height={5}
              className="w-2/3 object-contain "
            />
            <div className="flex flex-col col-span-3 mt-5">
              <h1 className="text-3xl font-semibold">Ivei Ruan</h1>
              <p className="">CPO</p>
            </div>
          </div>
        </div>
        <div className="w-full h-full relative flex flex-col  text-brand-light">
          <Image
            src="/images/teams/card-team.png"
            alt=""
            width={1000}
            height={1000}
            className="w-full object-contain "
          />
          <div className="grid grid-cols-4 gap-0 ml-5">
            <Image
              src="/svg/arrow-bottom-left.svg"
              alt=""
              width={5}
              height={5}
              className="w-2/3 object-contain "
            />
            <div className="flex flex-col col-span-3 mt-5">
              <h1 className="text-3xl font-semibold">Ivei Ruan</h1>
              <p className="">CPO</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-7 mt-8">
        <div className="w-full h-full relative flex flex-col  text-brand-light">
          <Image
            src="/images/teams/card-team.png"
            alt=""
            width={1000}
            height={1000}
            className="w-full object-contain "
          />
          <div className="grid grid-cols-4 gap-0 ml-5">
            <Image
              src="/svg/arrow-bottom-left.svg"
              alt=""
              width={5}
              height={5}
              className="w-2/3 object-contain "
            />
            <div className="flex flex-col col-span-3 mt-5">
              <h1 className="text-3xl font-semibold">Ivei Ruan</h1>
              <p className="">CPO</p>
            </div>
          </div>
        </div>
        <div className="w-full h-full relative flex flex-col  text-brand-light">
          <Image
            src="/images/teams/card-team.png"
            alt=""
            width={1000}
            height={1000}
            className="w-full object-contain "
          />
          <div className="grid grid-cols-4 gap-0 ml-5">
            <Image
              src="/svg/arrow-bottom-left.svg"
              alt=""
              width={5}
              height={5}
              className="w-2/3 object-contain "
            />
            <div className="flex flex-col col-span-3 mt-5">
              <h1 className="text-3xl font-semibold">Ivei Ruan</h1>
              <p className="">CPO</p>
            </div>
          </div>
        </div>
        <div className="w-full h-full relative flex flex-col  text-brand-light">
          <Image
            src="/images/teams/card-team.png"
            alt=""
            width={1000}
            height={1000}
            className="w-full object-contain "
          />
          <div className="grid grid-cols-4 gap-0 ml-5">
            <Image
              src="/svg/arrow-bottom-left.svg"
              alt=""
              width={5}
              height={5}
              className="w-2/3 object-contain "
            />
            <div className="flex flex-col col-span-3 mt-5">
              <h1 className="text-3xl font-semibold">Ivei Ruan</h1>
              <p className="">CPO</p>
            </div>
          </div>
        </div>
        <div className="w-full h-full relative flex flex-col  text-brand-light">
          <Image
            src="/images/teams/card-team.png"
            alt=""
            width={1000}
            height={1000}
            className="w-full object-contain "
          />
          <div className="grid grid-cols-4 gap-0 ml-5">
            <Image
              src="/svg/arrow-bottom-left.svg"
              alt=""
              width={5}
              height={5}
              className="w-2/3 object-contain "
            />
            <div className="flex flex-col col-span-3 mt-5">
              <h1 className="text-3xl font-semibold">Ivei Ruan</h1>
              <p className="">CPO</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OurTeam;
