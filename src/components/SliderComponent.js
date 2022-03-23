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
import crypto from "../img/crypto-cocktails.jpg";
import generator from "../img/generator.jpg";
import planner from "../img/planner.jpg";
import reaction from "../img/reaction-timer.jpg";
import weather from "../img/weather.jpg";
import ticTacToe from "../img/tic-tac-toe.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

const frontEnd = [
  {
    title: "Crypto and Cocktails",
    description:
      "This application fetches current cryptocurrency prices and gives the user a random cocktail recipe. 3 APIs are used to fetch the data. The cryptocurrency price data is fetched from Coinbase.com's API. In order to display the icons for select coins we used the Coingecko API. Lastly we used the API from Cocktail DB to display the recipe for a random cocktail after the user searches for a cryptocurrency.",
    technology: ["JavaScript"],
    app: "https://prismaticdevs.github.io/crypto-cocktails/",
    code: "https://github.com/prismaticdevs/crypto-cocktails",
    src: crypto,
  },
  {
    title: "Day Planner",
    description:
      "This application allows the user to enter and save events ino a daily planner. The events you enter are saved onto your local computer and will remain in the application until you change or erase them. The app displays the current date and the time slots according to the current time. If a time slot already occurred it's gray, if it's in the fuure it's green, and if he time slot is the curren time it is pink",
    technology: [],
    app: "https://prismaticdevs.github.io/day-planner/",
    code: "https://github.com/prismaticdevs/day-planner/tree/master",
    src: planner,
  },
  {
    title: "Vue.js Reaction Timer",
    description:
      "This application sees how quickly a user can click a button once it appears. he app displays the speed at which the button was clicked as well as displaying a message based on the speed he button was clicked at.",
    technology: [],
    app: "https://prismatic-reaction-timer.netlify.app/",
    code: "https://github.com/PrismaticDevs/reaction-timer/tree/master",
    src: reaction,
  },
  {
    title: "Weather Dashboard",
    description:
      "This application fetches current and 5 day weather forecast data from the Open Weather API. Users can enter the city in any country they want to see the weather for. The data that is returned displays the curren weather along with a 5 day forecast. Icons are also displayed to represent the current or projected weather forecast.",
    technology: [],
    app: "https://prismaticdevs.github.io/weather_dashboard/",
    code: "https://github.com/PrismaticDevs/weather_dashboard",
    src: weather,
  },
  {
    title: "Vue.js Tic Tac Toe",
    description:
      "This application is allow the user to play tic tac toe keeping rack of X and Y's wins. There is also a button to reset the score back to 0.",
    technology: [],
    app: "https://primatic-tic-tac-toe.netlify.app/",
    code: "https://github.com/prismaticdevs/TicTacToe/tree/master",
    src: ticTacToe,
  },
  {
    title: "Password Generator",
    description: `This application allows a user to generate a random password. The user is first prompted if they want uppercase letters, numbers, or special characters. The user also must type in a numerical length. If the user fails to provide a numerical length, the process starts over. After the user responds to the prompts, the password is randomly generated and displayed on the screen. The user can then click the "Copy to Clipboard" button and the password will be copied.`,
    technology: [],
    app: "  https://prismaticdevs.github.io/password_generator/",
    code: "https://github.com/prismaticdevs/password_generator/tree/master",
    src: generator,
  },
];

function SwipeableTextMobileStepper() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

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
    bgcolor: "background.paper",
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
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            bgcolor: "background.default",
          }}
        >
          <Typography sx={{ fontSize: "1.5rem" }}>
            {frontEnd[activeStep].title}
          </Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          autoplay={false}
          enableMouseEvents
        >
          {frontEnd.map((appItem, index) => (
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
          }}
        >
          <Button target="_blank" href={frontEnd[activeStep].code}>
            View Code
          </Button>
          <Button target="_blank" href={frontEnd[activeStep].app}>
            View App
          </Button>
          <Button onClick={handleOpen}>Info</Button>
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
              {frontEnd[activeStep].title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {frontEnd[activeStep].description}
            </Typography>
          </Box>
        </Modal>
      </Box>
    </section>
  );
}

export default SwipeableTextMobileStepper;
