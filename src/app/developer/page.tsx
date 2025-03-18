import { FC } from "react";
import "./styles.css"; // Import the CSS file

const skills = ["Next.js", "React", "Java", "JavaScript", "Remix", "React Native"];

const DeveloperPage: FC = () => {
  return (
    <div className="developer-container">
      <h1 className="developer-title">Developerrrrr - JJoohhnn Doeeeeeeeeeee</h1>
      <p className="developer-description">
        I am a full-stack developer with experience in React, Node.js, and Next.js.
        I have worked on various projects involving web development, system architecture,
        and performance optimization.
      </p>

      {/* Skills Section */}
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeveloperPage;
