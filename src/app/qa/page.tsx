import { FC } from 'react';
import ParticlesBackground from "@/components/ParticlesBackground";
import { AnimatedPinDemo } from "@/components/AnimatedPinDemo";

const QAPage: FC = () => {
  return (
    <div>
      <AnimatedPinDemo />
      <div className="p-8">
        <h1 className="text-4xl font-bold text-gray-900">QA - John Doe ( In Development ) </h1>
        <ParticlesBackground />
        <p className="mt-4 text-lg text-gray-700">
          As a QA engineer, I focus on ensuring the quality of software products through manual and automated testing. I have experience working with testing frameworks like Jest, Mocha, and Cypress.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
          {/* Card 1 - Skills */}
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-gray-800">Skills</h2>
            <p className="mt-2 text-gray-600">
              Manual Testing, Automation Testing, Test Planning, Bug Tracking
            </p>
          </div>

          {/* Card 2 - Tools */}
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-gray-800">Tools</h2>
            <p className="mt-2 text-gray-600">
              Jest, Mocha, Cypress, Selenium, JIRA, Postman
            </p>
          </div>

          {/* Card 3 - Experience */}
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-gray-800">Experience</h2>
            <p className="mt-2 text-gray-600">
              3+ years of experience in software testing across web and mobile applications.
            </p>
          </div>

          {/* Card 4 - Certifications */}
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-gray-800">Certifications</h2>
            <p className="mt-2 text-gray-600">
              ISTQB Certified, Google Project Management Certification
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QAPage;
