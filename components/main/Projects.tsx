import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { imageUrl } from "@/constants";
const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex-col md:flex-row gap-10 px-10 grid grid-cols-3">
        <ProjectCard
          src="/englishoven.jpg"
          title="HTML, SCSS, JavaScript, WordPress and Bootstrap"
          description="The English Oven website appears to use HTML, CSS, JavaScript, and likely a CMS like WordPress, along with Bootstrap for responsiveness and Google Analytics for tracking."
        />
        <ProjectCard
          src="/tata.png"
          title="HTML, CSS, and JavaScript"
          description="The HabiNest website uses HTML, CSS, and JavaScript, likely incorporating responsive frameworks and analytics tools for user engagement and performance tracking. It may also employ CMS or backend integration for content management."
        />
        <ProjectCard
          src="/ag.png"
          title="HTML, CSS, JavaScript, WordPress and Bootstrap"
          description="The AgraVishwa website likely utilizes modern web technologies such as HTML, CSS, JavaScript, and responsive frameworks, potentially coupled with CMS platforms and analytics tools for performance tracking and content management."
        />
        <ProjectCard
          src="/zakasapp.png"
          title="Framwork7, Vue2, HTML and SCSS"
          description="The AgraVishwa website likely utilizes modern web technologies such as HTML, CSS, JavaScript, and responsive frameworks, potentially coupled with CMS platforms and analytics tools for performance tracking and content management."
        />
        {/* <ProjectCard
          src={imageUrl+"/ag.png"}
          title="HTML, CSS, JavaScript, WordPress and Bootstrap"
          description="Zakas App: My City, My App! ZakasApp is your own city's app! Create online Dukan & start selling pro."
        /> */}
      </div>
    </div>
  );
};

export default Projects;
