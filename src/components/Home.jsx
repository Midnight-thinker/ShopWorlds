import React,{useState} from 'react'
import Cards from './Cards'
import grocery1 from '../images/grocery1.jpg';
import butcher1 from '../images/butcher1.jpg';
import chemist1 from '../images/chemist1.jpg';
import baker1 from '../images/baker1.jpg';
import chemist3 from '../images/chemist3.jpg';
import bakery2 from '../images/bakery2.jpg';
import grocery3 from '../images/grocery3.jpg';
import butcher4 from '../images/butcher4.jpg';
import bakery3 from '../images/bakery3.jpg';
import chemist2 from '../images/chemist2.jpg';
import butcher3 from '../images/butcher3.jpg'
import grocery2 from '../images/grocery2.jpg'
import { AddShop } from './AddShop';

function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [shops, setshops] = useState([]);

  function addNote(newShop) {
    setshops(prevshops => {
      return [...prevshops, newShop];
    });
  }

  return (
    <div class="row md-3 lg-6">
      <Cards className="card1" picture={grocery1} heading="Incredible Grocery" category="Grocery" location="Kolkata" status="Open" />
      <Cards picture={butcher1} heading="Awesome Meats!" category="Butcher" location="Chennai" status="Open" />
      <Cards picture={chemist1} heading="Meds you need" category="Chemist" location="Madras" status="Closed" />
      <Cards picture={baker1} heading="Bakeries" category="Bakery" location="Nagpur" status="Closed" />
      <Cards picture={chemist3} heading="Dey's & Sons" category="Chemist" location="Nagpur" status="Closed" />
      <Cards picture={grocery3} heading="Legumes" category="Grocery" location="Kolkata" status="Open" />
      <Cards picture={bakery2} heading="Olivia's Breads" category="Bakery" location="Chennai" status="Closed" />
      <Cards picture={butcher4} heading="Meats and Muttons" category="Butcher" location="Madras" status="Closed" />
      <Cards picture={bakery3} heading="Bakery Store" category="Bakery" location="Nagpur" status="Closed" />
      <Cards picture={chemist2} heading="Frank Ross" category="Chemist" location="Kolkata" status="Closed" />
      <Cards picture={butcher3} heading="Meats" category="Butcher" location="Nagpur" status="Open" />
      <Cards picture={grocery2} heading="Fresh vegies" category="Grocery" location="Madras" status="Open" />
      <i class="fa-solid fa-3x fa-circle-plus" onClick={() => {setModalOpen(true);}} style={{color: "black", marginLeft: "1400px", marginBottom: "80px" }}></i>
      {modalOpen && <AddShop setOpenModal={setModalOpen} />}
    </div>
  )
}

export default Home
