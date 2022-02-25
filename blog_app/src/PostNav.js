import React from "react";
import { Link } from "react-router-dom";

export const PostsNav = () => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to="/">
        <Link to="/">Go Home</Link>
        </Link>
      </li>
    </ol>
  </nav>
);

export default PostsNav;