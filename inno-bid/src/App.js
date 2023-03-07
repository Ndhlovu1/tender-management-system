import Login from "./login/Login";
//import Dashboard from "./dashboard/Dashboard";
import Home from "./home/Home";
//import Topbar from "./topbar/Topbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Tenders from "./tenders/Tenders";
import TenderDisplay from "./tenderdisplay/TenderDisplay";


function App() {
  return (
   <Router>
    {
      <Routes>
        <Route exact path="/" element={ <Login/> } />

        <Route path="/Dashboard" element= { <Home/> } />

        <Route path="/Tenders" element={ <TenderDisplay/> } />

      </Routes>

    }

    </Router>

  );
}

export default App;
