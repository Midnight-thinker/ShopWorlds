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

  function addShop(newShop) {
    setshops(prevshops => {
      return [...prevshops, newShop];
    });
  }

  function deleteShop(id) {
    setshops(prevshops => {
      return prevshops.filter((shopItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div class="row md-3 lg-6">
      <Cards className="card1" id="1" picture={grocery1} heading="Incredible Grocery" onDelete={deleteShop} category="Grocery" location="Kolkata" status="Open" />
      <Cards picture={butcher1} id="2" heading="Awesome Meats!" onDelete={deleteShop} category="Butcher" location="Chennai" status="Open" />
      <Cards picture={chemist1} id="3" heading="Meds you need" onDelete={deleteShop} category="Chemist" location="Madras" status="Closed" />
      <Cards picture={baker1} id="4" heading="Bakeries" onDelete={deleteShop} category="Bakery" location="Nagpur" status="Closed" />
      <Cards picture={chemist3} id="5" heading="Dey's & Sons" onDelete={deleteShop} category="Chemist" location="Nagpur" status="Closed" />
      <Cards picture={grocery3} id="6" heading="Legumes" onDelete={deleteShop} category="Grocery" location="Kolkata" status="Open" />
      <Cards picture={bakery2} id="7" heading="Olivia's Breads" onDelete={deleteShop} category="Bakery" location="Chennai" status="Closed" />
      <Cards picture={butcher4} id="8" heading="Meats and Muttons" onDelete={deleteShop} category="Butcher" location="Madras" status="Closed" />
      <Cards picture={bakery3} id="9" heading="Bakery Store" onDelete={deleteShop} category="Bakery" location="Nagpur" status="Closed" />
      <Cards picture={chemist2} id="10" heading="Frank Ross" onDelete={deleteShop} category="Chemist" location="Kolkata" status="Closed" />
      <Cards picture={butcher3} id="11" heading="Meats" onDelete={deleteShop} category="Butcher" location="Nagpur" status="Open" />
      <Cards picture={grocery2} id="12" heading="Fresh vegies" onDelete={deleteShop} category="Grocery" location="Madras" status="Open" />
     
      {shops.map((shopItem, index) => {
        return (
          <Cards
            key={index}
            id={index}
            name={shopItem.name}
            category={shopItem.category}
            location={shopItem.location}
            status={shopItem.status}
            onDelete={deleteShop}
          />
        );
      })}
      <i class="fa-solid fa-3x fa-circle-plus" onClick={() => {setModalOpen(true);}} style={{color: "black", marginBottom: "80px" }}></i>
      {modalOpen && <AddShop  onAdd={addShop} setOpenModal={setModalOpen} />}
    </div>
  )
}

export default Home
