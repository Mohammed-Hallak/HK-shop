import {
  CartDropDownContainer,
  EmptyMessage,
  CartItems,
} from "./CardDropDownStyles";
import Button from "../button/Button";
import CardItem from "../card-item/CardItem";
import { useContext } from "react";
import { CartContext } from "../../contexts/Card";
import { useNavigate } from "react-router";

export default function CardDropDown() {
  const { cartItems } = useContext(CartContext);
  const nav = useNavigate();

  const goToCheckoutHandler = () => {
    nav("/checkout");
  };

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CardItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your Card Is Empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}> GO TO CHECKOUT</Button>
    </CartDropDownContainer>
  );
}
