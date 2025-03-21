"use client";

import { FC, useState, useEffect } from "react";
import Image from "next/image";
import "./styles.css"; // Import the CSS file

const skills = [
  { name: "Next.js", logo: "/logos/next.svg" },
  { name: "React", logo: "/logos/react.svg" },
  { name: "Java", logo: "/logos/java.svg" },
  { name: "JavaScript", logo: "/logos/javascript.svg" },
  { name: "Remix", logo: "/logos/remix.svg" },
  { name: "React Native", logo: "/logos/react-native.svg" },
];

interface CryptoNewsArticle {
  url: string;
  title: string;
  description: string;
  thumbnail: string;
  createdAt: string;
}

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

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  if (data.data && Array.isArray(data.data)) {
    return data.data;
  } else {
    throw new Error("Invalid data format from API.");
  }
};

const DeveloperPage: FC = () => {
  const [cryptoNews, setCryptoNews] = useState<CryptoNewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCryptoNews = async () => {
      try {
        const news = await fetchCryptoNews();
        setCryptoNews(news);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadCryptoNews();
  }, []);

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

  const renderCryptoNews = () => {
    if (isLoading) {
      return <p>Loading cryptocurrency news...</p>;
    }

    if (error) {
      return <p style={{ color: "red" }}>Error: {error}</p>;
    }

    if (cryptoNews.length === 0) {
      return <p>No news available.</p>;
    }

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
      <h1 className="developer-title">Developer - John Doe</h1>
      <p className="developer-description">
        I am a full-stack developer with experience in React, Node.js, and
        Next.js. I have worked on various projects involving web development,
        system architecture, and performance optimization.
      </p>

      {renderSkills()}

      <div className="crypto-news-container">
        <h2>Latest Cryptocurrency News</h2>
        {renderCryptoNews()}
      </div>
    </div>
  );
};

export default DeveloperPage;
