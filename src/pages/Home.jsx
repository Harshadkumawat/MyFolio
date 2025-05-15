import { useEffect, useState } from "react";
import giphy from "../assets/output-onlinegiftools.gif"; // ← Add this line

export default function Home() {
  const [text, setText] = useState("");
  const roles = ["Frontend Developer", "MERN Stack Dev", "Tech Enthusiast"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === roles.length) return;

    if (subIndex === roles[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 md:py-24 gap-10">
      {/* Left Content */}
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm{" "}
          <span className="text-indigo-600 dark:text-indigo-400">
            Harshad Kumawat
          </span>
        </h1>
        <h2 className="text-xl md:text-2xl font-medium h-10 text-gray-700 dark:text-gray-300">
          {`${roles[index].substring(0, subIndex)}|`}
        </h2>

        <p className="max-w-xl mt-6 text-xl text-gray-600 dark:text-gray-400">
          I’m passionate about coding and continuously learning new
          technologies. I specialize in JavaScript, React, and Next.js, and I’m
          always eager to create impactful solutions for the web. Let’s connect
          and build something amazing together!
        </p>
      </div>

      {/* Right GIF */}
      <div className="w-full md:w-1/2">
        <img
          src={giphy}
          alt="Developer Animation"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}
