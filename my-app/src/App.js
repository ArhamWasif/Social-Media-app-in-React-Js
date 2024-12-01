import logo from "./logo.svg";
import "./App.css";
import Topbar from "./Topbar/Topbar";
import Sidebar from "./Sidebar/Sidebar";
import Feed from "./Feed/Feed";
import Post from "./Post/Post";
import Rightbar from "./Rightbar/Rightbar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="a">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="feed1">
          <Feed />
          <Post />
        </div>
        <div className="post1"></div>
        <div className="rightbar1">
          <Rightbar />
        </div>
      </div>
    </div>
  );
}

export default App;
