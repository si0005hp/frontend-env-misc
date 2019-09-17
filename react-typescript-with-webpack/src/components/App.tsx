import * as React from "react";

export interface Props {
  content: string;
}

const App: React.FC<Props> = ({ content }) => (
  <div id="App">
    <h2>This is React/Typescript with webpack test</h2>
    <p>{content}</p>
  </div>
);

export default App;
