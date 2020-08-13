import React from 'react';
import './App.css';
import CommentFrom from './commentfrom';
import ShowComment from './showcomponent';
import Hello from './hello' ;
function App() {
  return (
    <div className="App">
      <Hello></Hello>
      <CommentFrom></CommentFrom>
      <ShowComment></ShowComment>
     
    </div>
  );
}

export default App;
