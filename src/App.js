import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import FriendsOffered from "./Components/Friends/FriendsOffered";

function App() {
  return (
    <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/friendsoffered" element={<FriendsOffered/>}/>
    </Routes>
    
  </div>
  );
}

export default App;