function ProjectCard({ project }) {
  // Feed the pointer position to CSS so the card's glow follows the cursor.
  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  const sizeClass = project.size ? ` project-${project.size}` : "";

  return (
    <article className={`project card${sizeClass}`} onPointerMove={handlePointerMove} data-reveal>
      {project.image && (
        <div className="project-shot">
          <img src={project.image.src} alt={project.image.alt} width="1280" height="620" loading="lazy" decoding="async" />
        </div>
      )}
      <div>
        <p className="label">{project.kicker}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        {project.snippet && <code className="snippet">{project.snippet}</code>}
        <ul className="tags" aria-label="Built with">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
      <div className="project-links">
        {project.links.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label} <span aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </article>
  );
}

export default ProjectCard;
