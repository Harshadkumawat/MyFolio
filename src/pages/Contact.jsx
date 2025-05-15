import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-10">
        Get in Touch
      </h2>

      <div className="grid md:grid-cols-2 gap-10 text-gray-700 dark:text-gray-300">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-indigo-600 text-xl" />
            <span>harshadkumawat339977@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-indigo-600 text-xl" />
            <span>+91 6264197551</span>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-indigo-600 text-xl" />
            <span>Indore, Madhya Pradesh, India</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-6">
          <a
            href="https://github.com/Harshadkumawat"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:text-indigo-600"
          >
            <FaGithub className="text-xl" />
            <span>github.com/Harshadkumawat</span>
          </a>
          <a
            href="https://linkedin.com/in/harshad-kumawat"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:text-indigo-600"
          >
            <FaLinkedin className="text-xl" />
            <span>linkedin.com/in/yourprofile</span>
          </a>
        </div>
      </div>
    </div>
  );
}
