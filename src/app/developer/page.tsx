"use client";
import { FC, useState, useEffect } from "react";
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
  const [cryptoData, setCryptoData] = useState<any>(null); // State to hold API response data

  useEffect(() => {
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
      if (this.readyState === this.DONE) {
        const response = JSON.parse(this.responseText);
        setCryptoData(response); // Update state with the API response
      }
    });

    xhr.open('GET', 'https://cryptocurrency-news2.p.rapidapi.com/v1/cryptodaily');
    xhr.setRequestHeader('x-rapidapi-key', 'ea04141eb6msh96831e3b21db6c7p1b95f2jsn91caf9f48c60');
    xhr.setRequestHeader('x-rapidapi-host', 'cryptocurrency-news2.p.rapidapi.com');

    xhr.send(data);
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

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
            <Image src={skill.logo} alt={skill.name} className="skill-logo" width={50} height={50} />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>

      {/* Crypto News Section (displayed if data is available) */}
      <div className="crypto-news-container">
        {cryptoData && cryptoData.data ? (
          <div>
            <h2>Cryptocurrency News</h2>
            <ul>
              {cryptoData.data.map((article: any, index: number) => (
                <li key={index}>
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    {article.title}
                  </a>
                  <p>{article.description}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Loading cryptocurrency news...</p>
        )}
      </div>
    </div>
  );
};

export default DeveloperPage;
