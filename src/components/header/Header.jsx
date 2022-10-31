import "./header.css";
import { AppBar, Container, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import UserSideBar from '../Authentication/UserSideBar';
import AuthModal from '../../components/Authentication/AutoModal';
import { useState,useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase-config";

function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  return (
    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar>
          <Link to="/" className="logo">
            Crypto 
          </Link>
          <div>
            <nav className="nav__container">
              <ul className="ul__nav">
                <Link to="/upCoins">Up Coins</Link>
                <Link to="/downCoins">Down Coins</Link>
              </ul>
            </nav>
          </div>
          {user ? <UserSideBar/> : <AuthModal /> }
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;