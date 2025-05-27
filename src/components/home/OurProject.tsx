import Card from "./Card";

const data = [
  {
    id: "1",
    logo: {
      src: "/images/cards/SMURF-LOGO.png",
      alt: "SMURF logo",
    },
    name: "SMURF",
  },
  {
    id: "2",
    logo: {
      src: "/images/cards/MEMEFOREST-LOGO.png",
      alt: "Project 2 logo",
    },
    name: "MEMEFOREST",
  },
  {
    id: "3",
    logo: {
      src: "/images/cards/MOVEMENTHUB-LOGO.png",
      alt: "Project 3 logo",
    },
    name: "MOVEMENTHUBV",
    className: " ",
  },
  {
    id: "4",
    logo: {
      src: "",
      alt: "",
    },
    name: "GIANG SON",
  },
  {
    id: "5",
    logo: {
      src: "",
      alt: "",
    },
    name: "GAME 3",
  },
  {
    id: "6",
    logo: {
      src: "",
      alt: "",
    },
    name: "SMURFFI",
  },
];

const OurProject = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full ">
      {data.map((project) => (
        <Card key={project.id} data={project} />
      ))}
    </div>
  );
};

export default OurProject;
