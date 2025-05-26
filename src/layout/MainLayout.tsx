import Banner from "@/components/banner/Banner";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-5 t">
      <Banner />
      {children}
    </div>
  );
};

export default MainLayout;
