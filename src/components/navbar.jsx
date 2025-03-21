import { Link } from "react-router-dom";

function Navbar () { 
    return (
        <div id="navbar">
            <Link to="/">Home</Link>
            <Link to="/blue">Triceratops</Link>
            <Link to="/red">Tyrannosaurus</Link>
            <Link to="/black">Mastadon</Link>
            <Link to="/green">Dragon Ranger</Link>
            <Link to="/yellow">Saber Tooth Tiger</Link>
            <Link to="/pink">Pterodactly</Link>
      </div>
    );
}

export default Navbar;