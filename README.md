# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

================================================================================================================================================

## Introduction:
The goal of this project was to develop a React application that fetches data from an API and displays it in a list. The application allows users to search for blog posts based on the title or body, sort the posts based on date or title, add new blog posts, and delete existing posts. The project utilized modern web development technologies such as React, Redux, and Redux-thunk middleware to manage the application's state and handle asynchronous API requests.

## Implementation:

## File Structure:
The project followed a structured file organization to maintain code clarity and separation of concerns. The main files and directories were organized as follows:
API: Directory containing API-related functions and configuration.
components: Directory for React components.
redux: Directory for Redux-related files including actions, reducers, and store configuration.
App.js: The main component serves as the entry point of the application.
index.js: File responsible for rendering the React application and providing the Redux store.
Other necessary files and directories such as index.html and configuration files.
Fetching Data:
The application used Redux-thunk middleware to handle asynchronous API requests. The fetchPosts action dispatched an API request to retrieve the blog posts from the provided API URL. Upon successful retrieval, the fetched posts were stored in the Redux store.

## Displaying Blog Posts:
The PostList component was responsible for rendering the list of blog posts. It retrieved the posts from the Redux store and displayed them using a mapping function. Loading and error states were handled to provide a better user experience.

## Searching Functionality:
The application allowed users to search for blog posts based on the title or body. The handleSearch function was implemented to capture the search term entered by the user. The search term was then dispatched as a payload to the searchPosts action. The reducer filtered the posts based on the search term, and the updated filtered posts were displayed.

## Sorting Functionality:
Sorting functionality was implemented to enable users to sort the list of blog posts based on the title. The sortPostsByTitle action was dispatched when the "Sort by Title" button was clicked. The reducer sorted the filtered posts array based on the title in ascending order.

## Adding and Deleting Blog Posts:
The application allowed users to add new blog posts and delete existing ones. The AddPostForm component provided a form for users to enter the title and body of a new blog post. On submission, the addPost action was dispatched, adding the new post to the list. The handleDelete function was responsible for dispatching the removePost action when a delete button was clicked, removing the selected post from the list.

## Challenges and Solutions:

Asynchronous Data Fetching: Implementing asynchronous data fetching using Redux-thunk middleware required understanding how Redux-thunk handles asynchronous actions and dispatches. Thoroughly studying the documentation and examples helped overcome this challenge.

Filtering and Sorting: Properly filtering and sorting the list of blog posts based on user input required careful consideration of the data structure and JavaScript array methods. Using the filter and sort methods along with string manipulation functions such as toLowerCase and localeCompare helped overcome this challenge.

Testing: Implementing unit tests using a testing framework like Jest or Enzyme provided a challenge in ensuring the correct behavior of components, actions, and reducers. Thoroughly testing each component and action helped identify and resolve any issues.

## Conclusion:
In conclusion, the React Blog Application successfully met the requirements of fetching data from an API, displaying a list of blog posts, allowing users to search and sort posts, and enabling adding and deleting posts.


