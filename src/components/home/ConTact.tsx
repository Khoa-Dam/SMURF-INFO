import Link from "next/link";
import Image from "next/image";
const Contact = () => {
  return (
    <div className="flex flex-wrap justify-between items-center p-5 mt-[150px] border-t border-t-[#F6891E]">
      <Link href="/">
        <Image
          src="/images/logo/SMURF.png"
          alt="contact"
          width={150}
          height={150}
        />
      </Link>
      <div className="flex flex-row">
        <Link href="/">
          <Image src="/svg/X.svg" alt="contact" width={44} height={44} />
        </Link>
        <Link href="/">
          <Image src="/svg/Telegram.svg" alt="contact" width={44} height={44} />
        </Link>
        <Link href="/">
          <Image src="/svg/Discord.svg" alt="contact" width={44} height={44} />
        </Link>
        <Link href="/">
          <Image src="/svg/Youtube.svg" alt="contact" width={44} height={44} />
        </Link>
        <Link href="/">
          <Image src="/svg/Facebook.svg" alt="contact" width={44} height={44} />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
