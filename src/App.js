import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Mycard from "./components/cards";
import Card2 from "./components/infoCard"
import Loc from "./components/location"
import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import img1 from './images/origin.jpg'
const About = () => {
  return (
    <>
      <Navbar />
     
      <div>
      {/* <section className="hero-section">
        <h1> Empowering Dreams , Shaping Futures</h1>
        <h2>Your Path to success Begins here with GuruKripa Career Institute</h2>
        
      </section> */}
      </div>
   
    <div>
      <section className="hero-section">
        <p>
        Gurukripa, established in 2007, has been a leading coaching institute for 15 years, focusing on providing exceptional coaching and top results in Engineering and Medical entrance exams. The institute is known for its academic system,
         stable faculties, study material, and superior technology-aided teaching methodology. It offers video lectures, digital learning, online mock tests, and comprehensive assessment solutions. Gurukripa believes in nurturing potential 
         through quality education, modern teaching methods, and a competitive environment. The institute provides systematic academic study material, personalized attention through mentoring programs, and activities like individual counseling
          and motivational seminars to help students manage exam pressure and time management. 
        </p>
          
      </section>
      <Card2 />
      </div>
      <div className="Images">
        <img src={img1}/>
      </div>
      <Mycard />
      <Loc />
      

 <div><Footer /></div>
 
    </>
  );
}
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<About />} />
    </Routes>
    </BrowserRouter>
  );
};
export default App;