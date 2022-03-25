import { Grid, Container, Typography, Box } from "@mui/material";
import profile from "../img/profile-img.png";

const src = profile;
const alt = "Image Unavailable";

const About = () => {
  return (
    <Container sx={{ mt: 10, display: "flex", justifyContent: "center" }}>
      <Grid>
        <div className="item">
          <Box
            component="img"
            sx={{
              display: "block",
              maxWidth: 300,
              overflow: "hidden",
              width: "100%",
            }}
            src={src}
            alt={alt}
          />
          <Typography variant="h4">Name</Typography>
          <Typography variant="h3">Matthew Brignola</Typography>
        </div>
        <div className="item">
          <Typography variant="h4">Position</Typography>
          <Typography variant="h3">Full Stack Web Developer</Typography>
        </div>
        <div className="item">
          <Typography variant="h3">Colorado Springs, CO</Typography>
          <Typography variant="h5">Open to Relocation</Typography>
        </div>
      </Grid>
    </Container>
  );
};

export default About;
