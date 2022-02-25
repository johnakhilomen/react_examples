import React from "react";

function PostHandle({ post, deletePost }) {
  return (
    <div className="post">
      {post.type === "Text" ? (
        <p>{post.content}</p>
      ) : (
        <img src={post.content} />
      )}
      <button name="delete" onClick={deletePost}>
        Delete Post
      </button>
    </div>
  );
}

export default PostHandle;