import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import profileGenerator from "../img/team-profile.jpg";
import readMeGenerator from "../img/README.md Generator.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const backEnd = [
  {
    title: "Team Profile Generator",
    description:
      "This Node.js console application takes user input about a developer team and then creates an HTML document styled with Bootstrap to display the team roster.",
    technology: ["JavaScript"],
    code: "https://github.com/prismaticdevs/Team-Profile-Generator/",
    src: profileGenerator,
  },
  {
    title: "README Generator",
    description:
      "This Node.js console application takes user input about a user's GitHub repository and generates a README.md file based on the user's answers.",
    technology: [],
    code: "https://github.com/prismaticdevs/README-Generator",
    src: readMeGenerator,
  },
];

function SwipeableTextMobileStepper() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = backEnd.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.default",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: 400,
          flexGrow: 1,
        }}
      >
        <Typography sx={{ fontSize: "2rem", textAlign: "center" }}>
          Back End
        </Typography>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
          }}
        >
          <Typography sx={{ fontSize: "1.5rem" }}>
            {backEnd[activeStep].title}
          </Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          autoplay={false}
          enableMouseEvents
        >
          {backEnd.map((appItem, index) => (
            <Grid key={index} container>
              <Grid>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: 255,
                      display: "block",
                      maxWidth: 400,
                      overflow: "hidden",
                      width: "100%",
                    }}
                    src={appItem.src}
                    alt={appItem.title}
                  />
                ) : null}
              </Grid>
            </Grid>
          ))}
        </AutoPlaySwipeableViews>
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "center",
            background: "none",
          }}
        >
          <Button
            className="btn"
            style={{ background: "#131E5B", color: "white", marginLeft: "1em" }}
            target="_blank"
            href={backEnd[activeStep].code}
          >
            View Code
          </Button>
          <Button
            className="btn"
            style={{ background: "#006A4E", color: "white", marginLeft: "1em" }}
            target="_blank"
            href={backEnd[activeStep].app}
          >
            View App
          </Button>
          <Button
            className="btn"
            style={{ background: "#BC8F8F", color: "white", marginLeft: "1em" }}
            onClick={handleOpen}
          >
            Info
          </Button>
        </Grid>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
        {/* Crypto Cocktails Modal */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {backEnd[activeStep].title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {backEnd[activeStep].description}
            </Typography>
          </Box>
        </Modal>
      </Box>
    </section>
  );
}

export default SwipeableTextMobileStepper;
