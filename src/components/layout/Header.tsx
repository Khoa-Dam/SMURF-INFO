import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between z-2 relative">
        <Link href="/" className="px-20 translate-y-[20px]">
          <Image
            src="/images/logo/SMURF.png"
            alt="Smurf Dashboard"
            width={200}
            height={200}
          />
        </Link>

        <div className="flex items-center gap-10 uppercase bg-transparent ml-4">
          <Link href="/">Home</Link>
          <Link href="/">Projects</Link>
          <Link href="/">Contact</Link>
        </div>

        <Link
          href="/"
          className="flex items-center gap-2 bg-[#f6891e] px-5 h-10 font-bold mr-20 ml-20 translate-y-[20px]"
          style={{
            clipPath:
              "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)",
          }}
        >
          LET&apos;S TALK
        </Link>
      </div>
    </header>
  );
};

export default Header;
