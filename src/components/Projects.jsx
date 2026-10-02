import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import { featuredProjects, moreProjects } from "../data/content";

function Projects() {
  return (
    <section className="section container" id="work" aria-labelledby="work-heading">
      <SectionHeading id="work-heading" number="01" title="Selected work" />

      <div className="bento">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <h3 className="more-heading" data-reveal>
        More from the workbench
      </h3>
      <ul className="more-list" data-reveal>
        {moreProjects.map((project) => (
          <li key={project.title}>
            <a href={project.href} target="_blank" rel="noopener noreferrer">
              <span className="more-title">{project.title}</span>
              <span className="more-description">{project.description}</span>
              <span className="more-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
