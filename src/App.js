import React from "react";
import PostList from "./components/PostList";
import AddPostForm from "./components/AddPostForm";

const App = () => {
  return (
    <div>
      <AddPostForm />
      <PostList />
    </div>
  );
};

export default App;
