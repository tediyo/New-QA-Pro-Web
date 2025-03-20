import { FC } from "react";
import "./styles.css"; // Import the CSS file
import Image from "next/image";

// Skills array with names and corresponding logos
const skills = [
  { name: "Next.js", logo: "/logos/next.svg" },
  { name: "React", logo: "/logos/react.svg" },
  { name: "Java", logo: "/logos/java.svg" },
  { name: "JavaScript", logo: "/logos/javascript.svg" },
  { name: "Remix", logo: "/logos/remix.svg" },
  { name: "React Native", logo: "/logos/react-native.svg" },
];

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
            <Image src={skill.logo} alt={skill.name} className="skill-logo"  width={50}  // You can adjust this to fit your design
            height={50} />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeveloperPage;
