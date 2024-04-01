import { useParams } from "react-router-dom";
import "./Task.jsx";
import React, { useEffect, useState } from 'react'

const Task = () => {
    const {id} = useParams();
    const [post, setPost] = useState();
    useEffect(()=> {
      if(id === 'new') return;  
    },[])
  return (
    <div className='task__wrapper'>
        <div className="container">
            <h1>Single Task</h1>
        </div>
    </div>
  )
}

export default Task
