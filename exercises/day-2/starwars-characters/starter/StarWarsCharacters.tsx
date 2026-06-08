import { useState, useEffect } from "react";
import "./StarWarsCharacters.css";

interface Character {
  name: string;
}

function StarWarsCharacters() {
  const [characters, setCharacters] = useState<Character[]>([]);

  return (
    <div className="starwars-container">
      <h1>Star Wars Characters</h1>

      <table className="characters-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Sample Character</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StarWarsCharacters;
