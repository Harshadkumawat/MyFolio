import { Link } from 'react-router-dom';
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';

export default function LandingPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl font-bold sm:text-5xl mb-4">Hi, I'm Your Name</h1>
        <p className="text-lg sm:text-xl mb-6">A passionate Full Stack Developer</p>
        <Link to="/about">
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg text-lg hover:bg-indigo-100 transition-colors">
            Learn More About Me
          </button>
        </Link>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-10">Skills & Technologies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            <div className="text-center">
              <FaReact className="text-4xl text-cyan-500 mb-4" />
              <p className="font-semibold">React.js</p>
            </div>
            <div className="text-center">
              <FaNodeJs className="text-4xl text-green-500 mb-4" />
              <p className="font-semibold">Node.js</p>
            </div>
            <div className="text-center">
              <FaGithub className="text-4xl text-gray-700 mb-4" />
              <p className="font-semibold">Git & GitHub</p>
            </div>
            <div className="text-center">
              <FaReact className="text-4xl text-blue-500 mb-4" />
              <p className="font-semibold">Tailwind CSS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-indigo-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-10">Featured Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="https://via.placeholder.com/500x300" alt="Project 1" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Project 1</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  This is a short description of the project. It showcases your skills and what you've built.
                </p>
                <Link to="/projects" className="text-indigo-600 hover:text-indigo-800">View Project</Link>
              </div>
            </div>
            {/* Repeat for more projects */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-10">Get in Touch</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Feel free to contact me for any projects, collaborations, or inquiries. Let's create something amazing together!
        </p>
        <a
          href="harshadkumawat339977@gmail.com"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-indigo-700 transition-colors"
        >
          Contact Me
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2025 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}
