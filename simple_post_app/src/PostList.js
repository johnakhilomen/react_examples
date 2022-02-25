import React from "react";
import PostItem from "./PostItem";

function PostList({ posts, deletePosts }) {
	return (
		<div className="post-list">
			{posts.map((post, index) => (
				<PostItem
					deletePosts={() => deletePosts(index)}
					key={index}
					post={post}
				/>
			))}
		</div>
	);
}

export default PostList;