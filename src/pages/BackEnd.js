import { AppCard } from "../components/AppCard";
import { Grid, Container } from "@mui/material";
import profileGenerator from "../img/team-profile.jpg";
import readMeGenerator from "../img/README.md Generator.jpg";

const backEnd = {
  TeamProfile: {
    title: "Team Profile Generator",
    description:
      "This Node.js console application takes user input about a developer team and then creates an HTML document styled with Bootstrap to display the team roster.",
    technology: ["JavaScript"],
    code: "https://github.com/prismaticdevs/Team-Profile-Generator/",
    src: profileGenerator,
  },
  READMEGenerator: {
    title: "README Generator",
    description:
      "This Node.js console application takes user input about a user's GitHub repository and generates a README.md file based on the user's answers.",
    technology: [],
    code: "https://github.com/prismaticdevs/README-Generator",
    src: readMeGenerator,
  },
};

const BackEnd = () => {
  return (
    <section>
      <Container sx={{ mt: 10 }}>
        <Grid container>
          <AppCard
            title={backEnd.TeamProfile.title}
            description={backEnd.TeamProfile.description}
            technology={backEnd.TeamProfile.technology}
            code={backEnd.TeamProfile.code}
            app={backEnd.TeamProfile.app}
            src={backEnd.TeamProfile.src}
          ></AppCard>
          <AppCard
            title={backEnd.READMEGenerator.title}
            description={backEnd.READMEGenerator.description}
            technology={backEnd.READMEGenerator.technology}
            code={backEnd.READMEGenerator.code}
            app={backEnd.READMEGenerator.app}
            src={backEnd.READMEGenerator.src}
          ></AppCard>
        </Grid>
      </Container>
    </section>
  );
};

export default BackEnd;
