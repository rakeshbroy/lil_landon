import React from "react";
import "./App.css";
import Headers from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Headers />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
