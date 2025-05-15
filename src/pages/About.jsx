import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-6">About Me</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        Hi! I’m Harshad, a Full-Stack Web Developer. I’m passionate about
        building scalable, user-friendly, and impactful web applications that
        solve real-world problems.
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        My journey into web development began when I realized my passion for
        problem-solving and technology. I learned through a combination of
        online courses, offline classes, and hands-on projects. This approach
        has helped me develop a strong foundation in technologies such as{" "}
        <strong>
          JavaScript, React, Next.js, Express.js, MongoDB, and Tailwind CSS
        </strong>
        .
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        What excites me most about development is the ability to create
        something from scratch and see it grow into a fully functional
        application. I’m always looking for opportunities to collaborate, learn
        new tools, and enhance my skills as a developer.
      </p>

      <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
        Skills & Expertise
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 dark:text-gray-300">
        <li>
          <strong>Frontend</strong>: React, Next.js, Tailwind CSS, HTML, CSS
        </li>
        <li>
          <strong>Backend</strong>: Express.js, MongoDB, Node.js
        </li>
        <li>
          <strong>Version Control</strong>: Git, GitHub
        </li>
        <li>
          <strong>Other Tools</strong>:  REST APIs
        </li>
      </ul>

      <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
        What Drives Me
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        I'm deeply passionate about creating efficient, user-centric web
        applications that can help businesses and individuals solve their
        problems. I enjoy taking on new challenges and continuously improving my
        skills in both front-end and back-end development.
      </p>

      <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
        Fun Facts About Me
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        When I'm not coding, I love to travel, explore new places, and learn
        about different cultures. I also enjoy reading about the latest trends
        in tech and sometimes unwind with a good video game session.
      </p>

      <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
        Let’s Connect
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        If you want to collaborate or just chat about web development, feel free
        to{" "}
        <a href="/contact" className="text-blue-500">
          reach out to me
        </a>
        . I’d love to connect!
      </p>
    </div>
  );
};

export default About;
