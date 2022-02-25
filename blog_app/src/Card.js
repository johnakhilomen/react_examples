import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ user = { posts: [] } }) => (
  <article className="col-12 col-md-6 col-xl-3 my-2 align-self-stretch">
    <div className="border p-4 h-100 d-flex flex-column">
      <h2 className="font-weight-lighter flex-fill">
        <Link to={`/users/${user.id}`}>{user.name}</Link>
      </h2>
      <Link className="mt-2" to={`/users/${user.id}/posts`}>
        {user.posts.length} Posts »
      </Link>
    </div>
  </article>
);

export default Card;