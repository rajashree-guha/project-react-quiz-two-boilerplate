import React from "react";
import Array from "../../src/resources/quizQuestion.json";

class Quz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 1,
    };
  }

  nextClick=()=>{
      this.setState((prevState) => ({ i: prevState.i + 1 }));
  }
  prevClick=()=>{
      this.setState((prevState) => ({ i: prevState.i - 1 }));
  }

  handleNextClick = () => {
    let userConfirmed = window.confirm("Are you sure you want to quit?");

    if ((userConfirmed && this.props.onNextClick)) {
      this.props.onNextClick();
    }
  };

  
  
  render() {
    const {i} = this.state;

    if (i === 15) {
        this.props.onNextClick();
      }

    return (
      <div>
        <div className="QuizPage">
          <h2>Question</h2>
          <h5>{`${i} of 15`}</h5>
          <h3>{Array[i].question}</h3>
          <div className="grid">
            <button>{Array[i].optionA}</button>
            <button>{Array[i].optionB}</button>
            <button>{Array[i].optionC}</button>
            <button>{Array[i].optionD}</button>
          </div>
          <div className="flex align">
            <button id="blue" onClick={this.prevClick}>Previous</button>
            <button id="green" onClick={this.nextClick}>
              Next
            </button>
            <button id="red" onClick={this.handleNextClick}>
              Quit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Quz;
