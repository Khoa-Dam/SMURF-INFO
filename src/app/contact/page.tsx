import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between text-[#FFDFBF] p-10">
      <h1 className="text-4xl sm:text-5xl translate-y-8 translate-x-10 font-semibold">
        Let&apos;s Create <br />
        Something crazy <br />
        Together.
      </h1>
      <div className="flex flex-col gap-3 translate-y-15 translate-x-10 lg:translate-y-8 lg:-translate-x-10 ">
        <div
          className="flex flex-col bg-black/50 p-10 relative backdrop-filter backdrop-blur-3xl"
          style={{
            clipPath:
              "polygon(10% 0%, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)",
          }}
        >
          <div className="relative z-10 flex flex-col gap-5 font-semibold">
            <h1 className="text-4xl  mb-10">
              Enter your
              <br /> contact details
            </h1>
            <form className="flex flex-col gap-5">
              {/* Name Input */}
              <div className="flex flex-col border-b-2 border-b-[#FFDFBF] ">
                {" "}
                {/* Container for label and input */}
                <label className="text-sm text-brand-light/70 ">Name</label>
                {/* Label */}
                <input
                  type="text"
                  placeholder="Thuy Doan"
                  className="border-none outline-none bg-transparent text-brand-light placeholder:text-brand-light/50 pr-2 pb-4"
                />
              </div>
              {/* Email Input */}
              <div className="flex flex-col border-b-2 border-b-[#FFDFBF]">
                <input
                  type="email"
                  placeholder="Email address"
                  className="border-none outline-none border-b-2 border-b-[#FFDFBF] bg-transparent text-brand-light pr-2 pb-4"
                />
              </div>
              {/* Message Input */}
              <div className="flex flex-col border-b-2 border-b-[#FFDFBF]">
                <textarea
                  placeholder="Message"
                  className="border-none outline-none bg-transparent text-brand-light placeholder:text-brand-light/50 overflow-hidden resize-none pb-15"
                />
              </div>
              {/* Submit button removed as per image */}
            </form>
          </div>
        </div>
        <button
          className="text-white bg-[#F6891E] px-4 py-2 self-start font-bold"
          style={{
            clipPath:
              "polygon(10% 0%, 100% 0, 100% 75%, 90% 100%, 0 100%, 0 25%)",
          }}
        >
          SEND MESSAGE
        </button>
      </div>
    </div>
  );
};

export default ContactPage;
