import React, { useState } from "react";
import { findIngredient, INGREDIENTS } from "../utils/substitutions.js";

export default function IngredientSubstitutions() {
  const [query, setQuery] = useState("");

  const trimmed = query.trim();

  let exactMatch = null;
  let closeMatches = [];

  if (trimmed !== "") {
    const result = findIngredient(trimmed);
    exactMatch = result.exactMatch;
    closeMatches = result.closeMatches;
  }

  const renderIngredientCard = (ingredient) => (
    <div className="ingredient-search__card" key={ingredient.name}>
      <h3 className="ingredient-search__card-title">{ingredient.name}</h3>
      <ul className="ingredient-search__substitutions">
        {ingredient.substitutions.map((s, idx) => (
          <li className="ingredient-search__substitution" key={idx} style={{ marginBottom: "0.75rem" }}>
            <strong>{s.substitute}</strong>{" "}
            <span className="ingredient-search__notes">{s.notes}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="ingredient-search">
      <div className="ingredient-search__bar">
        <input
          type="text"
          className="ingredient-search__input"
          placeholder="Buscar ingrediente..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />
        {query && (
          <button
            type="button"
            className="ingredient-search__btn ingredient-search__btn--clear"
            onClick={() => setQuery("")}
          >
            Limpiar
          </button>
        )}
      </div>

      <div className="ingredient-search__results">
        {trimmed !== "" && exactMatch && renderIngredientCard(exactMatch)}

        {trimmed !== "" && !exactMatch && closeMatches.length > 0 &&
          closeMatches.map((match) =>
            renderIngredientCard(INGREDIENTS.find((i) => i.name === match.name))
          )
        }

        {trimmed !== "" && !exactMatch && closeMatches.length === 0 && (
          <div className="ingredient-search__not-found">
            <p>No encontramos sustituciones para "{query}".</p>
          </div>
        )}
      </div>
    </div>
  );
}
