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

const DeveloperPage: FC = () => {
  // const [cryptoNews, setCryptoNews] = useState<any[]>([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchCryptoNews = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://cryptocurrency-news2.p.rapidapi.com/v1/cryptodaily",
  //         {
  //           method: "GET",
  //           headers: {
  //             "x-rapidapi-key": "ea04141eb6msh96831e3b21db6c7p1b95f2jsn91caf9f48c60",
  //             "x-rapidapi-host": "cryptocurrency-news2.p.rapidapi.com",
  //           },
  //         }
  //       );

  //       if (!response.ok) {
  //         throw new Error(`Error: ${response.status} - ${response.statusText}`);
  //       }

  //       const data = await response.json();
  //       console.log("API Response:", data);

  //       if (data.data && Array.isArray(data.data)) {
  //         setCryptoNews(data.data);
  //       } else {
  //         console.log("No data or invalid data structure.");
  //         setCryptoNews([]);
  //       }
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchCryptoNews();
  // }, []);
  const [cryptoNews, setCryptoNews] = useState<any[]>([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch("https://cryptocurrency-news2.p.rapidapi.com/v1/cryptodaily", {
        method: "GET",
        headers: {
          "x-rapidapi-key": "ea04141eb6msh96831e3b21db6c7p1b95f2jsn91caf9f48c60",
          "x-rapidapi-host": "cryptocurrency-news2.p.rapidapi.com",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("API Response:", data); // Debugging response

      if (data.data && Array.isArray(data.data)) {
        setCryptoNews(data.data);
      } else {
        throw new Error("Invalid data format from API.");
      }
    } catch (err: any) {
      console.error("Fetching error:", err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  fetchData();
}, []);


  return (
    <div className="developer-container">
      <h1 className="developer-title">Developer - John Doe</h1>
      <p className="developer-description">
        I am a full-stack developer with experience in React, Node.js, and Next.js.
        I have worked on various projects involving web development, system architecture,
        and performance optimization.
      </p>

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

      <div className="crypto-news-container">
        <h2>Latest Cryptocurrency News</h2>

        {isLoading ? (
  <p>Loading cryptocurrency news...</p>
) : error ? (
  <p style={{ color: "red" }}>Error: {error}</p>
) : cryptoNews.length > 0 ? (
  <ul>
    {cryptoNews.map((article, index) => (
      <li key={index}>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          {article.title}
        </a>
        <p>{article.description}</p>
        <img src={article.thumbnail} alt={article.title} width={150} height={100} />
        <p>
          <small>Published on: {new Date(article.createdAt).toLocaleString()}</small>
        </p>
      </li>
    ))}
  </ul>
) : (
  <p>No news available.</p>
)}


        {/* {isLoading ? (
          <p>Loading cryptocurrency news...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <ul>
            {cryptoNews.length > 0 ? (
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
              <p>No news available.</p>
            )}
          </ul>
        )} */}
      </div>
    </div>
  );
};

export default DeveloperPage;
