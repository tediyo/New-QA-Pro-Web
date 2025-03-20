"use client";

import { FC, useState, useEffect } from "react";
import Image from "next/image";
import "./styles.css"; // Import the CSS file

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
  // State for holding the fetched crypto news and loading state
  const [cryptoNews, setCryptoNews] = useState<any[]>([]); // Initialize as an empty array
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        const response = JSON.parse(this.responseText);
        console.log("API Response:", response); // Debugging the API response

        // Checking if response.data is available and an array
        if (response.data && Array.isArray(response.data)) {
          setCryptoNews(response.data); // Set data if it's valid
        } else {
          console.log("No data or invalid data structure.");
        }
        setIsLoading(false); // Set loading to false after data is fetched
      }
    });

    xhr.open("GET", "https://cryptocurrency-news2.p.rapidapi.com/v1/cryptodaily");
    xhr.setRequestHeader(
      "x-rapidapi-key",
      "ea04141eb6msh96831e3b21db6c7p1b95f2jsn91caf9f48c60"
    );
    xhr.setRequestHeader("x-rapidapi-host", "cryptocurrency-news2.p.rapidapi.com");

    xhr.send();
  }, []);

  return (
    <div className="developer-container">
      <h1 className="developer-title">Developer - John Doe</h1>
      <p className="developer-description">
        I am a full-stack developer with experience in React, Node.js, and Next.js.
        I have worked on various projects involving web development, system architecture,
        and performance optimization.
      </p>

      {/* Skills Section */}
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <Image
              src={skill.logo}
              alt={skill.name}
              className="skill-logo"
              width={50}
              height={50}
            />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>

      {/* Crypto News Section */}
      <div className="crypto-news-container">
        <h2>Latest Cryptocurrency News</h2>

        {isLoading ? (
          <p>Loading cryptocurrency news...</p> // Show loading message
        ) : (
          <ul>
            {Array.isArray(cryptoNews) && cryptoNews.length > 0 ? (
              cryptoNews.map((article, index) => (
                <li key={index}>
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    {article.title}
                  </a>
                  <p>{article.description}</p>
                  <Image
                    src={article.thumbnail}
                    alt={article.title}
                    width={150}
                    height={100}
                  />
                  <p><small>Published on: {new Date(article.createdAt).toLocaleString()}</small></p>
                </li>
              ))
            ) : (
              <p>No news available or invalid data.</p> // Handle the case when no news data is available
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DeveloperPage;
