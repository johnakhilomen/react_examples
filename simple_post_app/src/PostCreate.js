import React, { useState } from "react";

function PostCreate({ createPost }) {
	const handleSubmit = (event) => {
		event.preventDefault();
		createPost({
			type,
			content,
		});
		setType("Text");
		setContent("");
	};
	const [type, setType] = useState("Text");
	const [content, setContent] = useState("");

	const handleChange = (event) => {
		setType(event.target.value);
	};
	// console.log(handleChange)

	const handleContentChange = (event) => {
		setContent(event.target.value);
	};
	// console.log(handleContentChange)

	return (
		<form name="create" onSubmit={handleSubmit}>
			<fieldset>
				<legend>Create</legend>
				<div>
					<label htmlFor="type">Type: </label>
					<select
						id="type"
						name="type"
						required={true}
						onChange={handleChange}
						value={type}
					>
						<option>Text</option>
						<option>Image</option>
					</select>
				</div>
				<div>
					<label htmlFor="content">Content: </label>
					{type === "Text" ? (
						<textarea
							id="content"
							name="content"
							required={true}
							rows={3}
							onChange={handleContentChange}
							value={content}
						/>
					) : (
						<input
							id="content"
							name="content"
							type="url"
							required={true}
							onChange={handleContentChange}
							value={content}
						/>
					)}
				</div>
				<div>
					<button type="submit">Submit</button>
				</div>
			</fieldset>
		</form>
	);
}

export default PostCreate;