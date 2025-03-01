"use client";

import { FC, useEffect, useState } from 'react';
import ParticlesBackground from "@/components/ParticlesBackground";

const QAPage: FC = () => {
  // Track if the component has mounted on the client to prevent mismatch
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set the state to true once the component is mounted on the client
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gray-50">
      <ParticlesBackground />
      <div className="p-8 w-full max-w-4xl">
        <h2 className="text-4xl font-bold text-gray-900 text-center">
          QA - John Doeeeeeeeeeee ( In Development )
        </h2>
        
        <p className="mt-4 text-lg text-gray-700 text-center">
          As a QA engineer, I focus on ensuring the quality of software products through manual and automated testing. I have experience working with testing frameworks like Jest, Mocha, and Cypress.
        </p>

        {/* Only render the content after the component has mounted (on client side) */}
        {isClient && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8 justify-items-center">
            {/* Card 1 - Skills */}
            <div className="bg-white shadow-md rounded-2xl w-64 h-64 flex flex-col justify-center items-center border-2 border-green-500">
              <h6 className="text-2xl font-semibold text-gray-800">Skills</h6>
              <p className="mt-2 text-center text-gray-600">
                Manual Testing, Automation, Test Planning, Bug Tracking
              </p>
            </div>

            {/* Card 2 - Tools */}
            <div className="bg-white shadow-md rounded-2xl w-64 h-64 flex flex-col justify-center items-center border-2 border-green-500">
              <h2 className="text-2xl font-semibold text-gray-800">Tools</h2>
              <p className="mt-2 text-center text-gray-600">
                Jest, Mocha, Cypress, Selenium, JIRA, Postman
              </p>
            </div>

            {/* Card 3 - Experience */}
            <div className="bg-white shadow-md rounded-2xl w-64 h-64 flex flex-col justify-center items-center border-2 border-green-500">
              <h2 className="text-2xl font-semibold text-gray-800">Experience</h2>
              <p className="mt-2 text-center text-gray-600">
                3+ years in web and mobile testing.
              </p>
            </div>

            {/* Card 4 - Certifications */}
            <div className="bg-white shadow-md rounded-2xl w-64 h-64 flex flex-col justify-center items-center border-2 border-green-500">
              <h2 className="text-2xl font-semibold text-gray-800">Certifications</h2>
              <p className="mt-2 text-center text-gray-600">
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
