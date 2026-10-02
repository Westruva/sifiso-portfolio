function SectionHeading({ id, number, title }) {
  return (
    <div className="section-heading" data-reveal>
      <span className="section-number">{number}</span>
      <h2 id={id}>{title}</h2>
    </div>
  );
}

export default SectionHeading;
