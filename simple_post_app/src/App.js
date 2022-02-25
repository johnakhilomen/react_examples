import React, { useState } from "react";
import "./App.css";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
	const [posts, setPosts] = useState([]);

	const createPost = (newPost) =>
		setPosts((currentPosts) => [
      newPost, 
      ...currentPosts
    ]);
    console.log(createPost)
  
  const deletePosts = (indexToDelete) =>
    setPosts((currentPosts) =>
      currentPosts.filter((post, index) => index !== indexToDelete)
    );

	return (
		<div className="App">
			<PostCreate createPost={createPost} />
			<PostList 
      posts={posts} 
      deletePosts={deletePosts} 
      />
		</div>
	);
}

export default App;