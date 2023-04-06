import ProjectItem from "./ProjectItem";
import living_room from "../assets/images/living-room.jpg";
import philip from "../assets/images/philip.jpg";
import snow from "../assets/images/snow.jpg";
import stairs from "../assets/images/stairs.jpg";
import water from "../assets/images/water.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8"></p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={living_room} title="Living Room App" />
        <ProjectItem img={philip} title="Philip App" />
        <ProjectItem img={snow} title="Snow App App" />
        <ProjectItem img={stairs} title="Stairs App" />
        <ProjectItem img={water} title="Water App" />
      </div>
    </div>
  );
};

export default Projects;
