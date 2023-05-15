import { getPosts, addPost, deletePost } from "../api/api";

export const fetchPosts = () => async (dispatch) => {
  try {
    const posts = await getPosts();
    dispatch({ type: "FETCH_POSTS_SUCCESS", payload: posts });
  } catch (error) {
    dispatch({ type: "FETCH_POSTS_ERROR", payload: error.message });
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const newPost = await addPost(post);
    dispatch({ type: "CREATE_POST_SUCCESS", payload: newPost });
  } catch (error) {
    dispatch({ type: "CREATE_POST_ERROR", payload: error.message });
  }
};

export const removePost = (postId) => async (dispatch) => {
  try {
    await deletePost(postId);
    dispatch({ type: "DELETE_POST_SUCCESS", payload: postId });
  } catch (error) {
    dispatch({ type: "DELETE_POST_ERROR", payload: error.message });
  }
};

export const searchPosts = (searchTerm) => (dispatch) => {
  dispatch({ type: "SEARCH_POSTS", payload: searchTerm });
};

// ... other actions
