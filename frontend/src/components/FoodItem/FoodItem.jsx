import React, { useContext, useState } from "react";
import "./FoodItem.css";
import rating_starts from "../../assets/rating_starts.png";
import add_icon_white from "../../assets/add_icon_white.png";
import remove_icon_red from "../../assets/remove_icon_red.png";
import add_icon_green from "../../assets/add_icon_green.png";
import { StoreContext } from "../../context/storeContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const [showModal, setShowModal] = useState(false);

  const handleInfoClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      setShowModal(false);
    }
  };

  const handleAddToCart = () => {
    addToCart(id);
    setShowModal(false); 
  };

  return (
    <>
      <div className="food-item">
        <div className="food-item-img-container">
          <img className="food-item-image" src={image} alt={name} />
          {!cartItems[id] ? (
            <img
              className="add"
              onClick={() => addToCart(id)}
              src={add_icon_white}
              alt="Add to cart"
            />
          ) : (
            <div className="food-item-counter">
              <img
                onClick={() => removeFromCart(id)}
                src={remove_icon_red}
                alt="Remove from cart"
              />
              <p>{cartItems[id]}</p>
              <img
                onClick={() => addToCart(id)}
                src={add_icon_green}
                alt="Add more to cart"
              />
            </div>
          )}
        </div>
        <div className="food-item-info" onClick={handleInfoClick}>
          <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={rating_starts} alt="Rating stars" />
          </div>
          <p className="food-item-desc">{description}</p>
          <p className="food-item-price">${price}</p>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal">
            <img className="modal-image" src={image} alt={name} />
            <p className="modal-name">{name}</p>
            <p className="modal-desc">{description}</p>

            <div className="modal-details">
             <p className="modal-price">${price}/<span>Portion</span></p>
            <img
              src={rating_starts}
              alt="Rating stars"
              className="modal-rating"
            /> 
            </div>

            <div className="modal-buttons">
              <button
                className="modal-close-button"
                onClick={handleCloseModal}
              >
                Close
              </button>
              <button
                className="modal-add-to-cart"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FoodItem;
