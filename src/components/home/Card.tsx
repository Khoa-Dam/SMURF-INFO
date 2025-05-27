import type React from "react";
import Image from "next/image";

export interface CardData {
  id: string;
  logo: {
    src: string;
    alt: string;
  };
  name: string;
  className?: string;
}

interface CardProps {
  data: CardData;
  className?: string;
  width?: string;
  height?: string;
  maxWidth?: string | number;
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="relative cursor-pointer w-full  mx-auto">
      <div
        className="relative flex items-center justify-center"
        style={{ aspectRatio: "1/1" }}
      >
        {/* Main background */}
        <div className="w-[80%] h-[85%] bg-[#102224] relative triangle-card">
          {/* Overlay the frame-card.png image */}
          <div className="absolute inset-0 z-10 -translate-y-2  ">
            <Image
              src="/images/cards/frame-card.png"
              alt="Card Frame"
              fill
              className="object-contain scale-[120%] "
            />
          </div>
          <div className="absolute inset-0 z-20 flex items-center justify-center -translate-y-2">
            <div
              className="w-[75%] h-[75%] relative bg-black scale-[120%]  "
              style={{
                clipPath:
                  "polygon(44% 3.8%, 100% 4%, 100% 55.6%, 56.3% 96.1%, 0% 96%, 0% 44.5%)",
                WebkitClipPath:
                  "polygon(44% 3.8%, 100% 4%, 100% 55.6%, 56.3% 96.1%, 0% 96%, 0% 44.5%)",
              }}
            >
              <Image
                src={data.logo.src || "/placeholder.svg"}
                alt={data.logo.alt}
                fill
                className={`object-contain scale-75`}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Card Info */}
      <div className="w-[80%] h-[15%] mx-auto text-white text-xl sm:text-2xl font-semibold bg-[#34383E] p-2 -mt-4 relative z-30 flex justify-center items-center -translate-y-7 2xl:-translate-y-12  ">
        {data.name}
      </div>
    </div>
  );
};

export default Card;
