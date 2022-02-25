import React from "react";

function PostItem({ post, deletePosts }) {
	return (
		<div className="post">
			{post.type === "Text" ? (
				<p>{post.content}</p>
			) : (
				<img src={post.content} />
			)}
			<button name="delete" onClick={deletePosts}>
				Delete
			</button>
		</div>
	);
}

export default PostItem;