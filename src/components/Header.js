import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <header className="row flex-center">
            <p className="margin">Audius /</p>
            <Link to='/'>
                <button>Home</button>
            </Link>
            <Link to='/products'>
                <button>Products</button>
            </Link>
            <Link to='/whatsnew'>
                <button>What's New?</button>
            </Link>
            <Link to='/contact'>
                <button>Contact</button>
            </Link>
        </header>
    )
}

export default Header;