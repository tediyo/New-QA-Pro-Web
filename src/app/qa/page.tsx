import { FC } from 'react';
import ParticlesBackground from "@/components/ParticlesBackground";
import {AnimatedPinDemo } from "@/components/AnimatedPinDemo";
const QAPage: FC = () => {
  return (
    
    <div><AnimatedPinDemo />
    <div className="p-8">
        
      <h1 className="text-4xl font-bold text-gray-900">QA - John Doe</h1>
      <p className="mt-4 text-lg text-gray-700">
      <ParticlesBackground />
     
        As a QA engineer, I focus on ensuring the quality of software products through manual and automated testing. I have experience working with testing frameworks like Jest, Mocha, and Cypress.
      </p>
      {/* Add more content here like your QA tools, processes, and projects. */}
    </div>
    </div>
  );
};

export default QAPage;
