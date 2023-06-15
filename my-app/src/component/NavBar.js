import { Link } from "react-router-dom";

let NavBar = () => {
  return (
    <div>
    <ul>
        <li><Link to ="/about">About</Link></li>
        <li><Link to="/"> Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {/* <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li> */}
    </ul>
    </div>
  );
    }
export default NavBar;
