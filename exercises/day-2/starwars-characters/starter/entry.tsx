import { meta } from "./constants";
import Preview from "./Preview";
import StarWarsCharacters from "./StarWarsCharacters";

export { meta };

export default function StarWarsCharactersStarter() {
  return (
    <div className="lesson-surface">
      <Preview />

      <section className="lesson-card exercise-preview-card exercise-preview-card-large">
        <p className="eyebrow">Result area</p>
        <h3>Star Wars Character Finder</h3>
        <div className="exercise-preview-shell">
          <StarWarsCharacters />
        </div>
      </section>
    </div>
  );
}
