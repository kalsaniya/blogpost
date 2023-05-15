import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../redux/actions";
import "../App.css";
const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({ title, body }));
    setTitle("");
    setBody("");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Add New Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            value={body}
            placeholder="Body"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPostForm;
