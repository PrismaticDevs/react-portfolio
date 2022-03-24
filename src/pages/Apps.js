import { Grid, Container, Typography } from "@mui/material";
import FrontEnd from "../components/FrontEnd";
import BackEnd from "../components/BackEnd";
import FullStack from "../components/FullStack";

const CarouselComponent = () => {
  return (
    <section>
      <Container sx={{ mt: 10 }}>
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          Deployed Applications
        </Typography>
        <a href="#fe">Font End</a>
        <a href="#be">Back End</a>
        <a href="#fs">Full Stack</a>
        <Grid
          container
          sx={{
            // width: "100vw",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <div id="fe">
            <FrontEnd />
          </div>
          <div id="be">
            <BackEnd />
          </div>
          <div id="fs">
            <FullStack />
          </div>
        </Grid>
      </Container>
    </section>
  );
};

export default CarouselComponent;
