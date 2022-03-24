import { Grid, Container, Typography } from "@mui/material";

const About = () => {
  return (
    <Container sx={{ mt: 10 }}>
      <Grid>
        <div className="item">
          <Typography variant="h4">Name</Typography>
          <Typography variant="h3">Matthew Brignola</Typography>
          <img src={"../img/profile-img.png"} alt="Img Unavailable"></img>
        </div>
        <div className="item">
          <Typography variant="h4">Position</Typography>
          <Typography variant="h3">Full Stack Web Developer</Typography>
        </div>
        <div className="item">
          <Typography variant="h4">Location</Typography>
          <Typography variant="h3">
            Colorado Springs, CO{" "}
            <Typography variant="h5">Open to Relocation</Typography>
          </Typography>
        </div>
      </Grid>
    </Container>
  );
};

export default About;
