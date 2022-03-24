import { Grid, Container, Typography } from "@mui/material";
import FrontEnd from "../components/FrontEnd";
import BackEnd from "../components/BackEnd";
import FullStack from "../components/FullStack";

const CarouselComponent = () => {
  return (
    <section>
      <Container sx={{ mt: 10 }}>
        <Typography sx={{ fontSize: "2.5em", textAlign: "center" }}>
          Deployed Applications
        </Typography>
        <Grid
          container
          sx={{
            // width: "100vw",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <FrontEnd />
          <BackEnd />
          <FullStack />
        </Grid>
      </Container>
    </section>
  );
};

export default CarouselComponent;
