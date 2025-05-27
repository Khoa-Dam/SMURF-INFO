import OurProject from "@/components/home/OurProject";

const ProjectPage = () => {
  return (
    <div className="flex flex-col w-full max-w-[2536px] mx-auto items-center py-10">
      <h1 className="text-4xl sm:text-7xl uppercase font-semibold text-brand-orange">
        Projects
      </h1>
      <OurProject />
    </div>
  );
};

export default ProjectPage;
