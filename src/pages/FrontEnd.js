import { AppCard } from "../components/AppCard";
import { Grid, Container } from "@mui/material";
import crypto from "../img/crypto-cocktails.jpg";
import generator from "../img/generator.jpg";
import planner from "../img/planner.jpg";
import reaction from "../img/reaction-timer.jpg";
import weather from "../img/weather.jpg";
import ticTacToe from "../img/tic-tac-toe.jpg";

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

const FrontEnd = () => {
  return (
    <section>
      <Container sx={{ mt: 10 }}>
        <Grid container>
          {frontEnd.map((appItem, index) => (
            <AppCard
              key={index}
              title={appItem.title}
              description={appItem.description}
              technology={appItem.technology}
              code={appItem.code}
              app={appItem.app}
              src={appItem.src}
            ></AppCard>
          ))}
          ;
        </Grid>
      </Container>
    </section>
  );
};

export default FrontEnd;
