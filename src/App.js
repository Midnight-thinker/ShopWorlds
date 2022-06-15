import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Grocery from './components/Grocery';
import Butcher from './components/Butcher';
import grocery1 from './images/grocery1.jpg';
import butcher1 from './images/butcher1.jpg';
import chemist1 from './images/chemist1.jpg';
import baker1 from './images/baker1.jpg';
import chemist3 from './images/chemist3.jpg';
import bakery2 from './images/bakery2.jpg';
import grocery3 from './images/grocery3.jpg';
import butcher4 from './images/butcher4.jpg';
import bakery3 from './images/bakery3.jpg';
import chemist2 from './images/chemist2.jpg';
import butcher3 from './images/butcher3.jpg'
import grocery2 from './images/grocery2.jpg'
import Chemist from './components/Chemist';
import Baker from './components/Baker';
import Kolkata from './components/Kolkata';
import Nagpur from './components/Nagpur';
import Madras from './components/Madras';
import Chennai from './components/Chennai';
import Open from './components/Open';
import Closed from './components/Closed';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar />
    <div class="row  md-3 lg-6">
    <Routes>
    <Route exact path="/" element={ <Home /> } />
    <Route exact path="/grocery" element={  
        <div class="row  md-3 lg-6">
      <Grocery className="card1" picture={grocery1} heading="Incredible Grocery" category="Grocery" location="Kolkata" status="Open" />
      <Grocery picture={butcher1} heading="Awesome Meats!" category="Butcher" location="Chennai" status="Open" />
      <Grocery picture={chemist1} heading="Meds you need" category="Chemist" location="Madras" status="Closed" />
      <Grocery picture={baker1} heading="Bakeries" category="Bakery" location="Nagpur" status="Closed" />
      <Grocery picture={chemist3} heading="Dey's & Sons" category="Chemist" location="Nagpur" status="Closed" />
      <Grocery picture={grocery3} heading="Legumes" category="Grocery" location="Kolkata" status="Open" />
      <Grocery picture={bakery2} heading="Olivia's Breads" category="Bakery" location="Chennai" status="Closed" />
      <Grocery picture={butcher4} heading="Meats and Muttons" category="Butcher" location="Madras" status="Closed" />
      <Grocery picture={bakery3} heading="Bakery Store" category="Bakery" location="Nagpur" status="Closed" />
      <Grocery picture={chemist2} heading="Frank Ross" category="Chemist" location="Kolkata" status="Closed" />
      <Grocery picture={butcher3} heading="Meats" category="Butcher" location="Nagpur" status="Open" />
      <Grocery picture={grocery2} heading="Fresh vegies" category="Grocery" location="Madras" status="Open" />
      </div> } />

      <Route exact path="/butcher" element={  
        <div class="row  md-3 lg-6">
      <Butcher className="card1" picture={grocery1} heading="Incredible Grocery" category="Grocery" location="Kolkata" status="Open" />
      <Butcher picture={butcher1} heading="Awesome Meats!" category="Butcher" location="Chennai" status="Open" />
      <Butcher picture={chemist1} heading="Meds you need" category="Chemist" location="Madras" status="Closed" />
      <Butcher picture={baker1} heading="Bakeries" category="Bakery" location="Nagpur" status="Closed" />
      <Butcher picture={chemist3} heading="Dey's & Sons" category="Chemist" location="Nagpur" status="Closed" />
      <Butcher picture={grocery3} heading="Legumes" category="Grocery" location="Kolkata" status="Open" />
      <Butcher picture={bakery2} heading="Olivia's Breads" category="Bakery" location="Chennai" status="Closed" />
      <Butcher picture={butcher4} heading="Meats and Muttons" category="Butcher" location="Madras" status="Closed" />
      <Butcher picture={bakery3} heading="Bakery Store" category="Bakery" location="Nagpur" status="Closed" />
      <Butcher picture={chemist2} heading="Frank Ross" category="Chemist" location="Kolkata" status="Closed" />
      <Butcher picture={butcher3} heading="Meats" category="Butcher" location="Nagpur" status="Open" />
      <Butcher picture={grocery2} heading="Fresh vegies" category="Grocery" location="Madras" status="Open" />
      </div> } />

      <Route exact path="/chemist" element={  
        <div class="row  md-3 lg-6">
      <Chemist className="card1" picture={grocery1} heading="Incredible Grocery" category="Grocery" location="Kolkata" status="Open" />
      <Chemist picture={butcher1} heading="Awesome Meats!" category="Butcher" location="Chennai" status="Open" />
      <Chemist picture={chemist1} heading="Meds you need" category="Chemist" location="Madras" status="Closed" />
      <Chemist picture={baker1} heading="Bakeries" category="Bakery" location="Nagpur" status="Closed" />
      <Chemist picture={chemist3} heading="Dey's & Sons" category="Chemist" location="Nagpur" status="Closed" />
      <Chemist picture={grocery3} heading="Legumes" category="Grocery" location="Kolkata" status="Open" />
      <Chemist picture={bakery2} heading="Olivia's Breads" category="Bakery" location="Chennai" status="Closed" />
      <Chemist picture={butcher4} heading="Meats and Muttons" category="Butcher" location="Madras" status="Closed" />
      <Chemist picture={bakery3} heading="Bakery Store" category="Bakery" location="Nagpur" status="Closed" />
      <Chemist picture={chemist2} heading="Frank Ross" category="Chemist" location="Kolkata" status="Closed" />
      <Chemist picture={butcher3} heading="Meats" category="Butcher" location="Nagpur" status="Open" />
      <Chemist picture={grocery2} heading="Fresh vegies" category="Grocery" location="Madras" status="Open" />
      </div> } />

      <Route exact path="/bakery" element={  
        <div class="row  md-3 lg-6">
      <Baker className="card1" picture={grocery1} heading="Incredible Grocery" category="Grocery" location="Kolkata" status="Open" />
      <Baker picture={butcher1} heading="Awesome Meats!" category="Butcher" location="Chennai" status="Open" />
      <Baker picture={chemist1} heading="Meds you need" category="Chemist" location="Madras" status="Closed" />
      <Baker picture={baker1} heading="Bakeries" category="Bakery" location="Nagpur" status="Closed" />
      <Baker picture={chemist3} heading="Dey's & Sons" category="Chemist" location="Nagpur" status="Closed" />
      <Baker picture={grocery3} heading="Legumes" category="Grocery" location="Kolkata" status="Open" />
      <Baker picture={bakery2} heading="Olivia's Breads" category="Bakery" location="Chennai" status="Closed" />
      <Baker picture={butcher4} heading="Meats and Muttons" category="Butcher" location="Madras" status="Closed" />
      <Baker picture={bakery3} heading="Bakery Store" category="Bakery" location="Nagpur" status="Closed" />
      <Baker picture={chemist2} heading="Frank Ross" category="Chemist" location="Kolkata" status="Closed" />
      <Baker picture={butcher3} heading="Meats" category="Butcher" location="Nagpur" status="Open" />
      <Baker picture={grocery2} heading="Fresh vegies" category="Grocery" location="Madras" status="Open" />
      </div> } />

      <Route exact path="/nagpur" element={  
        <div class="row  md-3 lg-6">
      <Nagpur className="card1" picture={grocery1} heading="Incredible Grocery" category="Grocery" location="Kolkata" status="Open" />
      <Nagpur picture={butcher1} heading="Awesome Meats!" category="Butcher" location="Chennai" status="Open" />
      <Nagpur picture={chemist1} heading="Meds you need" category="Chemist" location="Madras" status="Closed" />
      <Nagpur picture={baker1} heading="Bakeries" category="Bakery" location="Nagpur" status="Closed" />
      <Nagpur picture={chemist3} heading="Dey's & Sons" category="Chemist" location="Nagpur" status="Closed" />
      <Nagpur picture={grocery3} heading="Legumes" category="Grocery" location="Kolkata" status="Open" />
      <Nagpur picture={bakery2} heading="Olivia's Breads" category="Bakery" location="Chennai" status="Closed" />
      <Nagpur picture={butcher4} heading="Meats and Muttons" category="Butcher" location="Madras" status="Closed" />
      <Nagpur picture={bakery3} heading="Bakery Store" category="Bakery" location="Nagpur" status="Closed" />
      <Nagpur picture={chemist2} heading="Frank Ross" category="Chemist" location="Kolkata" status="Closed" />
      <Nagpur picture={butcher3} heading="Meats" category="Butcher" location="Nagpur" status="Open" />
      <Nagpur picture={grocery2} heading="Fresh vegies" category="Grocery" location="Madras" status="Open" />
      </div> } />


      <Route exact path="/madras" element={  
        <div class="row  md-3 lg-6">
      <Madras className="card1" picture={grocery1} heading="Incredible Grocery" category="Grocery" location="Kolkata" status="Open" />
      <Madras picture={butcher1} heading="Awesome Meats!" category="Butcher" location="Chennai" status="Open" />
      <Madras picture={chemist1} heading="Meds you need" category="Chemist" location="Madras" status="Closed" />
      <Madras picture={baker1} heading="Bakeries" category="Bakery" location="Nagpur" status="Closed" />
      <Madras picture={chemist3} heading="Dey's & Sons" category="Chemist" location="Nagpur" status="Closed" />
      <Madras picture={grocery3} heading="Legumes" category="Grocery" location="Kolkata" status="Open" />
      <Madras picture={bakery2} heading="Olivia's Breads" category="Bakery" location="Chennai" status="Closed" />
      <Madras picture={butcher4} heading="Meats and Muttons" category="Butcher" location="Madras" status="Closed" />
      <Madras picture={bakery3} heading="Bakery Store" category="Bakery" location="Nagpur" status="Closed" />
      <Madras picture={chemist2} heading="Frank Ross" category="Chemist" location="Kolkata" status="Closed" />
      <Madras picture={butcher3} heading="Meats" category="Butcher" location="Nagpur" status="Open" />
      <Madras picture={grocery2} heading="Fresh vegies" category="Grocery" location="Madras" status="Open" />
      </div> } />

      <Route exact path="/chennai" element={  
        <div class="row  md-3 lg-6">
        <Chennai className="card1" picture={grocery1} heading="Incredible Grocery" category="Grocery" location="Kolkata" status="Open" />
      <Chennai picture={butcher1} heading="Awesome Meats!" category="Butcher" location="Chennai" status="Open" />
      <Chennai picture={chemist1} heading="Meds you need" category="Chemist" location="Madras" status="Closed" />
      <Chennai picture={baker1} heading="Bakeries" category="Bakery" location="Nagpur" status="Closed" />
      <Chennai picture={chemist3} heading="Dey's & Sons" category="Chemist" location="Nagpur" status="Closed" />
      <Chennai picture={grocery3} heading="Legumes" category="Grocery" location="Kolkata" status="Open" />
      <Chennai picture={bakery2} heading="Olivia's Breads" category="Bakery" location="Chennai" status="Closed" />
      <Chennai picture={butcher4} heading="Meats and Muttons" category="Butcher" location="Madras" status="Closed" />
      <Chennai picture={bakery3} heading="Bakery Store" category="Bakery" location="Nagpur" status="Closed" />
      <Chennai picture={chemist2} heading="Frank Ross" category="Chemist" location="Kolkata" status="Closed" />
      <Chennai picture={butcher3} heading="Meats" category="Butcher" location="Nagpur" status="Open" />
      <Chennai picture={grocery2} heading="Fresh vegies" category="Grocery" location="Madras" status="Open" />
      </div>
      } />

      <Route exact path="/kolkata" element={  
        <div class="row  md-3 lg-6">
      <Kolkata className="card1" picture={grocery1} heading="Incredible Grocery" category="Grocery" location="Kolkata" status="Open" />
      <Kolkata picture={butcher1} heading="Awesome Meats!" category="Butcher" location="Chennai" status="Open" />
      <Kolkata picture={chemist1} heading="Meds you need" category="Chemist" location="Madras" status="Closed" />
      <Kolkata picture={baker1} heading="Bakeries" category="Bakery" location="Nagpur" status="Closed" />
      <Kolkata picture={chemist3} heading="Dey's & Sons" category="Chemist" location="Nagpur" status="Closed" />
      <Kolkata picture={grocery3} heading="Legumes" category="Grocery" location="Kolkata" status="Open" />
      <Kolkata picture={bakery2} heading="Olivia's Breads" category="Bakery" location="Chennai" status="Closed" />
      <Kolkata picture={butcher4} heading="Meats and Muttons" category="Butcher" location="Madras" status="Closed" />
      <Kolkata picture={bakery3} heading="Bakery Store" category="Bakery" location="Nagpur" status="Closed" />
      <Kolkata picture={chemist2} heading="Frank Ross" category="Chemist" location="Kolkata" status="Closed" />
      <Kolkata picture={butcher3} heading="Meats" category="Butcher" location="Nagpur" status="Open" />
      <Kolkata picture={grocery2} heading="Fresh vegies" category="Grocery" location="Madras" status="Open" />
      </div> } />

      <Route exact path="/open" element={  
        <div class="row  md-3 lg-6">
      <Open className="card1" picture={grocery1} heading="Incredible Grocery" category="Grocery" location="Kolkata" status="Open" />
      <Open picture={butcher1} heading="Awesome Meats!" category="Butcher" location="Chennai" status="Open" />
      <Open picture={chemist1} heading="Meds you need" category="Chemist" location="Madras" status="Closed" />
      <Open picture={baker1} heading="Bakeries" category="Bakery" location="Nagpur" status="Closed" />
      <Open picture={chemist3} heading="Dey's & Sons" category="Chemist" location="Nagpur" status="Closed" />
      <Open picture={grocery3} heading="Legumes" category="Grocery" location="Kolkata" status="Open" />
      <Open picture={bakery2} heading="Olivia's Breads" category="Bakery" location="Chennai" status="Closed" />
      <Open picture={butcher4} heading="Meats and Muttons" category="Butcher" location="Madras" status="Closed" />
      <Open picture={bakery3} heading="Bakery Store" category="Bakery" location="Nagpur" status="Closed" />
      <Open picture={chemist2} heading="Frank Ross" category="Chemist" location="Kolkata" status="Closed" />
      <Open picture={butcher3} heading="Meats" category="Butcher" location="Nagpur" status="Open" />
      <Open picture={grocery2} heading="Fresh vegies" category="Grocery" location="Madras" status="Open" />
      </div> } />

      <Route exact path="/closed" element={  
        <div class="row  md-3 lg-6">
      <Closed className="card1" picture={grocery1} heading="Incredible Grocery" category="Grocery" location="Kolkata" status="Open" />
      <Closed picture={butcher1} heading="Awesome Meats!" category="Butcher" location="Chennai" status="Open" />
      <Closed picture={chemist1} heading="Meds you need" category="Chemist" location="Madras" status="Closed" />
      <Closed picture={baker1} heading="Bakeries" category="Bakery" location="Nagpur" status="Closed" />
      <Closed picture={chemist3} heading="Dey's & Sons" category="Chemist" location="Nagpur" status="Closed" />
      <Closed picture={grocery3} heading="Legumes" category="Grocery" location="Kolkata" status="Open" />
      <Closed picture={bakery2} heading="Olivia's Breads" category="Bakery" location="Chennai" status="Closed" />
      <Closed picture={butcher4} heading="Meats and Muttons" category="Butcher" location="Madras" status="Closed" />
      <Closed picture={bakery3} heading="Bakery Store" category="Bakery" location="Nagpur" status="Closed" />
      <Closed picture={chemist2} heading="Frank Ross" category="Chemist" location="Kolkata" status="Closed" />
      <Closed picture={butcher3} heading="Meats" category="Butcher" location="Nagpur" status="Open" />
      <Closed picture={grocery2} heading="Fresh vegies" category="Grocery" location="Madras" status="Open" />
      </div>
      } />
      {/* <Route exact path="/closed" element={   } /> */}
      </Routes>
      </div>
      </BrowserRouter>
    </>
    
  );
}

export default App;
