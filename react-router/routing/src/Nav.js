
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white'
    };
    return (
        <nav>
            <h1>Logo</h1>
            <ul className="nav-links">
                {/*href will reload the page so use "Link"*/}
                <Link style={navStyle} to="/">
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to="/about">
                    <li>About</li>
                </Link>
                <Link style={navStyle} to="/shop">
                    <li>Shop</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
