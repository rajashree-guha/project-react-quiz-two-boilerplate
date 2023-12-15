import React from 'react';
import './App.css';
import Home from './Components/HomeComponent';
import Quz from './Components/QuzComponent';
import Result from './Components/ResultComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentComponent: 'home',
    };
  }

  quizPage = () => {
    this.setState({ currentComponent: 'quiz' });
  };

  resultPage = () => {
    this.setState({ currentComponent: 'result' });
  };

  backToHome = () => {
    this.setState({ currentComponent: 'home' });
  };

  playAgain = () => {
    this.setState({ currentComponent: 'quiz' });
  };

  render() {
    return (
      <div>
        {this.state.currentComponent === 'home' && (
          <Home onPlayClick={this.quizPage} />
        )}
        {this.state.currentComponent === 'quiz' && (
          <Quz onNextClick={this.resultPage} />
        )}
        {this.state.currentComponent === 'result' && (
          <Result
            onBackToHomeBtn={this.backToHome}
            onPlayAgainBtn={this.playAgain}
          />
        )}
      </div>
    );
  }
}

export default App;
