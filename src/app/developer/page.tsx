"use client";

import { FC, useState, useEffect } from "react";
import Image from "next/image";
import ParticlesBackground from "@/components/ParticlesBackground";
import "./styles.css"; // Import the CSS file

// Array containing skills and their logos
const skills = [
  { name: "Next.js", logo: "/logos/next.svg" },
  { name: "React", logo: "/logos/react.svg" },
  { name: "Java", logo: "/logos/java.svg" },
  { name: "JavaScript", logo: "/logos/javascript.svg" },
  { name: "Remix", logo: "/logos/remix.svg" },
  { name: "React Native", logo: "/logos/react-native.svg" },
];

// Interface defining the structure of the cryptocurrency news articles
interface CryptoNewsArticle {
  url: string;
  title: string;
  description: string;
  thumbnail: string;
  createdAt: string;
}

// Fetches cryptocurrency news from an external API
const fetchCryptoNews = async (): Promise<CryptoNewsArticle[]> => {
  const response = await fetch(
    "https://cryptocurrency-news2.p.rapidapi.com/v1/cryptodaily",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key":
          "ea04141eb6msh96831e3b21db6c7p1b95f2jsn91caf9f48c60",
        "x-rapidapi-host": "cryptocurrency-news2.p.rapidapi.com",
      },
    }
  );

  // If the response is not successful, throw an error
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  // Parse the response data
  const data = await response.json();

  // Check if the data structure is valid and return the news articles
  if (data.data && Array.isArray(data.data)) {
    return data.data;
  } else {
    throw new Error("Invalid data format from API.");
  }
};

const DeveloperPage: FC = () => {
  // State hooks to manage cryptocurrency news, loading state, and errors
  const [cryptoNews, setCryptoNews] = useState<CryptoNewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // useEffect to fetch the data when the component mounts
  useEffect(() => {
    const loadCryptoNews = async () => {
      try {
        // Call the fetchCryptoNews function and store the result in the state
        const news = await fetchCryptoNews();
        setCryptoNews(news);
      } catch (err: any) {
        // If an error occurs, set the error message in the state
        setError(err.message);
      } finally {
        // Set loading state to false once data fetching is completed
        setIsLoading(false);
      }
    };

    // Fetch cryptocurrency news
    loadCryptoNews();
  }, []);

  // Function to render the list of skills
  const renderSkills = () => (
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
  );

  // Function to render the cryptocurrency news
  const renderCryptoNews = () => {
    if (isLoading) {
      // Show loading message if data is still being fetched
      return <p>Loading cryptocurrency news...</p>;
    }

    if (error) {
      // Show error message if fetching fails
      return <p style={{ color: "red" }}>Error: {error}</p>;
    }

    if (cryptoNews.length === 0) {
      // Show a message if no news is available
      return <p>No news available.</p>;
    }

    // Render the list of cryptocurrency news articles
    return (
      <ul className="crypto-news-list">
        {cryptoNews.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
            <p>{article.description}</p>
            <img
              src={article.thumbnail}
              alt={article.title}
              width={150}
              height={100}
            />
            <p>
              <small>
                Published on: {new Date(article.createdAt).toLocaleString()}
              </small>
            </p>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="developer-container">
      <ParticlesBackground/>
      
      <h1 className="developer-title">Developer - John Doe</h1>
      <p className="developer-description">
        I am a full-stack developer with experience in React, Node.js, and
        Next.js. I have worked on various projects involving web development,
        system architecture, and performance optimization.
      </p>

      {/* Render the skills section */}
      {renderSkills()}

      <div className="crypto-news-container">
        <h2>Latest Cryptocurrency News</h2>
        {/* Render the cryptocurrency news */}
        {renderCryptoNews()}
      </div>
    </div>
  );
};

export default DeveloperPage;
