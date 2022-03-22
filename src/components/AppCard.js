import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Container,
} from "@mui/material";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { blue, purple, cyan } from "@mui/material/colors";

const b = blue[800];
const p = purple[300];
const c = cyan[400];

const btnStyle = {
  info: {
    background: c,
    color: "white",
    marginLeft: 7,
  },
  primary: {
    background: b,
    color: "white",
  },
  secondary: {
    background: p,
    color: "white",
  },
};

const appImg = {
  width: "15rem",
  border: ".15em solid #131e5a",
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

export const AppCard = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <section>
      <Container>
        <Grid container direction="row" item>
          <Card sx={{ width: 300, mr: 3, mb: 3 }} elevation={5}>
            <CardContent>
              <Typography gutterBottom variant="h5">
                {props.title}
              </Typography>
              <img src={props.src} style={appImg} alt={props.title} />
            </CardContent>
            <CardActions>
              <Button
                href={props.code}
                style={btnStyle.primary}
                target="_blank"
              >
                View Code
              </Button>
              <Button
                href={props.app}
                target="_blank"
                style={btnStyle.secondary}
              >
                View App
              </Button>
              <Button onClick={handleOpen} style={btnStyle.info}>
                Info
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Container>
      {/* Crypto Cocktails Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.description}
          </Typography>
        </Box>
      </Modal>
    </section>
  );
};
