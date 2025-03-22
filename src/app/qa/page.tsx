"use client";

import { FC, useEffect, useState } from "react";
import ParticlesBackground from "@/components/ParticlesBackground";
import "./styles.css"; // Import the CSS file

const QAPage: FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="page-container">
      <ParticlesBackground />
      <div className="content-wrapper">
        <h2 className="page-title">
          QA - John Doe (In Development)
        </h2>

        <p className="page-description">
          As a QA engineer, I focus on ensuring the quality of software
          products through manual and automated testing. I have experience
          working with testing frameworks like Jest, Mocha, and Cypress.
        </p>

        {isClient && (
          <div className="card-grid">
            <div className="qa-card">
              <h6 className="card-title">Skills</h6>
              <p className="card-text">
                Manual Testing, Automation, Test Planning, Bug Tracking
              </p>
            </div>

            <div className="qa-card">
              <h6 className="card-title">Tools</h6>
              <p className="card-text">
                Jest, Mocha, Cypress, Selenium, JIRA, Postman
              </p>
            </div>

            <div className="qa-card">
              <h6 className="card-title">Experience</h6>
              <p className="card-text">3+ years in web and mobile testing.</p>
            </div>

            <div className="qa-card">
              <h6 className="card-title">Certifications</h6>
              <p className="card-text">
                ISTQB Certified, Google PM Certification
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QAPage;
