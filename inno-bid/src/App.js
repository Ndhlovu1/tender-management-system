import Login from "./login/Login";
import Home from "./home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TenderDisplay from "./tenderdisplay/TenderDisplay";
import Register from "./registration/Register";
import SingleTender0 from "./tenderSingleDisplay/TenderSinglePost";  {/* Insurance */}
import SingleTender1 from "./tenderSingleDisplay/TenderSinglePost1"; {/* Education  */}
import SingleTender2 from "./tenderSingleDisplay/TenderSinglePost2"; {/* Oil  */}
import SingleTender3 from "./tenderSingleDisplay/TenderSinglePost3"; {/* Fish  */}
import SingleTender4 from "./tenderSingleDisplay/TenderSinglePost4"; {/* Airports  */}
import SingleTender5 from "./tenderSingleDisplay/TenderSinglePost5"; {/* Catering  */}
import SingleTender6 from "./tenderSingleDisplay/TenderSinglePost6"; {/* Clothes  */}
import SingleTender7 from "./tenderSingleDisplay/TenderSinglePost7"; {/* Roads  */}


function App() {
  return (
   <Router>
    {
      <Routes>
        <Route exact path="/" element={ <Login/> } />

        <Route path="/Dashboard" element= { <Home/> } />

        <Route path="/Tenders" element={ <TenderDisplay/> } />

        <Route path="/Insurance-Tender" element={ <SingleTender0/> } /> ({/* Insurance */})

        <Route path="/Education-Tender" element= { <SingleTender1/> } /> {/* Education  */}

        <Route path="/Oil-Tender" element= { <SingleTender2/> } /> {/* Oil  */}

        <Route path="/Fish-Tender" element= { <SingleTender3/> } /> {/* Fish  */}

        <Route path="/Airports-Tender" element= { <SingleTender4/> } /> {/* Airports  */}

        <Route path="/Catering-Tender" element= { <SingleTender5/> } /> {/* Catering  */}

        <Route path="/Clothes-Tender" element= { <SingleTender6/> } /> {/* Clothes  */}

        <Route path="/Roads-Tender" element= { <SingleTender7/> } /> {/* Roads  */}

        <Route path="/Register" element={ <Register/> } />

      </Routes>

    }

    </Router>

  );
}

export default App;
