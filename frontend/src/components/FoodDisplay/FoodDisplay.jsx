import React, { useContext, useState, useEffect } from "react";
import './FoodDisplay.css';
import { StoreContext } from "../../context/storeContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { foodList } = useContext(StoreContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Food List:", foodList); 
    if (Array.isArray(foodList) && foodList.length > 0) {
      setLoading(false); 
    }
  }, [foodList]);

  if (loading) {
    return <div>Loading menu...</div>; 
  }

  return (
    <div className="food-display" id="food-display">
      <h1 className="food-display-big-text">Explore our menu</h1>
      <p className="food-display-text">
      Choose from a diverse menu with mouth-watering dishes. Our mission is to satisfy your food cravings and elevate your dining experience, one delicious dish at a time.
      </p>
      <div className="food-display-list">
        {foodList.length === 0 ? (
          <div>No menu items available.</div> 
        ) : (
          foodList.map((item) => (
            <FoodItem
              key={item.id_menu}
              id={item.id_menu}
              name={item.nama_menu}
              description={item.deskripsi}
              price={item.harga}
              image={`http://localhost:5000/menu-image/${item.gambar}`}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
