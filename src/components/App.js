import React from "react";
import GifListContainer from "../containers/GifListContainer";
import NavBar from "./NavBar";

// the App component should render out the GifListContainer component

const App = () => {
  // submitHandler = () => {};

  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <GifListContainer submitHandler={this.submitHandler} />
    </div>
  );
};

export default App;
