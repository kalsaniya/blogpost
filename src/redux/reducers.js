const initialState = {
  posts: [],
  filteredPosts: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS_SUCCESS":
      return {
        ...state,
        posts: action.payload,
        filteredPosts: action.payload,
        loading: false,
        error: null,
      };

    case "SEARCH_POSTS":
      const searchTerm = action.payload.toLowerCase();
      const filteredPosts = state.posts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm) ||
          post.body.toLowerCase().includes(searchTerm)
      );
      return {
        ...state,
        filteredPosts,
      };

    case "FETCH_POSTS_ERROR":

    case "CREATE_POST_ERROR":

    case "DELETE_POST_ERROR":
      return { ...state, loading: false, error: action.payload };

    case "CREATE_POST_SUCCESS":
      return {
        ...state,
        posts: [...state.posts, action.payload],
        loading: false,
        error: null,
      };

    case "DELETE_POST_SUCCESS":
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;
