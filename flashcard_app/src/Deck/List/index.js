import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteDeck, listDecks } from "../../utils/api";
import { useHistory } from "react-router";

export default function List() {
  const [decks, setDecks] = useState([]);
  const loadDecks = () => listDecks().then(setDecks);
  const history = useHistory();

  useEffect(() => {
    loadDecks();
  }, []);

  const deleteHandler = (deckId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this Deck?"
    );
    confirmed && deleteDeck(deckId).then(loadDecks()).then(history.push("/"));
  };

  return (
    <ul className="list-group mt-2 deck-list">
      {decks.map((deck, index) => {
        return (
          <li
            className="list-group-item list-group-item-action flex-column align-items-start"
            key={index}
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{deck.name}</h5>
              <small>{deck.cards.length} cards</small>
            </div>
            <p className="mb-1">{deck.description}</p>
            <Link className="btn btn-secondary mr-2" to={`/decks/${deck.id}`}>
              <span className="oi oi-eye"></span>
              {` View`}
            </Link>
            <Link className="btn btn-primary" to={`/decks/${deck.id}/study`}>
              <span className="oi oi-book"></span>
              {` Study`}
            </Link>
            <a
              className="btn btn-danger float-right"
              onClick={() => deleteHandler(deck.id)}
            >
              <span className="oi oi-trash"></span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
