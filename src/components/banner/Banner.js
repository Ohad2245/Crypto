import { Container, Typography } from "@material-ui/core";
import Carousel from "./Carousel";
import './banner.css';

// const useStyles = makeStyles((theme) => ({
 
//   bannerContent: {
//     height: 400,
//     display: "flex",
//     flexDirection: "column",
//     paddingTop: 25,
//     justifyContent: "space-around",
//   },
//   tagline: {
//     display: "flex",
//     height: "40%",
//     flexDirection: "column",
//     justifyContent: "center",
//     textAlign: "center",
//   },
//   carousel: {
//     height: "50%",
//     display: "flex",
//     alignItems: "center",
//   },
// }));

function Banner() {
  // const classes = useStyles();

  return (
    <div className="banner">
      <Container className="bannerContent">
        <div className="tagline">
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Times New Roman",
              color:'gold'
            }}
          >
            Crypto Hunter
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: 'rgb(0, 170, 255)',
              textTransform: "capitalize",
              fontFamily: "Montserrat",
              fontWeight: "bold",

            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
}

export default Banner;
