import { Grid, Container } from "@mui/material";
import SliderComponent from "../components/SliderComponent";

const CarouselComponent = () => {
  return (
    <section>
      <Container sx={{ mt: 10 }}>
        <Grid>
          <SliderComponent />
        </Grid>
      </Container>
    </section>
  );
};

export default CarouselComponent;
