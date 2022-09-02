import * as React from 'react';
import { useState } from "react";
import ResponsiveAppBar from '../components/NavBar'

const Robots = () => {
  const [robot, setRobots] = useState([])
  const [newRobots, setNewRobots] = useState("")

  const handleChange = (event) => {
    setNewRobots(event.target.value)
  } 

  const updateRobots = () => {
    const newRobot = [...robot, newRobots];
    setRobots(newRobot)
  }
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <div> Hello from Robots</div>
      <input onChange={handleChange}></input>
      <button onClick={updateRobots}>add robots</button>

      <div>List of your robots</div>
      <div>
        {robot.map((val) => { 
          return <h3>{val}</h3>
        })}
      </div>
    </>
  );
};
export default Robots;
