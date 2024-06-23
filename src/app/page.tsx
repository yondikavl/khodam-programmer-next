"use client";

import { useEffect, useState, ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [userInput, setUserInput] = useState<string>("");
  const [result, setResult] = useState<string>("");

  function generateRandomLanguage(): void {
    const languages: string[] = [
      "JavaScript",
      "Python",
      "Java",
      "C++",
      "Ruby",
      "Go",
      "Swift",
      "Kotlin",
      "PHP",
      "TypeScript",
      "Rust",
      "Perl",
      "Scala",
      "Haskell",
      "Lua",
    ];

    if (userInput.trim() === "") {
      alert("Masukin nama dulu cuy.");
      return;
    }

    const randomIndex = Math.floor(Math.random() * languages.length);
    const randomLanguage = languages[randomIndex];
    setResult(randomLanguage);
  }

  useEffect(() => {
    const audio = new Audio(
      "/audios/BACKSOUND HOROR (GAMELAN JAWA) NO COPYRIGHT.mp3"
    );
    audio.loop = true;

    const handlePlay = () => {
      audio.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    };

    const handleClick = () => {
      handlePlay();
      document.removeEventListener("click", handleClick);
    };

    document.addEventListener("click", handleClick);

    return () => {
      audio.pause();
      audio.currentTime = 0;
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <main className="min-h-screen flex justify-center items-center bg-black text-black">
      <div className="bg-blue-950 p-8 min-w-96 max-w-96 rounded-xl relative">
        <div className="relative">
          <img className="rounded-lg w-full" src="cek-khodam.jpeg" alt="" />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
            <FontAwesomeIcon
              icon={faClock}
              className="text-white animate-spin"
              size="2x"
            />
          </div>
        </div>
        <h1 className="text-xl font-bold my-8 text-white flex justify-center">
          Cek Khodam Programmer
        </h1>
        <p className="text-white mb-8 flex justify-center">
          Mungkin selama ini kamu sulit belajar karena tidak tau khodam kamu
          🐯👻
        </p>
        <div className="flex gap-4 flex-col">
          <input
            className="px-4 py-2 rounded-md"
            type="text"
            id="userInput"
            placeholder="Masukkan nama kamu..."
            value={userInput}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUserInput(e.target.value)
            }
          />
          <button
            className="bg-blue-800 px-4 py-2 text-white rounded-md"
            onClick={generateRandomLanguage}
          >
            🐯 Cek Khodam
          </button>
        </div>
        <p className="mt-8 text-white">Khodam pemrograman kamu adalah:</p>
        <div
          className="result mt-2 text-white min-h-16 bg-red-900 p-2 rounded-lg"
          id="result"
        >
          <p className="p-4 font-bold">{result}</p>
        </div>
      </div>
    </main>
  );
}
