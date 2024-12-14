import React, { useContext } from "react";
import { toast } from "react-toastify";
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from "react-icons/io";
import { StoreContext } from "../../context/storeContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, foodList, addToCart, removeFromCart, getTotalCartAmount, clearCart } = useContext(StoreContext);

  const handleCheckout = () => {
    toast.success("Order Successful");
    clearCart();
  };

  const isCartEmpty = Object.keys(cartItems).length === 0;

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
          <p>Add</p>
        </div>
        <br />
        <hr />
        {foodList.map((item) => {
          if (cartItems[item.id_menu] > 0) {
            return (
              <div key={item.id_menu}>
                <div className="cart-items-title cart-items-item">
                  <img src={`http://localhost:5000/menu-image/${item.gambar}`} alt={item.nama_menu} />
                  <p>{item.nama_menu}</p>
                  <p>${item.harga}</p>
                  <p>{cartItems[item.id_menu]}</p>
                  <p>${item.harga * cartItems[item.id_menu]}</p>
                  <p
                    onClick={() => removeFromCart(item.id_menu)}
                    style={{ cursor: "pointer", color: "red" }}
                  >
                    <IoIosRemoveCircleOutline size={22} />
                  </p>
                  <p
                    onClick={() => addToCart(item.id_menu)}
                    style={{ cursor: "pointer", color: "green" }}
                  >
                    <IoIosAddCircleOutline size={22} />
                  </p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>$2</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button
            onClick={handleCheckout}
            disabled={isCartEmpty}
            style={{
              cursor: isCartEmpty ? "not-allowed" : "pointer",
              backgroundColor: isCartEmpty ? "#808080" : "rgb(151, 128, 87)",
            }}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
