import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }
    return (
        <div className='header'>
            <Link to='/'>
                <img  className='header__logo'
                src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png" 
                alt='logo'/>
            </Link>            
            <div className='header__search'>
                <input 
                type='text'
                className='header__searchInput'>
                </input>
                <SearchIcon className='header__searchIcon'>
                </SearchIcon>
            </div>
            <div className='header__nav'>
                <Link to={!user && '/login'}>
                    <div className='header__option' onClick={handleAuthenticaton}>
                        <span className='header__optionUpper'>
                            {!user ? 'Guest' : user.email}
                        </span>
                        <span className='header__optionLower'>
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>
                <div className='header__option'>
                    <span className='header__optionUpper'>
                        Returns
                    </span>
                    <span className='header__optionLower'>
                        & Orders
                    </span>
                </div>
                <div className='header__option'>
                    <span className='header__optionUpper'>
                        Your
                    </span>
                    <span className='header__optionLower'>
                        Prime
                    </span>
                </div>
                <Link to='/checkout'>
                    <div className='header__optionBasket'>
                        <ShoppingBasketIcon/>
                        <span
                        className='header__optionLower header__basketCount'>{basket.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
