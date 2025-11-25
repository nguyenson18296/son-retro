import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function AboutContent() {
  const fullText = `I’m a Frontend Developer with expertise in ReactJS and VueJS, primarily using TypeScript. I have hands-on experience with a wide range of UI testing frameworks and tools including Jest, React Testing Library, Cypress, Playwright, and Enzyme. Additionally, I’m comfortable working with backend technologies such as Node.js when needed.`;
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 30); // Adjust speed here (lower = faster)

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h2 className="text-2xl mb-3">About Me</h2>
        <p className="text-gray-600 leading-relaxed">
          {displayedText}
          {currentIndex < fullText.length && (
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-0.5 h-5 bg-gray-600 ml-0.5"
            />
          )}
        </p>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
        <h3 className="mb-4">Profile</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-gray-200">
            <span className="text-gray-600">Name</span>
            <span>Son Nguyen</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-200">
            <span className="text-gray-600">Role</span>
            <span>Frontend Developer</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-200">
            <span className="text-gray-600">Location</span>
            <span>HCM, VN</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600">Experience</span>
            <span>7+ Years</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-3">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "ReactJS",
            "VueJS",
            "TypeScript",
            "Node.js",
            "PostgresQL",
            "Automation Testing",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <p className="text-gray-600 leading-relaxed">
        I love creating beautiful, intuitive experiences that blend modern
        technology with thoughtful design. This portfolio is a tribute to
        Apple's iconic design philosophy.
      </p>
    </div>
  );
}
