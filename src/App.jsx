import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tasks from "../src/pages/Tasks/Tasks";
import Task from "../src/pages/Task/Task";
import { Routes, Route } from 'react-router-dom';

import React from 'react'

const App = () => {
  return (
    <div>
    <div>
      <Navbar />
       <Hero title = "Welcome to Taskify"/>
       <Routes>
        <Route path = "/" element = {<Tasks />}/>
        <Route path = "/task/:id" element = {<Task  />}/>
        <Route path = "/task/new" element = {<Task  />}/>
       </Routes>
       
       {/* <Task /> */}

       </div>
    </div>
  )
}

export default App
