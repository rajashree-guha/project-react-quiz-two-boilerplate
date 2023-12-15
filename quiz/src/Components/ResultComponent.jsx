import React from "react";

class Result extends React.Component {

  PlayAgainBtn = () => {
    if (this.props.onPlayAgainBtn) {
      this.props.onPlayAgainBtn();
    }
  };

  BackToHomeBtn = () => {
    if (this.props.onBackToHomeBtn) {
      this.props.onBackToHomeBtn();
    }
  };

  render() {
    return (
      <div className="ResultPage">
        <h2>Result</h2>
        <div className="Page">
          <h3>You need more practice!</h3>
          <h1>Your Score is 20%</h1>
          <div className="flex around">
            <div>
              <h4>Total number of questions</h4>
              <h4>Numbers of attempted questions</h4>
              <h4>Numbers of correct answers</h4>
              <h4>Number of wrong answers</h4>
            </div>
            <div>
              <p>15</p>
              <p>9</p>
              <p>3</p>
              <p>6</p>
            </div>
          </div>
        </div>
        <div className="flex btnClick">
          <button id="blueBorder" onClick={this.PlayAgainBtn}>
            Play Again
          </button>
          <button id="greenBorder" onClick={this.BackToHomeBtn}>
            Back to Home
          </button>
        </div>
      </div>
    );
  }
}

export default Result;
