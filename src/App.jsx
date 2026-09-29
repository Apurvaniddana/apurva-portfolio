import React, { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Briefcase,
  Code2,
  ExternalLink,
  GraduationCap,
  Mail,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "HelmSecure",
    category: "AI / Computer Vision",
    description:
      "A real-time Helmet Detection and Violation Monitoring System developed using computer vision techniques to support automated traffic rule enforcement.",
    tech: ["Python", "OpenCV", "YOLO", "Computer Vision"],
  },
  {
    number: "02",
    title: "AI-Based Public Infrastructure Complaint Intelligence",
    category: "AI / Full Stack",
    description:
      "An intelligent complaint-management platform designed to analyze civic complaints, identify similar complaints, classify issues, and support municipal officers.",
    tech: ["React", "FastAPI", "Python", "NLP", "SQLite"],
  },
  {
    number: "03",
    title: "Festival Cleanup Tracker",
    category: "Web Application",
    description:
      "A web-based system for tracking post-event cleanup activities, worker assignments, cleanup status, and before-and-after information.",
    tech: ["React", "JavaScript", "Chart.js", "Leaflet"],
  },
  {
    number: "04",
    title: "LIET E-Cell Website",
    category: "Web Development",
    description:
      "A modern responsive website concept for the Entrepreneurship Cell of Lendi Institute of Engineering and Technology.",
    tech: ["React", "Vite", "CSS", "JavaScript"],
  },
  {
    number: "05",
    title: "Kisan Mitra",
    category: "Web Application",
    description:
      "A web application designed to help farmers get immediate answers to agricultural and scheme-related doubts, with a focus on smooth performance in low-bandwidth rural areas.",
    tech: ["HTML", "CSS", "JavaScript", "Web Development"],
  },
];

const skills = [
  "C",
  "C++",
  "Python",
  "JavaScript",
  "React",
  "HTML5",
  "CSS3",
  "FastAPI",
  "OpenCV",
  "YOLO",
  "MySQL",
  "SQLite",
  "Git",
  "GitHub",
];

const certifications = [
  "Internet of Things Certification — NPTEL",
  "Communication Certification — Upskill by Cambridge",
  "Java Certification — HackerRank",
];

function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.className = dark ? "dark-theme" : "light-theme";
  }, [dark]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  const openResume = () => {
    window.open("/resume.pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <div className={`portfolio ${dark ? "dark" : "light"}`}>
      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="nav-container">
          <button
            className="logo"
            onClick={() => scrollToSection("home")}
            aria-label="Go to home"
          >
            <span className="logo-mark">A</span>

            <span className="logo-text">
              APURVA<span></span>
            </span>
          </button>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <button onClick={() => scrollToSection("home")}>Home</button>
            <button onClick={() => scrollToSection("about")}>About</button>
            <button onClick={() => scrollToSection("skills")}>Skills</button>
            <button onClick={() => scrollToSection("projects")}>
              Projects
            </button>
            <button onClick={() => scrollToSection("experience")}>
              Experience
            </button>
            <button onClick={() => scrollToSection("contact")}>
              Contact
            </button>
          </nav>

          <div className="nav-actions">
            <button
              className="theme-toggle"
              onClick={() => setDark(!dark)}
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button className="resume-nav-btn" onClick={openResume}>
              Resume
              <ArrowUpRight size={16} />
            </button>

            <button
              className="mobile-menu"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* ================= HERO ================= */}
        <section id="home" className="hero section">
          <div className="hero-grid"></div>

          <div className="hero-content">
            <div className="hero-left">
              <p className="eyebrow">
                <span className="eyebrow-dot"></span>
                COMPUTER SCIENCE ENGINEERING STUDENT
              </p>

              <h1>
                Hi, I'm <span>Apurva</span>
              </h1>

              <h2>I build digital experiences and intelligent solutions.</h2>

              <p className="hero-description">
                Computer Science Engineering student passionate about
                software development, artificial intelligence, web
                technologies, and solving real-world problems through
                technology.
              </p>

              <div className="hero-buttons">
                <button
                  className="primary-btn"
                  onClick={() => scrollToSection("projects")}
                >
                  View Projects
                  <ArrowDown size={18} />
                </button>

                <button className="secondary-btn" onClick={openResume}>
                  Download Resume
                  <ExternalLink size={17} />
                </button>
              </div>

              <div className="social-links">
                <a
                  href="https://github.com/Apurvaniddana"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  GH
                </a>

                <a
                  href="https://www.linkedin.com/in/niddana-apurva-8a360a32a"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  in
                </a>

                <a
                  href="mailto:apurvaniddana75@gmail.com"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            <div className="hero-right">
              <div className="code-card">
                <div className="code-header">
                  <div className="window-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <span className="code-file">apurvajs</span>
                </div>

                <div className="code-content">
                  <p>
                    <span className="code-number">01</span>
                    <span className="purple">const</span>{" "}
                    <span className="blue">developer</span> = {"{"}
                  </p>

                  <p>
                    <span className="code-number">02</span>
                    &nbsp;&nbsp;name:{" "}
                    <span className="orange">"Apurva"</span>,
                  </p>

                  <p>
                    <span className="code-number">03</span>
                    &nbsp;&nbsp;role:{" "}
                    <span className="orange">
                      "CSE Student"
                    </span>
                    ,
                  </p>

                  <p>
                    <span className="code-number">04</span>
                    &nbsp;&nbsp;focus: [
                  </p>

                  <p>
                    <span className="code-number">05</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="green">"Web Development"</span>,
                  </p>

                  <p>
                    <span className="code-number">06</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="green">"AI & ML"</span>,
                  </p>

                  <p>
                    <span className="code-number">07</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="green">"Problem Solving"</span>
                  </p>

                  <p>
                    <span className="code-number">08</span>
                    &nbsp;&nbsp;]
                  </p>

                  <p>
                    <span className="code-number">09</span>
                    {"}"};
                  </p>

                  <p className="code-cursor">
                    <span className="code-number">10</span>
                    <span className="cursor"></span>
                  </p>
                </div>
              </div>

              <div className="floating-chip chip-one">React</div>
              <div className="floating-chip chip-two">Python</div>
              <div className="floating-chip chip-three">AI</div>
              <div className="floating-chip chip-four">Git</div>
            </div>
          </div>

          <button
            className="scroll-indicator"
            onClick={() => scrollToSection("about")}
            aria-label="Scroll to about"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={17} />
          </button>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="section about-section">
          <div className="section-container">
            <div className="section-heading">
              <p className="section-label">01 — ABOUT</p>

              <h2>
                Turning ideas into
                <span> meaningful solutions.</span>
              </h2>
            </div>

            <div className="about-grid">
              <div className="about-text">
                <p className="large-text">
                  I'm Apurva Niddana, a Computer Science Engineering student
                  at Lendi Institute of Engineering and Technology.
                </p>

                <p>
                  I enjoy building practical software solutions that combine
                  clean user experiences with useful technology. My interests
                  include web development, artificial intelligence, computer
                  vision, and problem solving.
                </p>

                <p>
                  Through academic projects, hackathons, and student
                  initiatives, I continue to explore how technology can be
                  applied to real-world challenges.
                </p>
              </div>

              <div className="about-cards">
                <div className="about-card">
                  <Code2 size={25} />

                  <h3>Development</h3>

                  <p>
                    Building responsive and practical web applications with
                    modern technologies.
                  </p>
                </div>

                <div className="about-card">
                  <Briefcase size={25} />

                  <h3>Problem Solving</h3>

                  <p>
                    Breaking real-world problems into clear technical
                    solutions.
                  </p>
                </div>

                <div className="about-card">
                  <GraduationCap size={25} />

                  <h3>Continuous Learning</h3>

                  <p>
                    Exploring new technologies and improving through hands-on
                    projects.
                  </p>
                </div>
              </div>
            </div>

            {/* Resume information */}
            <div className="education-highlight">
              <div className="education-icon">
                <GraduationCap size={28} />
              </div>

              <div>
                <span>EDUCATION</span>

                <h3>
                  B.Tech in Computer Science and Engineering
                </h3>

                <p>
                  Lendi Institute of Engineering and Technology ·
                  Currently Pursuing · CGPA: 9.19
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section id="skills" className="section skills-section">
          <div className="section-container">
            <div className="section-heading">
              <p className="section-label">02 — SKILLS</p>

              <h2>
                Technologies I
                <span> work with.</span>
              </h2>
            </div>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div className="skill-card" key={skill}>
                  <span className="skill-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section id="projects" className="section projects-section">
          <div className="section-container">
            <div className="section-heading project-heading">
              <div>
                <p className="section-label">03 — PROJECTS</p>

                <h2>
                  Things I've
                  <span> built.</span>
                </h2>
              </div>

              <p className="heading-description">
                A selection of academic, personal, and collaborative projects
                focused on practical technology solutions.
              </p>
            </div>

            <div className="projects-list">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-number">
                    {project.number}
                  </div>

                  <div className="project-main">
                    <div className="project-top">
                      <span className="project-category">
                        {project.category}
                      </span>

                      <ArrowUpRight
                        className="project-arrow"
                        size={23}
                      />
                    </div>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="project-tech">
                      {project.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}
        <section id="experience" className="section experience-section">
          <div className="section-container">
            <div className="section-heading">
              <p className="section-label">04 — EXPERIENCE</p>

              <h2>
                Learning by
                <span> building.</span>
              </h2>
            </div>

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>

                <div className="timeline-content">
                  <div className="timeline-date">
                    2026 — PRESENT
                  </div>

                  <h3>Associate WebTech Lead</h3>

                  <h4>
                    Entrepreneurship Cell · Lendi Institute of
                    Engineering and Technology
                  </h4>

                  <p>
                    Contributing to web-related activities and digital
                    initiatives while developing practical experience in
                    modern web technologies.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>

                <div className="timeline-content">
                  <div className="timeline-date">
                    ACADEMIC PROJECTS
                  </div>

                  <h3>Computer Science Engineering Projects</h3>

                  <h4>
                    Lendi Institute of Engineering and Technology
                  </h4>

                  <p>
                    Working on software, artificial intelligence, computer
                    vision, and web development projects as part of academic
                    and collaborative learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CERTIFICATIONS ================= */}
        <section className="section certifications-section">
          <div className="section-container">
            <div className="section-heading">
              <p className="section-label">05 — CERTIFICATIONS</p>

              <h2>
                Learning beyond
                <span> the classroom.</span>
              </h2>
            </div>

            <div className="certifications-grid">
              {certifications.map((certificate, index) => (
                <div className="certificate-card" key={certificate}>
                  <span className="certificate-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p>{certificate}</p>

                  <ExternalLink size={17} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= HIGHLIGHTS ================= */}
        <section className="section highlights-section">
          <div className="section-container">
            <div className="section-heading">
              <p className="section-label">06 — HIGHLIGHTS</p>

              <h2>
                What I enjoy
                <span> working on.</span>
              </h2>
            </div>

            <div className="highlights-grid">
              <div className="highlight-card">
                <span>01</span>
                <h3>Hackathons</h3>
                <p>
                  Building practical solutions under real project
                  constraints.
                </p>
              </div>

              <div className="highlight-card">
                <span>02</span>
                <h3>AI Projects</h3>
                <p>
                  Exploring computer vision, NLP, and intelligent
                  applications.
                </p>
              </div>

              <div className="highlight-card">
                <span>03</span>
                <h3>Web Development</h3>
                <p>
                  Creating responsive interfaces and useful web
                  applications.
                </p>
              </div>

              <div className="highlight-card">
                <span>04</span>
                <h3>Student Leadership</h3>
                <p>
                  Contributing to technical and entrepreneurship-related
                  student initiatives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= EDUCATION ================= */}
        <section className="section education-section">
          <div className="section-container">
            <div className="section-heading">
              <p className="section-label">07 — EDUCATION</p>

              <h2>
                Academic
                <span> journey.</span>
              </h2>
            </div>

            <div className="education-list">
              <div className="education-item">
                <div className="education-year">
                  PRESENT
                </div>

                <div className="education-details">
                  <h3>
                    B.Tech in Computer Science and Engineering
                  </h3>

                  <p>
                    Lendi Institute of Engineering and Technology
                  </p>

                  <span>CGPA: 9.19</span>
                </div>
              </div>

              <div className="education-item">
                <div className="education-year">
                  2022
                </div>

                <div className="education-details">
                  <h3>Intermediate — MPC</h3>

                  <p>Sri Chaitanya Junior College</p>

                  <span>Percentage: 89.8%</span>
                </div>
              </div>

              <div className="education-item">
                <div className="education-year">
                  2022
                </div>

                <div className="education-details">
                  <h3>School Education</h3>

                  <p>Sri Chaitanya Techno School</p>

                  <span>Percentage: 87.5%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= RESUME CTA ================= */}
        <section className="resume-section">
          <div className="resume-container">
            <div>
              <p className="section-label">MY RESUME</p>

              <h2>
                Want to know
                <span> more?</span>
              </h2>

              <p>
                Explore my complete academic background, technical skills,
                certifications, and project experience.
              </p>
            </div>

            <button className="primary-btn large" onClick={openResume}>
              View Resume
              <ArrowUpRight size={19} />
            </button>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="section contact-section">
          <div className="section-container">
            <div className="contact-content">
              <div>
                <p className="section-label">08 — CONTACT</p>

                <h2>
                  Let's build something
                  <span> meaningful.</span>
                </h2>

                <p className="contact-description">
                  I'm always interested in learning, collaborating, and
                  working on interesting technology projects.
                </p>
              </div>

              <div className="contact-links">
                <a
                  href="mailto:apurvaniddana75@gmail.com"
                  className="contact-link"
                >
                  <div className="contact-icon">
                    <Mail size={21} />
                  </div>

                  <div>
                    <span>Email</span>
                    <strong>
                      apurvaniddana75@gmail.com
                    </strong>
                  </div>

                  <ArrowUpRight size={19} />
                </a>

                <a
                  href="https://github.com/Apurvaniddana"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  <div className="contact-icon">
                    <span className="contact-text-icon">GH</span>
                  </div>

                  <div>
                    <span>GitHub</span>
                    <strong>github.com/Apurvaniddana</strong>
                  </div>

                  <ArrowUpRight size={19} />
                </a>

                <a
                  href="https://www.linkedin.com/in/niddana-apurva-8a360a32a"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  <div className="contact-icon">
                    <span className="contact-text-icon">in</span>
                  </div>

                  <div>
                    <span>LinkedIn</span>
                    <strong>linkedin.com/in/niddana-apurva</strong>
                  </div>

                  <ArrowUpRight size={19} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <span className="logo-mark">A</span>

            <span>
              APURVA<span>.</span>
            </span>
          </div>

          <p>
            © {new Date().getFullYear()} Apurva Niddana. Built with React.
          </p>

          <button
            className="footer-top"
            onClick={() => scrollToSection("home")}
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={17} />
          </button>
        </div>
      </footer>

      {/* ================= BACK TO TOP ================= */}
      {showTop && (
        <button
          className="back-to-top"
          onClick={() => scrollToSection("home")}
          aria-label="Back to top"
        >
          <ArrowUp size={19} />
        </button>
      )}
    </div>
  );
}

export default App;