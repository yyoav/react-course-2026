import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./UseEffectFetch.css";

interface StarWarsCharacter {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

function UseEffectFetch() {
  const [character, setCharacter] = useState<StarWarsCharacter | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [characterId, setCharacterId] = useState(1);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`https://swapi.py4e.com/api/people/${characterId}/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch character");
        }
        return response.json();
      })
      .then((data) => {
        setCharacter(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [characterId]);

  const handleFetchCharacter = () => {
    const randomId = Math.floor(Math.random() * 83) + 1;
    setCharacterId(randomId);
  };

  return (
    <div className="fetch-example">
      <nav className="breadcrumb">
        <Link to="/">← Back to Home</Link>
      </nav>

      <h1>useEffect: Fetch Example</h1>

      <div className="info-box">
        <h3>🎯 Example: Fetch Star Wars Character</h3>
        <p>
          This example demonstrates <strong>useEffect</strong> with data
          fetching from the Star Wars API (SWAPI).
        </p>
        <p>
          <strong>Key Concepts:</strong> Async data fetching, loading states,
          and dependency arrays.
        </p>
      </div>

      <div className="demo-container">
        <button onClick={handleFetchCharacter} className="fetch-button">
          🎲 Fetch Random Character
        </button>

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading...</p>
          </div>
        )}

        {error && (
          <div className="error">
            <p>Error: {error}</p>
          </div>
        )}

        {!loading && !error && character && (
          <div className="character-card">
            <h2>{character.name}</h2>
            <div className="character-details">
              <div className="detail-row">
                <span className="label">Height:</span>
                <span className="value">{character.height} cm</span>
              </div>
              <div className="detail-row">
                <span className="label">Mass:</span>
                <span className="value">{character.mass} kg</span>
              </div>
              <div className="detail-row">
                <span className="label">Hair Color:</span>
                <span className="value">{character.hair_color}</span>
              </div>
              <div className="detail-row">
                <span className="label">Eye Color:</span>
                <span className="value">{character.eye_color}</span>
              </div>
              <div className="detail-row">
                <span className="label">Birth Year:</span>
                <span className="value">{character.birth_year}</span>
              </div>
              <div className="detail-row">
                <span className="label">Gender:</span>
                <span className="value">{character.gender}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UseEffectFetch;
