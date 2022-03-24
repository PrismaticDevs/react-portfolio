import { Grid, Container, Typography, Button } from "@mui/material";
import FrontEnd from "../components/FrontEnd";
import BackEnd from "../components/BackEnd";
import FullStack from "../components/FullStack";
let mobile = false;
const mobileView = () => {
  if (window.innerWidth < 900) {
    mobile = true;
  }
};
mobileView();

const CarouselComponent = () => {
  return (
    <section>
      <Container id="top" className="app" sx={{ mt: 10 }}>
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          Deployed Applications
        </Typography>
        <Button
          style={mobile ? { display: "block" } : { display: "none" }}
          onClick={() => (window.location.href = "#fe")}
        >
          Font End
        </Button>
        <Button
          style={mobile ? { display: "block" } : { display: "none" }}
          onClick={() => (window.location.href = "#be")}
        >
          Back End
        </Button>
        <Button
          style={mobile ? { display: "block" } : { display: "none" }}
          onClick={() => (window.location.href = "#fs")}
        >
          FullStack
        </Button>
        <Grid
          container
          sx={{
            // width: "100vw",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <div className="app" id="fe">
            <FrontEnd />
            <Button
              style={mobile ? { display: "block" } : { display: "none" }}
              onClick={() => (window.location.href = "#top")}
            >
              Back to Top
            </Button>
          </div>
          <div className="app" id="be">
            <BackEnd />
            <Button
              style={mobile ? { display: "block" } : { display: "none" }}
              onClick={() => (window.location.href = "#top")}
            >
              Back to Top
            </Button>
          </div>
          <div className="app" id="fs">
            <FullStack />
            <Button
              style={mobile ? { display: "block" } : { display: "none" }}
              onClick={() => (window.location.href = "#top")}
            >
              Back to Top
            </Button>
          </div>
        </Grid>
      </Container>
    </section>
  );
};

export default CarouselComponent;
