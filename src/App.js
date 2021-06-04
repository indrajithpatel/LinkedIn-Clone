import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import LeftSideBar from "./components/LeftSideBar/LeftSideBar";
import CreatePost from "./components/MainContent/CreatePost/CreatePost";
import RightSideBar from "./components/RightSideBar/RightSideBar";


function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="app__container">
        <div className="app__leftsidebar">
          <LeftSideBar></LeftSideBar>
        </div>
        <main className="app__main">
          <CreatePost/>
        </main>
        <aside className = "app__widgets">
          <RightSideBar></RightSideBar>
        </aside>
      </div>
    </div>
  );
}

export default App;
