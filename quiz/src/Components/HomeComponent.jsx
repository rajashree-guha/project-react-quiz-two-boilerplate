import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <h3 className="homeText">Quiz App</h3>
        <button className="btn" onClick={this.props.onPlayClick}>
          Play
        </button>
      </div>
    );
  }
}

export default Home;
