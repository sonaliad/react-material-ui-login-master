import React from 'react';
import Button from '@material-ui/core/Button';
// Types
import { CartItemType } from '../Profile/UserProfile';
// Styles
import { Wrapper } from './Item.styles';

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.photo}  alt={item.name}/>
    <div>
      <h3>{item.name}</h3>
      <p>{item.Description}</p>
      <h3>${item.price}</h3>
    </div>
    <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
  </Wrapper>
);

export default Item;
