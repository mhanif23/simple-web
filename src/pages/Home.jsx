import * as React from 'react';
import { useParams } from "react-router-dom";
import ResponsiveAppBar from '../components/NavBar'


const Home = () => {
  const { name } = useParams(); 
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <div> Hello from Home to {name ? name : 'you'}</div>
    </>
  );
};
export default Home;
