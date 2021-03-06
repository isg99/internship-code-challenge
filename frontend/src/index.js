import React from 'react';
import ReactDOM from 'react-dom';

import { quizzes } from './quizzes';
import './styles.css';

console.log('Here are the quizzes:', quizzes);

const App = () => {
  return (
    <div className="app">
      <h1>Hello, World!</h1>
      <p>Thanks so much for taking our frontend takehome assessment!</p>
      <p>
        See details in <code>./README.md</code> .
      </p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
