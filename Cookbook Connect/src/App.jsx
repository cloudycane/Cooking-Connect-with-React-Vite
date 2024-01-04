import './App.css';
import LoginButton from "./components/LoginButton";
import {useAuth0} from '@auth0/auth0-react';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {

  const { isAuthenticated } = useAuth0()
  return (
    <Router>
      <div>
      <Navbar />
        {isAuthenticated ? (
          <Routes>
            <Route path="/" element={<Home />} />

          </Routes>
        ) : (
          <LoginButton />
        )}
        <br></br>

        <h2 className='headtitle'>Have fun sharing your recipes and culinary stories online! </h2>
        <img src='../public/cooking1.png' width={"350"}></img>
        <br></br>
        <br></br>
        <p>Welcome to Cookbook Connect Chat, where the joy of cooking meets the art of conversation! Cookbook Connect Chat is an exciting extension of the Cookbook Connect platform, offering a dedicated space for culinary enthusiasts to engage in real-time discussions, share cooking tips, and connect with fellow food lovers from around the world.</p>
        <p>Cookbook Connect is a user-friendly web platform designed for culinary enthusiasts and foodies. This innovative application provides a space for users to share, discover, and discuss a diverse range of recipes. Whether you're an aspiring chef or someone looking for new culinary inspiration, Cookbook Connect offers a dynamic and engaging environment to connect with like-minded individuals.</p>
      
      </div>
      
    </Router>
  )
}

export default App;

