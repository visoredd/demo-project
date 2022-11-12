import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import Content from "../Content/Content";
import {useNavigate} from "react-router-dom";
import FriendsOffered from "../Friends/FriendsOffered";
function Home() {
  const navigate=useNavigate();
  const friend=()=>
  {
     navigate("FriendsOffered");
  }
  
  return (
    <main className="main">
      <div>UI/UX &gt; Refer & Earn</div>
      <Dashboard />
      <Content />
      <div className="footer">
        <h4><a onClick={friend}>Friends Who Enrolled</a></h4>
        <h4>Terms & Conditions</h4>
      </div>
    </main>
  );
}

export default Home;