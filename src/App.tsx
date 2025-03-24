import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/navbar';
import Home from './Home/homepage';
import Marketplace from './function/buyItem';
import AddItemPage from './function/addItem';
import './App.css';

interface Item {
  id: number;
  images: string[];
  price: number;
  location: string;
  description: string;
}

function App() {
  const [items, setItems] = useState<Item[]>([]);

  const handleAddItem = (item: Item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sell" element={<AddItemPage onAdd={handleAddItem} />} />
          <Route path="/buy" element={<Marketplace items={items} />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
