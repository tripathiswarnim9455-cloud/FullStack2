import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="container">
      <h1>Redux Toolkit Social Media Manager</h1>

      <PostForm />

      <PostList />
    </div>
  );
}

export default App;
