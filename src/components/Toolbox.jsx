import SectionHeading from "./SectionHeading";
import { toolbox } from "../data/content";

function Toolbox() {
  return (
    <section className="section container" id="toolbox" aria-labelledby="toolbox-heading">
      <SectionHeading id="toolbox-heading" number="02" title="Toolbox" />
      <div className="toolbox">
        {toolbox.map((group) => (
          <div key={group.group} className="toolbox-group card" data-reveal>
            <h3>{group.group}</h3>
            <ul className="chips">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Toolbox;
