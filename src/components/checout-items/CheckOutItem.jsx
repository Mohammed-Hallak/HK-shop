import { useContext } from "react";
import "./CheckOutItem.scss";
import { CartContext } from "../../contexts/Card";

export default function CheckOutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;

  const { addItemToCart, removeItemToCart, clearItemFromCart } =
    useContext(CartContext);

  const decreaseItemHandler = () => removeItemToCart(cartItem);
  const increaseItemHandler = () => addItemToCart(cartItem);
  const clearItemHandler = () => clearItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decreaseItemHandler}>&#10094;</div>

        <span className="value">{quantity}</span>

        <div className="arrow" onClick={increaseItemHandler}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </span>
    </div>
  );
}
