"use client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { usePathname } from "next/navigation";
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";
  return (
    <div
      className={`${
        isContactPage
          ? "bg-[url('/images/contact/bg-contact.png')] bg-cover bg-center"
          : ""
      } p-3 w-full min-h-screen overflow-hidden `}
    >
      <Header />
      {children}
      {!isContactPage && <Footer />}
    </div>
  );
};

export default MainLayout;
