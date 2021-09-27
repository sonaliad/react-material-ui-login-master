import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
// Components
import Item from '../Item/Item';
import Cart from '../Cart/Cart';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
// Styles
import { Wrapper, StyledButton } from './UserProfile.styles';
// Types

export type CartItemType = {
  Id: number;
  name: string;
  Description: string;
  price: number;
  photo: string;
  amount: number;
};
// const token = JSON.parse(localStorage.getItem('token'));
const getToken = () => {
  console.log("IN");
  return localStorage.getItem('token');
}

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch(`https://qo7vrra66k.execute-api.eu-west-1.amazonaws.com/choco/products?token=${getToken()}`)).json();

 
const UserProfile = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );
  console.log(data);

  // useEffect(() => {
  //   const token = localStorage.getItem('token')

  //   const getProducts = async (): Promise<CartItemType[]> =>
  //     await (await fetch(`https://qo7vrra66k.execute-api.eu-west-1.amazonaws.com/choco/products?token=${token}`)).json();
  //     getProducts().catch((error) => {
  //       console.log(error);
  //     });
  // }, [token] );
  
  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      // 1. Is the item already added in the cart?
      const isItemInCart = prev.find(item => item.Id === clickedItem.Id);

      if (isItemInCart) {
        return prev.map(item =>
          item.Id === clickedItem.Id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      // First time the item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev =>
      prev.reduce((ack, item) => {
        if (item.Id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  };

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong ...</div>;

  return (
    <Wrapper>
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.Id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default UserProfile;
