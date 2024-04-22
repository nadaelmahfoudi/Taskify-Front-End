import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Tasks from "../src/pages/Tasks/Tasks";
import Task from "../src/pages/Task/Task";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Hero title="Welcome to Taskify" />
        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/task/:id" element={<Task />} />
          <Route path="/task/new" element={<Task />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
