import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, removePost, searchPosts } from "../redux/actions";

import "../App.css";
const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleDelete = (postId) => {
    dispatch(removePost(postId));
  };

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    dispatch(searchPosts(term));
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div
      style={{
        margin: "auto",
        marginTop: "20px",
        textAlign: "center",
        border: "1px solid black",
        width: "90%",
      }}
    >
      <h1>Blog Posts</h1>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
        className="search"
      />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            style={{
              margin: "auto",
              marginTop: "20px",
              textAlign: "center",
              border: "1px solid black",
              width: "70%",
              height: "300px",
              padding: "20px",
            }}
          >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button
              onClick={() => handleDelete(post.id)}
              style={{ position: "sticky", bottom: "0", right: "0" }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
