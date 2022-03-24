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
import techBlog from "../img/tech-blog.jpg";
import pms from "../img/project-management.png";
import notes from "../img/notes-app.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const fullStack = [
  {
    title: "Tech Blog",
    description:
      "This full stack Node.js and Express.js application is deployed with Heroku. This application allows one to create, edit, and delete blog posts by saving the posts to a MySQL database using the NPM module Sequelize.",
    technology: ["JavaScript"],
    app: "https://prismatic-tech-blog.herokuapp.com/",
    code: "https://github.com/PrismaticDevs/tech_blog",
    src: techBlog,
  },
  {
    title: "Project Management System",
    description:
      "This full stack Node.js and Express.js application is deployed with Heroku. This application allows one to create projects, add tasks to projects, delete tasks from projects, and delete projects. This app uses Bootstrap CSS and Handlebarsjs for the front end. This app uses a MySQL database and Sequelize to configure the back end Express.js API.",
    technology: ["JavaScript"],
    app: "https://prismatic-project-management.herokuapp.com/",
    code: "https://github.com/PrismaticDevs/proManagementSyst",
    src: pms,
  },
  {
    title: "Note Taker",
    description:
      "This full stack Node.js application is deployed with Heroku. This application allows one to create and delete notes by saving the notes to a JSON file that is written to the user's computer by this Node.js application.",
    technology: ["JavaScript"],
    app: "https://prismatic-note-taker.herokuapp.com/",
    code: "https://github.com/prismaticdevs/Note_Taker",
    src: notes,
  },
];

function SwipeableTextMobileStepper() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = fullStack.length;

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
          Fullstack
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
            {fullStack[activeStep].title}
          </Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          autoplay={false}
          enableMouseEvents
        >
          {fullStack.map((appItem, index) => (
            <Grid key={appItem.label} container>
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
            href={fullStack[activeStep].code}
          >
            View Code
          </Button>
          <Button
            className="btn"
            style={{ background: "#006A4E", color: "white", marginLeft: "1em" }}
            target="_blank"
            href={fullStack[activeStep].app}
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
              {fullStack[activeStep].title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {fullStack[activeStep].description}
            </Typography>
          </Box>
        </Modal>
      </Box>
    </section>
  );
}

export default SwipeableTextMobileStepper;
