import React, { useState, useEffect } from "react";
import {
  Typography,
  Card,
  CardContent,
  Container,
  Grid as Grid2, // If you prefer the unstable Grid2 import, change to: import Grid2 from '@mui/material/Unstable_Grid2';
} from "@mui/material";
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
  FaChartBar,
  FaChartLine,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiPostman,
  SiFirebase,
  SiTableau,
  SiPython,
  SiPandas,
  SiNumpy,
  SiMysql,
} from "react-icons/si";
import { motion } from "framer-motion";
import "@fontsource/outfit";
import "@fontsource/montserrat";
import "./styles.css";

const devSkillIcons = [
  { Icon: SiMongodb, color: "#4DB33D", name: "MongoDB" },
  { Icon: SiExpress, color: "#000000", name: "Express.js" },
  { Icon: FaReact, color: "#61DBFB", name: "React" },
  { Icon: FaNodeJs, color: "#3C873A", name: "Node.js" },
  { Icon: FaCss3Alt, color: "#264de4", name: "CSS3" },
  { Icon: SiPostman, color: "#FF6C37", name: "Postman" },
  { Icon: SiFirebase, color: "#FFCA28", name: "Firebase" },
];

const analyticsSkillIcons = [
  { Icon: FaChartBar, color: "#F2C811", name: "Power BI" },
  { Icon: SiTableau, color: "#E97627", name: "Tableau" },
  { Icon: SiPython, color: "#3776AB", name: "Python" },
  { Icon: SiPandas, color: "#150458", name: "Pandas" },
  { Icon: SiNumpy, color: "#013243", name: "NumPy" },
  { Icon: FaChartLine, color: "#F7931E", name: "Matplotlib" },
  { Icon: SiMysql, color: "#00758F", name: "MySQL" },
];

// Enable smooth scrolling safely (guard for SSR)
if (typeof document !== "undefined") {
  document.documentElement.style.scrollBehavior = "smooth";
}

const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(
    typeof window !== "undefined" && window.location?.hash
      ? window.location.hash
      : "#about"
  );

  useEffect(() => {
    const onHashChange = () => {
      setActiveHash(window.location.hash || "#about");
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

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
      // image: "https://via.placeholder.com/1200x600?text=Credit+Score+System", // replace with your image
      description: (
        <>
          A web platform developed using{" "}
          <span style={{ fontSize: "23px", color: "#60a5fa" }}>React</span> that
          allows students and parents to track academic & non-academic
          performance. Credits are awarded for punctuality, task completion and
          redeemed for rewards to increase motivation.
        </>
      ),
      features: [
        "User Authentication & Role-Based Access",
        "Performance Tracking & Credit Allocation",
        "Reward Redemption System",
        "Real-Time Dashboard & Reports",
      ],
    },
    {
      name: "Task Buddy",
      // image: "https://via.placeholder.com/1200x600?text=Task+Buddy", // replace with your image
      description: (
        <>
          A responsive task management application using{" "}
          <span style={{ fontSize: "23px", color: "#60a5fa" }}>MERN</span> stack
          and Firebase auth. Create, edit, categorize, and organize tasks with
          drag-and-drop and board/list views.
        </>
      ),
      features: [
        "Google Authentication (Firebase)",
        "Task Creation & Categorisation",
        "Drag & Drop Kanban Board",
        "Search, Filter & Sort",
      ],
    },
    {
      name: "Movies Application",
      // image: "https://via.placeholder.com/1200x600?text=Movies+Application", // replace with your image
      description: (
        <>
          Movie discovery & management app built with{" "}
          <span style={{ fontSize: "28px", color: "#" }}>React & Node.js</span>,
          integrating external APIs for ratings and personalized
          recommendations.
        </>
      ),
      features: [
        "Movie Search & Discovery",
        "User Watchlists & Favorites",
        "Ratings & Reviews",
        "Personalized Recommendations",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-slate-700 via-blue-650 to-indigo-700 flex flex-col items-center">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-15" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        ></div>
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(16, 185, 129, 0.06) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      {/* Top-right hamburger */}
      <button
        aria-label="Open menu"
        onClick={() => setIsMenuOpen(true)}
        className="fixed right-5 top-5 z-20 grid h-11 w-11 place-items-center rounded-lg bg-white/20 text-white shadow-lg ring-1 ring-white/30 backdrop-blur transition hover:bg-white/30"
      >
        <FaBars />
      </button>

      {/* Overlay Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm"
          onClick={closeMenu}
        >
          <motion.nav
            initial={{ opacity: 0, x: 24, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="absolute right-5 top-5 w-72 rounded-2xl bg-white/95 p-5 shadow-2xl ring-1 ring-black/5 backdrop-blur"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-semibold tracking-wide text-gray-800">
                Quick Navigation
              </span>
              <button
                aria-label="Close menu"
                onClick={closeMenu}
                className="grid h-9 w-9 place-items-center rounded-md bg-gray-100 text-gray-700 transition hover:bg-gray-200"
              >
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
                        isActive
                          ? "bg-violet-50 text-violet-700 ring-violet-200"
                          : "text-gray-700"
                      }`}
                    >
                      <span
                        className={`grid h-8 w-8 place-items-center rounded-lg ${
                          isActive ? "bg-violet-100 text-violet-700" : "bg-gray-100 text-gray-600"
                        }`}
                      >
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
        <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 shadow-lg ring-1 ring-white/30 backdrop-blur">
          <span className="text-blue-300">⚙</span>
          <span className="text-md font-medium text-white montserrat">
            Full Stack Ninja | Business Analyst Graduate
          </span>
        </div>

        <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Vinay Mansabdar
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-gray-200 montserrat">
          Transforming{" "}
          <span className="text-blue-400 font-semibold">ideas into seamless digital experiences</span>{" "}
          through cutting-edge web technologies and analytics
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:vmansabdar77@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5 hover:shadow-blue-600/50"
          >
            <FaEnvelope /> Get In Touch
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-white/20 px-6 py-3 font-semibold text-white shadow-lg ring-1 ring-white/30 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/30"
          >
            <FaLaptop /> View Projects
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6">
          <a
            href="https://github.com/VinayMansa?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="grid h-12 w-12 place-items-center rounded-full bg-white/20 text-white shadow-lg ring-1 ring-white/30 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/30"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/vinay-mansabdar-874b38226"
            target="_blank"
            rel="noreferrer"
            className="grid h-12 w-12 place-items-center rounded-full bg-white/20 text-blue-300 shadow-lg ring-1 ring-white/30 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/30"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="tel:+918884859483"
            className="grid h-12 w-12 place-items-center rounded-full bg-white/20 text-white shadow-lg ring-1 ring-white/30 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/30"
          >
            <FaPhone size={22} />
          </a>
        </div>

        {/* Mouse scroll indicator */}
        <div className="pointer-events-none absolute left-1/2 top-[calc(100%+10px)] -translate-x-1/2">
          <div className="mx-auto h-10 w-6 rounded-full border-2 border-blue-400/60 p-1">
            <div className="h-2 w-2 animate-bounce rounded-full bg-blue-400"></div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <div
        id="about"
        style={{ textAlign: "center", marginBottom: "120px", padding: "20px", marginTop: "10%", width: "100%" }}
      >
        <Typography
          variant="h4"
          style={{
            fontFamily: "Outfit",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "underline",
            margin: "0 auto",
            color: "white",
          }}
        >
          <FaUser style={{ marginRight: "0.5rem", color: "#60a5fa" }} /> About Me
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
            color: "#e5e7eb",
          }}
        >
          I'm a Business Analytics enthusiast and Software Developer with expertise in building
          scalable web applications using the{" "}
          <span style={{ fontWeight: 800, color: "#60a5fa" }}>MERN (MongoDB, Express.js, React, Node.js)</span>{" "}
          stack and applying data-driven methodologies for smarter decision-making. Skilled in{" "}
          <span style={{ fontWeight: 800, color: "#60a5fa" }}>Python, SQL, BI tools,</span> and modern web technologies.
        </Typography>
      </div>

      {/* Skills Section */}
      <div
        id="skills"
        style={{ textAlign: "center", marginBottom: "30px", padding: "20px", width: "100%" }}
      >
        <Typography
          variant="h4"
          style={{
            fontFamily: "Outfit",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "underline",
            margin: "0 auto",
            color: "white",
            marginBottom: "18px",
          }}
        >
          <FaLaptop style={{ marginRight: "0.5rem", color: "#60a5fa" }} /> Skills
        </Typography>

        <Container style={{ maxWidth: "1100px" }}>
          {/* Development Stack */}
          <Typography
            variant="h5"
            style={{
              fontFamily: "Outfit",
              marginTop: "8px",
              marginBottom: "12px",
              color: "#e5e7eb",
              fontWeight: 600,
            }}
          >
            Development Stack
          </Typography>

          <Grid2 container spacing={4}>
            {devSkillIcons.map(({ Icon, color, name }, index) => (
              <Grid2 item xs={6} sm={4} md={3} key={`dev-${index}`}>
                <Card className="hover-card" style={{ backgroundColor: "rgba(255, 255, 255, 0.06)", borderRadius: "14px", minHeight: "120px", border: "1px solid rgba(255, 255, 255, 0.06)", backdropFilter: "blur(6px)" }}>
                  <CardContent style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "8px", fontSize: "2.4rem", padding: "1.5rem", borderRadius: "12px" }}>
                    <Icon style={{ color, filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.6))" }} size={36} />
                    <div style={{ color: "#d1d5db", marginTop: "8px", fontSize: "0.95rem" }}>{name}</div>
                  </CardContent>
                </Card>
              </Grid2>
            ))}
          </Grid2>

          {/* Business Analytics */}
          <Typography
            variant="h5"
            style={{
              fontFamily: "Outfit",
              marginTop: "32px",
              marginBottom: "12px",
              color: "#e5e7eb",
              fontWeight: 600,
            }}
          >
            Business Analytics
          </Typography>
          <Grid2 container spacing={4}>
            {analyticsSkillIcons.map(({ Icon, color, name }, index) => (
              <Grid2 item xs={6} sm={4} md={3} key={`ba-${index}`}>
                <Card className="hover-card" style={{ backgroundColor: "rgba(255, 255, 255, 0.06)", borderRadius: "14px", minHeight: "120px", border: "1px solid rgba(255, 255, 255, 0.06)", backdropFilter: "blur(6px)" }}>
                  <CardContent style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "8px", fontSize: "2.4rem", padding: "1.5rem", borderRadius: "12px" }}>
                    <Icon style={{ color, filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.6))" }} size={36} />
                    <div style={{ color: "#d1d5db", marginTop: "8px", fontSize: "0.95rem" }}>{name}</div>
                  </CardContent>
                </Card>
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </div>

      {/* Projects Section - centered cards with images and larger text */}
      <div
        id="projects"
        style={{ textAlign: "center", marginBottom: "50px", padding: "20px", width: "100%" }}
      >
        <Typography
          variant="h4"
          style={{
            fontFamily: "Outfit",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "underline",
            margin: "0 auto 30px",
          }}
        >
          <FaLaptop style={{ marginRight: "0.5rem", color: "#60a5fa" }} />
          Projects
        </Typography>

        <Container style={{ maxWidth: "1100px" }}>
          <div className="flex flex-col items-center gap-10">
            {projects.map((project, index) => (
              <motion.div
                whileHover={{ scale: 1.03 }}
                key={index}
                style={{ width: "100%", maxWidth: "900px" }}
              >
                <Card
                  className="shadow-lg"
                  style={{
                    padding: "20px",
                    borderRadius: "16px",
                    boxShadow:
                      "0 10px 30px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03)",
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {project.image && (
                    <img
                      src={project.image}
                      alt={`${project.name} screenshot`}
                      style={{
                        width: "100%",
                        height: "260px",
                        objectFit: "cover",
                        borderRadius: "12px",
                        marginBottom: "16px",
                      }}
                    />
                  )}

                  <CardContent>
                    <Typography
                      variant="h5"
                      style={{
                        color: "#e5e7eb",
                        marginBottom: "12px",
                        fontFamily: "Outfit",
                        fontWeight: 700,
                        fontSize: "1.45rem",
                      }}
                    >
                      {project.name}
                    </Typography>

                    <Typography
                      variant="body1"
                      style={{
                        color: "#e5e7eb",
                        lineHeight: "1.8",
                        fontFamily: "Outfit",
                        fontSize: "1.05rem",
                        marginBottom: "12px",
                        textAlign: "left",
                      }}
                    >
                      {project.description}
                    </Typography>

                    <Typography
                      variant="body2"
                      style={{
                        color: "#fbbf24",
                        fontWeight: 700,
                        fontFamily: "Outfit",
                        fontSize: "1rem",
                        marginBottom: "8px",
                        textAlign: "left",
                      }}
                    >
                      Key Features:
                    </Typography>

                    <ul
                      style={{
                        paddingLeft: "20px",
                        color: "#d1d5db",
                        fontFamily: "Outfit",
                        fontSize: "1rem",
                        lineHeight: "1.7",
                        textAlign: "left",
                      }}
                    >
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>

      {/* Achievements Section */}
      <div
        id="achievements"
        style={{ textAlign: "center", marginBottom: "50px", padding: "20px", width: "100%" }}
      >
        <Typography
          variant="h4"
          style={{
            fontFamily: "Outfit",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "underline",
            margin: "0 auto",
          }}
        >
          <FaTrophy style={{ marginRight: "0.5rem", color: "#fbbf24" }} />
          Achievements
        </Typography>

        <Container>
          <Card
            style={{
              marginTop: "20px",
              padding: "24px",
              borderRadius: "16px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              backdropFilter: "blur(8px)",
              maxWidth: "800px",
              margin: "20px auto 0",
            }}
          >
            <CardContent>
              <Typography
                style={{
                  fontFamily: "Outfit",
                  fontSize: "20px",
                  color: "#fbbf24",
                  fontWeight: 700,
                  textAlign: "center",
                  lineHeight: "1.6",
                }}
              >
                🏆 Best Innovation Award
              </Typography>

              <Typography
                style={{
                  marginTop: "12px",
                  fontFamily: "Outfit",
                  fontSize: "18px",
                  color: "#e5e7eb",
                  textAlign: "center",
                  lineHeight: "1.6",
                }}
              >
                Received Best Innovation Award from Karnataka State Council for Science and Technology for "Vision-based Parking Slot Detection"
                using Mask R-CNN for Engineering Final Project.
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </div>

      {/* Footer */}
      <footer className="w-full py-5 mt-auto flex justify-center items-center bg-transparent">
        <span className="text-gray-300 text-md flex items-center gap-2 font-mono">
          Made with <span className="text-red-400 text-lg">❤️</span> in <FaReact className="inline-block text-blue-400 ml-1" /> React
        </span>
      </footer>
    </div>
  );
};

export default Homepage;
