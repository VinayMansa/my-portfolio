import React from "react";
import { Typography, Card, CardContent, Grid2, Container } from "@mui/material";
import {
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaUser,
  FaLaptop,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiPostman } from "react-icons/si";
import { motion } from "framer-motion";
import "@fontsource/outfit";
import "@fontsource/montserrat";
import "./styles.css";

const iconStyles = [
  { Icon: SiMongodb, color: "#4DB33D" }, // MongoDB green
  { Icon: SiExpress, color: "#000000" }, // Express black
  { Icon: FaReact, color: "#61DBFB" }, // React blue
  { Icon: FaNodeJs, color: "#3C873A" }, // Node.js green
  { Icon: FaCss3Alt, color: "#264de4" }, // CSS blue
  { Icon: SiPostman, color: "#FF6C37" }, // Postman orange
];

// Enable smooth scrolling
document.documentElement.style.scrollBehavior = "smooth";

const Homepage = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #F0DFD8, #DBAB97)",
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "200px",
          height: "100vh",
          backgroundColor: "transparent", // Semi-transparent
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "20px",
          marginTop: "5%",
          marginLeft: "15px",
          zIndex: 1000,
        }}
      >
        <a
          href="#about"
          style={{
            marginBottom: "10px",
            textDecoration: "none",
            fontFamily: "Outfit",
            fontWeight: 500,
            fontSize: "32px",
            color: "grey",
          }}
        >
          About Me
        </a>
        <a
          href="#skills"
          style={{
            marginBottom: "10px",
            textDecoration: "none",
            fontFamily: "Outfit",
            fontWeight: 500,
            fontSize: "32px",
            color: "grey",
          }}
        >
          Skills
        </a>
        <a
          href="#projects"
          style={{
            marginBottom: "10px",
            textDecoration: "none",
            fontFamily: "Outfit",
            fontWeight: 500,
            fontSize: "32px",
            color: "grey",
          }}
        >
          Projects
        </a>
        <a
          href="#achievements"
          style={{
            marginBottom: "10px",
            textDecoration: "none",
            fontFamily: "Outfit",
            fontWeight: 500,
            fontSize: "32px",
            color: "grey",
          }}
        >
          Achievements
        </a>
      </div>

      {/* Profile Image */}
      <img
        src="/my-image.png"
        alt="Profile"
        style={{
          position: "absolute",
          top: "20px",
          right: "80px",
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          objectFit: "cover",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        }}
      />

      {/* Header Section */}
      <motion.div
        style={{
          textAlign: "center",
          paddingTop: "80px",
          marginBottom: "50px",
          marginLeft: "200px", // Adjust for sidebar
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          style={{ fontFamily: "Outfit", fontSize: "3rem", fontWeight: 500 }}
        >
          Vinay Mansabdar
        </Typography>
        <Typography variant="h5" style={{ fontFamily: "Montserrat" }}>
          FullStack Ninja 🥷
        </Typography>

        {/* Contact Links */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
            marginTop: "20px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://github.com/VinayMansa"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "black",
            }}
          >
            <FaGithub size={25} style={{ marginRight: "8px" }} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/vinay-mansabdar-874b38226"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "black",
            }}
          >
            <FaLinkedin
              size={25}
              style={{ marginRight: "8px", fontFamily: "Outfit" }}
            />
            LinkedIn
          </a>

          <a
            href="tel:+918884859483"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "black",
            }}
          >
            <FaPhone
              size={25}
              style={{ marginRight: "8px", fontFamily: "Outfit" }}
            />
            +91 88848 59483
          </a>

          <a
            href="mailto:vmansabdar77@gmail.com"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "black",
            }}
          >
            <FaEnvelope
              size={25}
              style={{ marginRight: "8px", fontFamily: "Outfit" }}
            />
            vmansabdar77@gmail.com
          </a>
        </div>
      </motion.div>

      {/* About Me Section */}
      <motion.div
        id="about"
        style={{
          textAlign: "center",
          marginBottom: "120px",
          padding: "20px",
          marginTop: "5%",
          marginLeft: "200px", // Adjust for sidebar
        }}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Typography
          variant="h4"
          style={{
            fontFamily: "Outfit",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            textDecoration: "underline", // Underline the text
            marginLeft: "33%",
          }}
        >
          <FaUser style={{ marginRight: "0.5rem", textAlign: "center" }} />{" "}
          {/* Add the icon */}
          About Me
        </Typography>
        <Typography
          style={{
            fontFamily: "Montserrat",
            marginTop: "15px",
            fontWeight: 500,
            fontSize: "24px",
            textAlign: "center",
            marginLeft: "30px",
          }}
        >
          I am a highly motivated <br />
          and detail-oriented Software Developer <br /> skilled in building
          dynamic web applications using <br />
          <span style={{ fontWeight: 800, color: "#e74c3c" }}>
            MERN (MongoDB, Express.js, React, Node.js){" "}
          </span>
          stack.
        </Typography>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        id="skills"
        style={{
          textAlign: "center",
          marginBottom: "30px",
          padding: "20px",
          marginLeft: "200px", // Adjust for sidebar
        }}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Typography
          variant="h4"
          style={{
            fontFamily: "Outfit",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            textDecoration: "underline", // Underline the text
            marginLeft: "43%",
          }}
        >
          <FaLaptop style={{ marginRight: "0.5rem", textAlign: "center" }} />{" "}
          Skills
        </Typography>
        <Container>
          <Grid2 container spacing={8}>
            {iconStyles.map(({ Icon, color }, index) => (
              <Grid2 item xs={12} sm={4} key={index}>
                {" "}
                {/* Ensure 3 icons per row */}
                <Card
                  className="hover-card"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    boxShadow: "none",
                    marginTop: "20px",
                  }}
                >
                  {" "}
                  {/* Transparent background */}
                  <CardContent
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "3rem",
                      padding: "1.5rem",
                    }}
                  >
                    <Icon style={{ color }} /> {/* Apply the specific color */}
                  </CardContent>
                </Card>
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        id="projects"
        style={{
          textAlign: "center",
          marginBottom: "50px",
          padding: "20px",
          width: "100%",
          marginLeft: "200px", // Adjust for sidebar
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Typography variant="h4" style={{ fontFamily: "Outfit" }}>
          Projects
        </Typography>
        <Container>
          <Grid2
            container
            spacing={3}
            justifyContent="center"
            style={{ marginTop: "20px" }}
          >
            {["Project 1", "Project 2"].map((project, index) => (
              <Grid2 item xs={12} sm={6} key={index}>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Card className="shadow-lg" style={{ padding: "20px" }}>
                    <CardContent>
                      <Typography variant="h5" className="text-blue-600">
                        {project}
                      </Typography>
                      <Typography variant="body2" className="text-gray-700">
                        Description of {project}.
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </motion.div>

      {/* Achievements Section */}
      <motion.div
        id="achievements"
        style={{
          textAlign: "center",
          marginBottom: "50px",
          padding: "20px",
          width: "100%",
          marginLeft: "200px", // Adjust for sidebar
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Typography variant="h4" style={{ fontFamily: "Outfit" }}>
          Achievements
        </Typography>
        <Container>
          <Typography
            variant="body1"
            style={{ marginTop: "20px", fontFamily: "Montserrat" }}
          >
            Receieved best innovation for project Vision based <br />
            parking slot detection based on Mask R-CNN for Engineering Final
            Project
          </Typography>
        </Container>
      </motion.div>
    </div>
  );
};

export default Homepage;
