
import CartIcon from '../../assets/icons/cart.png';
import PayIcon from '../../assets/icons/pay.png';
import PinIcon from '../../assets/icons/pin.png';
import QrIcon from '../../assets/icons/qr.png';
import HomeIcon from '../../assets/icons/house.png';


import Cart from '../screens/Cart';
import Home from '../screens/Home';
import QR from '../screens/QR';
import Search from '../screens/Search';
import Wallet from '../screens/Wallet';

export const BottomIconData = [
  {
    id: 1,
    name: 'Home',
    icon: HomeIcon,
    url: 'Home',
    component: Home,
    cnt: 10,
  },
  {
    id: 2,
    name: 'Wallet',
    icon: PayIcon,
    url: 'Wallet',
    component: Wallet,
    cnt: 3,
  },
  {
    id: 3,
    name: 'QR',
    icon: QrIcon,
    url: 'QR',
    component: QR,
    // cnt: 1,
  },
  {
    id: 4,
    name: 'Search',
    icon: PinIcon,
    url: 'Serach',
    component: Search,
  },
  {
    id: 5,
    name: 'Cart',
    icon: CartIcon,
    url: 'Cart',
    component: Cart,
  }
];