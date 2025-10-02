import React, { useState } from "react";
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
  FaBars,
  FaTimes,
  FaTrophy,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiPostman,
  // SiPowerbi,
  SiTableau,
  SiPython,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiMysql,
} from "react-icons/si";
import { motion } from "framer-motion";
import "@fontsource/outfit";
import "@fontsource/montserrat";
import "./styles.css";

const devSkillIcons = [
  { Icon: SiMongodb, color: "#4DB33D" },
  { Icon: SiExpress, color: "#000000" },
  { Icon: FaReact, color: "#61DBFB" },
  { Icon: FaNodeJs, color: "#3C873A" },
  { Icon: FaCss3Alt, color: "#264de4" },
  { Icon: SiPostman, color: "#FF6C37" },
];

const analyticsSkillIcons = [
  // { Icon: SiPowerbi, color: "#F2C811" },
  { Icon: SiTableau, color: "#E97627" },
  { Icon: SiPython, color: "#3776AB" },
  { Icon: SiPandas, color: "#150458" },
  { Icon: SiNumpy, color: "#013243" },
  { Icon: SiScikitlearn, color: "#F7931E" },
  { Icon: SiMysql, color: "#00758F" },
];

// Enable smooth scrolling
document.documentElement.style.scrollBehavior = "smooth";

const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(typeof window !== "undefined" && window.location?.hash ? window.location.hash : "#about");
  const closeMenu = () => setIsMenuOpen(false);
  const navItems = [
    { label: "About", href: "#about", Icon: FaUser },
    { label: "Skills", href: "#skills", Icon: FaReact },
    { label: "Projects", href: "#projects", Icon: FaLaptop },
    { label: "Achievements", href: "#achievements", Icon: FaTrophy },
  ];
  const projects = [
    {
      name: "Credit Score Management System",
      description: (
        <>
          The Credit Score Management System is a web-based platform developed
          using <span style={{ fontSize: "18px", color: "black" }}>React</span>{" "}
          that allows both students and parents to track a student's academic
          and non-academic performance. The system assigns credits based on
          various parameters such as punctuality, task completion, and overall
          discipline. Students can redeem their accumulated credits for exciting
          rewards such as amusement park tickets, food coupons, and toys,
          fostering motivation and engagement in their daily activities.,
        </>
      ),
      features: [
        "User Authentication & Role-Based Access",
        "Performance Tracking & Credit Allocation",
        "Reward System",
        "Real-Time Dashboard & Reports",
      ],
    },
    {
      name: "Task Buddy",
      description: (
        <>
          A responsive task management application using{" "}
          <span style={{ fontSize: "18px", color: "black" }}> MERN </span>that
          empowers users to efficiently create, organize, and track their tasks.
          The application should feature user authentication via Firebase,
          allowing users to sign in with Google. Users should be able to create,
          edit, and delete tasks, categorize them (e.g., work, personal), and
          set due dates. Additionally, implement drag-and-drop functionality for
          task organization, sorting options based on due dates, and a
          board/list view to enhance user experience.`,
        </>
      ),
      features: [
        "User Authentication[Firebase Google Provider]",
        "Task Management",
        "Filter and Search Options",
        "Board/List View[Like Kanban]",
      ],
    },
  ];
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-[#F5F0FF] to-[#EDE7FF] flex flex-col items-center">
      {/* Top-right hamburger */}
      <button
        aria-label="Open menu"
        onClick={() => setIsMenuOpen(true)}
        className="fixed right-5 top-5 z-20 grid h-11 w-11 place-items-center rounded-lg bg-white/80 text-gray-800 shadow-sm ring-1 ring-black/5 backdrop-blur transition hover:bg-white"
      >
        <FaBars />
      </button>

      {/* Overlay Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm" onClick={closeMenu}>
          <motion.nav
            initial={{ opacity: 0, x: 24, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="absolute right-5 top-5 w-72 rounded-2xl bg-white/95 p-5 shadow-2xl ring-1 ring-black/5 backdrop-blur"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-semibold tracking-wide text-gray-800">Quick Navigation</span>
              <button aria-label="Close menu" onClick={closeMenu} className="grid h-9 w-9 place-items-center rounded-md bg-gray-100 text-gray-700 transition hover:bg-gray-200">
                <FaTimes />
              </button>
            </div>
            <ul className="space-y-2">
              {navItems.map(({ label, href, Icon }) => {
                const isActive = activeHash === href;
                return (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={() => {
                        setActiveHash(href);
                        closeMenu();
                      }}
                      className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ring-1 ring-transparent hover:bg-gray-50 hover:text-gray-900 ${
                        isActive ? "bg-violet-50 text-violet-700 ring-violet-200" : "text-gray-700"
                      }`}
                    >
                      <span className={`grid h-8 w-8 place-items-center rounded-lg ${
                        isActive ? "bg-violet-100 text-violet-700" : "bg-gray-100 text-gray-600"
                      }`}>
                        <Icon size={16} />
                      </span>
                      <span className="truncate">{label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        </div>
      )}
      {/* Hero */}
      <section className="relative z-10 mx-auto w-full max-w-5xl px-6 pt-24 pb-16 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 shadow-sm ring-1 ring-black/5 backdrop-blur">
          <span className="text-violet-600">⚙</span>
          <span className="text-sm font-medium text-gray-700">Full Stack Ninja | Business Analyst Graduate</span>
        </div>
        <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-7xl">
          Hi, I'm <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Vinay Mansabdar</span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-gray-600 font-montserrat">
          Transforming <span className="text-purple-600 font-semibold">ideas into seamless digital experiences</span> through cutting-edge web technologies and analytics
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:vmansabdar77@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-600/30 transition hover:-translate-y-0.5 hover:bg-purple-700"
          >
            <FaEnvelope /> Get In Touch
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-gray-800 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:bg-gray-50"
          >
            <FaLaptop /> View Projects
          </a>
        </div>
        <div className="mt-12 flex items-center justify-center gap-6">
          <a href="https://github.com/VinayMansa?tab=repositories" target="_blank" rel="noreferrer" className="grid h-12 w-12 place-items-center rounded-full bg-white text-gray-800 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:text-black">
            <FaGithub size={22} />
          </a>
          <a href="https://www.linkedin.com/in/vinay-mansabdar-874b38226" target="_blank" rel="noreferrer" className="grid h-12 w-12 place-items-center rounded-full bg-white text-sky-700 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5">
            <FaLinkedin size={22} />
          </a>
          <a href="tel:+918884859483" className="grid h-12 w-12 place-items-center rounded-full bg-white text-gray-800 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5">
            <FaPhone size={22} />
          </a>
        </div>

        {/* Mouse scroll indicator */}
        <div className="pointer-events-none absolute left-1/2 top-[calc(100%+10px)] -translate-x-1/2">
          <div className="mx-auto h-10 w-6 rounded-full border-2 border-purple-400/60 p-1">
            <div className="h-2 w-2 animate-bounce rounded-full bg-purple-600"></div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <motion.div
        id="about"
        style={{
          textAlign: "center",
          marginBottom: "120px",
          padding: "20px",
          marginTop: "5%",
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
            justifyContent: "center",
            textAlign: "center",
            textDecoration: "underline",
            margin: "0 auto",
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
            maxWidth: "900px",
            margin: "20px auto 0",
          }}
        >
          I’m a Business Analytics enthusiast and Software Developer with expertise in building
          scalable web applications using the <span style={{ fontWeight: 800, color: "#e74c3c" }}>MERN (MongoDB, Express.js, React, Node.js)</span> stack and applying
          data-driven methodologies for smarter decision-making. Skilled in <span style={{ fontWeight: 800, color: "#e74c3c" }}>Python, SQL, BI tools,</span>
          and modern web technologies, I focus on creating innovative, efficient, and impactful
          digital solutions.
        </Typography>
      </motion.div>

      {/* Skills Section */
      }
      <motion.div
        id="skills"
        style={{
          textAlign: "center",
          marginBottom: "30px",
          padding: "20px",
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
            justifyContent: "center",
            textAlign: "center",
            textDecoration: "underline",
            margin: "0 auto",
          }}
        >
          <FaLaptop style={{ marginRight: "0.5rem", textAlign: "center" }} />{" "}
          Skills
        </Typography>
        <Container>
          {/* Development Stack */}
          <Typography
            variant="h6"
            style={{
              fontFamily: "Outfit",
              marginTop: "24px",
              color: "#4b5563",
            }}
          >
            Development Stack
          </Typography>
          <Grid2 container spacing={4} style={{ marginTop: "8px" }}>
            {devSkillIcons.map(({ Icon, color }, index) => (
              <Grid2 item xs={6} sm={4} md={3} key={`dev-${index}`}>
                <Card
                  className="hover-card"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                    borderRadius: "16px",
                  }}
                >
                  <CardContent
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "2.25rem",
                      padding: "1.25rem",
                    }}
                  >
                    <Icon style={{ color }} />
                  </CardContent>
                </Card>
              </Grid2>
            ))}
          </Grid2>

          {/* Business Analytics */}
          <Typography
            variant="h6"
            style={{
              fontFamily: "Outfit",
              marginTop: "28px",
              color: "#4b5563",
            }}
          >
            Business Analytics
          </Typography>
          <Grid2 container spacing={4} style={{ marginTop: "8px" }}>
            {analyticsSkillIcons.map(({ Icon, color }, index) => (
              <Grid2 item xs={6} sm={4} md={3} key={`ba-${index}`}>
                <Card
                  className="hover-card"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                    borderRadius: "16px",
                  }}
                >
                  <CardContent
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "2.25rem",
                      padding: "1.25rem",
                    }}
                  >
                    <Icon style={{ color }} />
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
            {projects.map((project, index) => (
              <Grid2 item xs={12} sm={6} key={index}>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Card
                    className="shadow-lg"
                    style={{
                      padding: "20px",
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      marginBottom: "20px",
                      width: "65%",
                      height: "20rem",
                      marginLeft: "15%",
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h5"
                        style={{
                          color: "#1e3a8a", // Tailwind's text-blue-600 equivalent
                          marginBottom: "10px",
                          fontFamily: "Outfit",
                        }}
                      >
                        {project.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        style={{
                          color: "#4b5563", // Tailwind's text-gray-700 equivalent
                          lineHeight: "1.6",
                          fontFamily: "Outfit",
                        }}
                      >
                        {project.description}
                      </Typography>
                      <Typography
                        variant="body2"
                        style={{
                          color: "#4b5563",
                          marginTop: "10px",
                          fontWeight: "bold",
                          fontFamily: "Outfit",
                        }}
                      >
                        Key Features:
                      </Typography>
                      <ul
                        style={{
                          paddingLeft: "20px",
                          color: "#4b5563",
                          fontFamily: "Outfit",
                        }}
                      >
                        {project.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
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
            style={{
              marginTop: "20px",
              fontFamily: "Outfit",
              fontSize: "22px",
              color: "#1e3a8a",
            }}
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
