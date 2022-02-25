import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Post from "./Post";
import PostLink from "./PostLink";
import NoPostSelectedMessage from "./NoPostSelectedMessage";

export const PostList = ({ posts }) => {
  const { url } = useRouteMatch();
  const postLinks = posts.map((post) => (
    <PostLink key={post.id} userId={post.userId} post={post} />
  ));

  return (
    <div className="row pt-2">
      <div className="col-3">
        <ul className="list-group">{postLinks}</ul>
      </div>
      <div className="col-9">
        <Switch>
          <Route exact={true} path={`${url}`}>
            <NoPostSelectedMessage />
          </Route>
          <Route path={`${url}/:postId`}>
            <Post posts={posts} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default PostList;