import "../navBar/navBar.css";

import {
  AppBar,
  Container,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import {Link ,useMatch, useResolvedPath} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

function Header() {
  const classes = useStyles();

  const history = useNavigate();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              ocClick={() => history.push('/home')}
              variant="h6"
              className={classes.title}
            >
              Crypto App
            </Typography>
            <div>
                <nav className="nav__container">
                  <Link to="/">
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
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({path:resolvedPath.pathname,end:true});
    return (
      <li className={isActive  ? "active" : ""}>
        <Link to={to} {...props}>{children}</Link>
      </li>
    );
  }
export default Header;
