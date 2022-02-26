import Header from "./Header";
import DeckCreate from "../Deck/Create";
import CardCreate from "../Card/Create";
import CardEdit from "../Card/Edit";
import DeckEdit from "../Deck/Edit";
import Study from "../Deck/Study";
import Home from "../Home";
import { Route, Switch } from "react-router-dom";
import React from "react";
import DeckView from "../Deck/View.js";
import NotFound from "./Notfound";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/decks/new">
            <DeckCreate />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="/decks/:deckId/edit">
            <DeckEdit />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <CardCreate />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <CardEdit />
          </Route>
          <Route path="/decks/:deckId">
            <DeckView />
          </Route>
          <Route path="/decks" exact={true}>
            <Home />
          </Route>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;