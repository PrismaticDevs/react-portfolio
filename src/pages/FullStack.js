import { AppCard } from "../components/AppCard";
import { Grid, Container } from "@mui/material";
import techBlog from "../img/tech-blog.jpg";
import pms from "../img/project-management.png";
import notes from "../img/notes-app.jpg";

const fullStack = {
  TechBlog: {
    title: "Tech Blog",
    description:
      "This full stack Node.js and Express.js application is deployed with Heroku. This application allows one to create, edit, and delete blog posts by saving the posts to a MySQL database using the NPM module Sequelize.",
    technology: ["JavaScript"],
    app: "https://prismatic-tech-blog.herokuapp.com/",
    code: "https://github.com/PrismaticDevs/tech_blog",
    src: techBlog,
  },
  PMS: {
    title: "Project Management System",
    description:
      "This full stack Node.js and Express.js application is deployed with Heroku. This application allows one to create projects, add tasks to projects, delete tasks from projects, and delete projects. This app uses Bootstrap CSS and Handlebarsjs for the front end. This app uses a MySQL database and Sequelize to configure the back end Express.js API.",
    technology: ["JavaScript"],
    app: "https://prismatic-project-management.herokuapp.com/",
    code: "https://github.com/PrismaticDevs/proManagementSyst",
    src: pms,
  },
  Note: {
    title: "Note Taker",
    description:
      "This full stack Node.js application is deployed with Heroku. This application allows one to create and delete notes by saving the notes to a JSON file that is written to the user's computer by this Node.js application.",
    technology: ["JavaScript"],
    app: "https://prismatic-note-taker.herokuapp.com/",
    code: "https://github.com/prismaticdevs/Note_Taker",
    src: notes,
  },
};

const FullStack = () => {
  return (
    <section>
      <Container sx={{ mt: 10 }}>
        <Grid container>
          <AppCard
            title={fullStack.TechBlog.title}
            description={fullStack.TechBlog.description}
            technology={fullStack.TechBlog.technology}
            code={fullStack.TechBlog.code}
            app={fullStack.TechBlog.app}
            src={fullStack.TechBlog.src}
          ></AppCard>
          <AppCard
            title={fullStack.PMS.title}
            description={fullStack.PMS.description}
            technology={fullStack.PMS.technology}
            code={fullStack.PMS.code}
            app={fullStack.PMS.app}
            src={fullStack.PMS.src}
          ></AppCard>
          <AppCard
            title={fullStack.Note.title}
            description={fullStack.Note.description}
            technology={fullStack.Note.technology}
            code={fullStack.Note.code}
            app={fullStack.Note.app}
            src={fullStack.Note.src}
          ></AppCard>
        </Grid>
      </Container>
    </section>
  );
};

export default FullStack;
