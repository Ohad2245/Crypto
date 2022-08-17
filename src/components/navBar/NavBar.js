import "./navBar.css";
import {Link ,useMatch, useResolvedPath} from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
        <nav className="nav__container">
        <Link to="/" className="site-title">
          Home
        </Link>
        <ul className="ul__nav">
        <CustomLink to="/upCoins">UpCoins</CustomLink>
        <CustomLink to="/downCoins">DownCoins</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/register">Register</CustomLink>
        <CustomLink to="/login">Login</CustomLink>
        </ul>
      </nav>
    </div>
  );
};

function CustomLink({ to, children, ...props }) {
const resolvedPath = useResolvedPath(to);
const isActive = useMatch({path:resolvedPath.pathname,end:true});
  return (
    <li className={isActive  ? "active" : ""}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  );
}

export default NavBar;
