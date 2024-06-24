import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import{useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
function Navbar(){

    const[menu,setMenu] = useState("shop")
    const {totalCartItems} = useContext(ShopContext);

    return(
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{textDecoration:"none"}}>Shop
                </Link>{menu === 'shop'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Men")}}><Link to='/mens' style={{textDecoration:"none"}}>Men
                </Link>{menu === 'Men'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Women")}}><Link to='/womens' style={{textDecoration:"none"}}>Women
                </Link>{menu === 'Women'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Kids")}}><Link to='/kids' style={{textDecoration:"none"}}>Kids
                </Link>{menu === 'Kids'?<hr/>:<></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <Link to='/login' ><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className='nav-cart-count'>{totalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar;