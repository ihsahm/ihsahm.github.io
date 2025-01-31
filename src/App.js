import React, { useState } from "react";
import "./App.css";

function App() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Ihsan Ahmed Mohammed</h1>
        <h2>Mobile App Developer | Flutter </h2>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/ihsan-ahmed-mo/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <img src="/images/logos/linkedin.png" alt="LinkedIn" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/ihsahm"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <img src="/images/logos/github.png" alt="GitHub" />
            <span>GitHub</span>
          </a>
        </div>
      </header>

      <section className="about">
        <h3>About Me</h3>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#4a5568" }}>
          Hi! I'm Ihsan, a passionate mobile app developer specializing in
          Flutter. I graduated with a Bachelor's degree in Computer Science from
          HiLCoE School of Computer Science and Technology. I enjoy building
          beautiful, high-performance mobile applications and helping you solve
          business oriented problems.
        </p>
      </section>

      <section className="skills">
        <h3>Skills</h3>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Mobile Development</h4>
            <ul>
              <li>
                <img
                  src="/images/logos/flutter.png"
                  alt="Flutter"
                  className="skill-logo"
                />
                Flutter
              </li>
              <li>
                <img
                  src="/images/logos/firebase.png"
                  alt="Firebase"
                  className="skill-logo"
                />
                Firebase
              </li>
              <li>
                <img
                  src="/images/logos/restapi.png"
                  alt="REST API"
                  className="skill-logo"
                />
                REST API
              </li>
              <li>
                <img
                  src="/images/logos/mongodb.png"
                  alt="MongoDB"
                  className="skill-logo"
                />
                MongoDB
              </li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Web Development</h4>
            <ul>
              <li>
                <img
                  src="/images/logos/react.png"
                  alt="React"
                  className="skill-logo"
                />
                React
              </li>
              <li>
                <img
                  src="/images/logos/html.png"
                  alt="HTML"
                  className="skill-logo"
                />
                HTML
              </li>
              <li>
                <img
                  src="/images/logos/css.png"
                  alt="CSS"
                  className="skill-logo"
                />
                CSS
              </li>
              <li>
                <img
                  src="/images/logos/tailwind.png"
                  alt="Tailwind"
                  className="skill-logo"
                />
                Tailwind CSS
              </li>
              <li>
                <img
                  src="/images/logos/netcore.png"
                  alt=".NET Core"
                  className="skill-logo"
                />
                .NET Core
              </li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Tools & Platforms</h4>
            <ul>
              <li>
                <img
                  src="/images/logos/linux.png"
                  alt="Linux"
                  className="skill-logo"
                />
                Linux OS
              </li>
              <li>
                <img
                  src="/images/logos/github.png"
                  alt="GitHub"
                  className="skill-logo"
                />
                GitHub
              </li>
              <li>
                <img
                  src="/images/logos/notion.png"
                  alt="Notion"
                  className="skill-logo"
                />
                Notion
              </li>
              <li>
                <img
                  src="/images/logos/jira.png"
                  alt="Notion"
                  className="skill-logo"
                />
                Jira
              </li>
              <li>
                <img
                  src="/images/logos/asana.png"
                  alt="Asana"
                  className="skill-logo"
                />
                Asana
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="contact">
        <h3>Contact</h3>
        <div className="contact-info">
          <p>Phone: +251 910 873 541</p>
          <p>
            Email: <a href="mailto:ihsahm11@gmail.com"> ihsahm11@gmail.com</a>
          </p>
          <p>Address: Addis Ababa, Ethiopia</p>
        </div>
      </section>

      <section className="education">
        <h3>Education</h3>
        <div className="education-item">
          <h4>2023 - Bachelor of Computer Science</h4>
          <p>HiLCoE School of Computer Science</p>
          <p>General Wingate Street, Addis Ababa, Ethiopia</p>
        </div>
        <div className="education-item">
          <h4>2018 - High School Diploma</h4>
          <p>South West Academy</p>
          <p>Nefassilk Lafto, Addis Ababa, Ethiopia</p>
        </div>
      </section>

      <section className="experience">
        <h3>Work Experience</h3>
        <div className="experience-items">
          <div className="experience-item">
            <div className="experience-date">2020 - 2021</div>
            <h4>Mobile Application Tester</h4>
            <div className="company">Prime Maven Engineering</div>
          </div>
          <div className="experience-item">
            <div className="experience-date">2021 - Present</div>
            <h4>Flutter Developer</h4>
            <div className="company">Freelance</div>
          </div>
          <div className="experience-item">
            <div className="experience-date">Sep 2023 - Mar 2024</div>
            <h4>Mobile App Developer</h4>
            <div className="company">JakTech Engineering and Trading</div>
          </div>
          <div className="experience-item">
            <div className="experience-date">Mar 2024 - Apr 2024</div>
            <h4>Flutter Developer</h4>
            <div className="company">Bhattacharjee Solution PVT LTD</div>
            <div className="location">India (Remote)</div>
          </div>
          <div className="experience-item">
            <div className="experience-date">May 2024 - Present</div>
            <h4>Flutter Developer</h4>
            <div className="company">Haddis Art</div>
          </div>
        </div>
      </section>

      <section className="languages">
        <h3>Languages</h3>
        <ul>
          <li>English</li>
          <li>Amharic</li>
          <li>Arabic</li>
        </ul>
      </section>

      <section className="projects">
        <h3>Project Showcase</h3>
        <div className="projects-grid">
          <div className="project-card">
            <div
              className="project-image"
              onClick={() => openLightbox("/images/yeabrak.jpg")}
            >
              <img src="/images/yeabrak.jpg" alt="Pregnancy App Screenshot" />
            </div>
            <h4>Yeabrak</h4>
            <p>
              Yeabrak is an app used to track your pregnancy journey with. You
              will find a variety of useful and accurate information from
              qualified experts to help expectant mothers.
            </p>
            {/* <a
              href="https://github.com/yourusername/ecommerce-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a> */}
          </div>
          <div className="project-card">
            <div
              className="project-image"
              onClick={() => openLightbox("/images/keyfinder.jpg")}
            >
              <img
                src="/images/keyfinder.jpg"
                alt="RealEstate App Screenshot"
              />
            </div>
            <h4>KeyFinder</h4>
            <p>
              Keyfinder is an app that connects you with trusted agents,
              brokers, and builders to find the perfect home or
              investment.Connect with agents, brokers, and builders in Ethiopia.
            </p>
            {/* <a
              href="https://play.google.com/store/apps/details?id=com.keyfinderethio.keyfinder"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download on Playstore
            </a> */}
          </div>
          <div className="project-card">
            <div
              className="project-image"
              onClick={() => openLightbox("/images/tender_app.png")}
            >
              <img src="/images/tender_app.png" alt="Tender App Screenshot" />
            </div>
            <h4>E-Chereta</h4>
            <p>
              E-Chereta enables users to access private and governmental tenders
              within the country through a subscription based model. They also
              can buy and download bid documents online.
            </p>
            {/* <a
              href="https://github.com/yourusername/task-manager"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a> */}
          </div>
          <div className="project-card">
            <div
              className="project-image"
              onClick={() => openLightbox("/images/poolmate.png")}
            >
              <img src="/images/poolmate.png" alt="Weather App Screenshot" />
            </div>
            <h4>Poolmate</h4>
            <p>
              PoolMate is a Car-pooling Android application that allows users to
              share a ride and costs. The app connects riders with drivers,
              facilitating a transportation service.
            </p>
            {/* <a
              href="https://github.com/yourusername/weather-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a> */}
          </div>
          <div className="project-card">
            <div
              className="project-image"
              onClick={() => openLightbox("/images/menuly.jpg")}
            >
              <img src="/images/menuly.jpg" alt="Weather App Screenshot" />
            </div>
            <h4>Menuly</h4>
            <p>
              A mobile application built using Flutter and Firebase technology
              is available to users who wish to explore and discover nearby
              restaurants along with their offerings.
            </p>
            {/* <a
              href="https://github.com/yourusername/weather-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a> */}
          </div>
          <div className="project-card">
            <div
              className="project-image"
              onClick={() => openLightbox("/images/teninete.jpg")}
            >
              <img src="/images/teninete.jpg" alt="Health App Screenshot" />
            </div>
            <h4>Teninete</h4>
            <p>
              Teninete is an app used to view nearby pharmacies and their
              medicine stock, plus hospitals and their speciality.It also
              facilitates patients to buy medicines and search for them.
            </p>
            {/* <a
              href="https://github.com/yourusername/weather-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a> */}
          </div>
          <div className="project-card">
            <div
              className="project-image"
              onClick={() => openLightbox("/images/gizze.jpg")}
            >
              <img src="/images/gizze.jpg" alt="Sand Delivery App Screenshot" />
            </div>
            <h4>Gizze</h4>
            <p>
              Gizze is a sand delivery app that connects construction management
              workers and owners that seek to buy sand, granite and gravel with
              respective sellers/drivers.
            </p>
            {/* <a
              href="https://github.com/yourusername/weather-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a> */}
          </div>
        </div>
      </section>

      {lightboxImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content">
            <img src={lightboxImage} alt="Full size project" />
          </div>
        </div>
      )}

      <footer>
        <p>&copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
