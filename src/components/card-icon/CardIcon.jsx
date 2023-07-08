import React from "react";
import { ShoppingIco, CartIconContainer, ItemCount } from "./CardIconStyle";
import { useContext } from "react";
import { CartContext } from "../../contexts/Card";

export default function CardIcon() {
  let { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIco className={"shopping-icon"} />
      <ItemCount className="item-count">{cartCount} </ItemCount>
    </CartIconContainer>
  );
}
