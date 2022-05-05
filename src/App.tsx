import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import TodoPage from './pages/TodoPage/TodoPage';

function App() {
  return (
    <>
      <div>
        <h1>TDD with React</h1>
      </div>
      <Routes>
        <Route path="/" element={<TodoPage />}/>
      </Routes>
    </>
  );
}

export default App;
