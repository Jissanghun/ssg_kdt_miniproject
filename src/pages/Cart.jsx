import React, { useContext, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { CartCountState } from '../state/CartCountState';
import CartListCard from '../ui/cart/CartListCard';
import style from './Cart.module.scss';

function Cart() {

  const userId = 1;
  const [cartDatas, setCartDatas] = useState([]);
  const cartCount = useRecoilValue(CartCountState);
  // const [delCheck, setDelCheck] = useState(false);

  useEffect(() => {
    // console.log(delCheck);
    fetch(`http://localhost:3001/carts?userId=${userId}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setCartDatas(data)
    });

  },[userId, cartCount]);

  return ( 
    <div className={style.cartListWrap} style={{width: "100px"}}>
      {
        cartDatas && cartDatas.map( cartData => (
          <CartListCard 
            key={cartData.id}
            cartData={cartData}
            // delCheck={delCheck}
            // setDelCheck={setDelCheck}
          />
        ))
      }
    </div>
  );
}

export default Cart;