import { Grid, Typography, Button, Box } from "@mui/material";
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
      <Box id="top" className="app" sx={{ mt: 10 }}>
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
          <Box className="app" id="fe">
            <FrontEnd />
            <Button
              style={mobile ? { display: "block" } : { display: "none" }}
              onClick={() => (window.location.href = "#top")}
            >
              Back to Top
            </Button>
          </Box>
          <Box className="app" id="be">
            <BackEnd />
            <Button
              style={mobile ? { display: "block" } : { display: "none" }}
              onClick={() => (window.location.href = "#top")}
            >
              Back to Top
            </Button>
          </Box>
          <Box className="app" id="fs">
            <FullStack />
            <Button
              style={mobile ? { display: "block" } : { display: "none" }}
              onClick={() => (window.location.href = "#top")}
            >
              Back to Top
            </Button>
          </Box>
        </Grid>
      </Box>
    </section>
  );
};

export default CarouselComponent;
