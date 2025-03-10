import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Home = () => {
 return (
 <>
  <div className= "Home-Page-Background">
 <div className= "HomeContainer">
 <div className= "HomeText">
<h1>Experience Home Furniture like never before!</h1>
<Link to = "/shopping">
<button className="Start">Start Now</button>
</Link>
</div>
 </div>
 </div>
 </>
 )
}

export default Home