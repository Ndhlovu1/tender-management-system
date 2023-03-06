import Login from "./login/Login";
//import Dashboard from "./dashboard/Dashboard";
import Home from "./home/Home";
//import Topbar from "./topbar/Topbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
   <Router>
    {
      <Routes>
        <Route exact path="/" element={ <Login/> } />

        <Route path="/Dashboard" element= { <Home/> } />

      </Routes>

    }

    </Router>

  );
}

export default App;
