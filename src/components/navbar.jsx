import { Link } from "react-router-dom";

function Navbar () { 
    return (
        <div id="navbar">
            <Link to="/">Home</Link>
            <Link to="/blue">Blue</Link>
            <Link to="/red">Red</Link>
            <Link to="/back">Black</Link>
            <Link to="/green">Green</Link>
            <Link to="/yelloe">Yellow</Link>
            <Link to="/pink">Pink</Link>
      </div>
    );
}

export default Navbar;