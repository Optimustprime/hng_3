import {
    HashRouter as Router, Route, Routes
} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Place";
import Footer from "./components/footer";
import React from "react";

function App() {
  return (
       <Router>
               <Routes>
                   <Route path ="" element={<Home/>} exact />
                   <Route path ="/place" element={<Contact/>} />
               </Routes>
           <Footer/>
       </Router>
  );
}


export default App;



