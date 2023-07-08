// import "./CardItemStyles.jsx";
import { CartItemContainer, Image, ItemDetails } from "./CardItemStyles";

export default function CardItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <Image src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
}
