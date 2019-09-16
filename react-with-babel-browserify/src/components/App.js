import React from 'react';

class App extends React.Component {

  onClick() {
    alert('The button is clicked!');
  }

  render() {
    return (
      <div className="App">
        <h1>This is React App component</h1>
        <button onClick={this.onClick}>Test</button>
      </div>
    )
  }
}

export default App