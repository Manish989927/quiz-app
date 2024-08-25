import React, { useState, useEffect, useCallback } from "react";
import wordsData from "../wordsData.js";
import WordDisplay from "./WordDisplay";
import Options from "./Options";

const WordQuiz = () => {
  const [currentWords, setCurrentWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  // Select random 20 words only once
  useEffect(() => {
    const selectRandomWords = () => {
      const wordSet = new Set();
      while (wordSet.size < 20) {
        const randomIndex = Math.floor(Math.random() * wordsData.length);
        wordSet.add(wordsData[randomIndex]);
      }
      setCurrentWords(Array.from(wordSet));
    };

    selectRandomWords();
  }, []);

  // Load new word options when the word index changes
  useEffect(() => {
    if (currentWords.length === 0 || quizCompleted) return;

    const loadNewWord = () => {
      const word = currentWords[currentWordIndex];
      const optionSet = new Set([word.Defination]);

      while (optionSet.size < 4) {
        const randomIndex = Math.floor(Math.random() * wordsData.length);
        const randomDefinition = wordsData[randomIndex].Defination;

        if (randomDefinition && randomDefinition !== word.Defination) {
          optionSet.add(randomDefinition);
        }
      }

      const optionsArray = Array.from(optionSet).sort(() => Math.random() - 0.5);
      setOptions(optionsArray);
    };

    loadNewWord();
  }, [currentWords, currentWordIndex, quizCompleted]);

  const handleOptionClick = useCallback((option) => {
    if (selectedOption) return; // Prevent re-selection

    setSelectedOption(option);
    const correctDefinition = currentWords[currentWordIndex].Defination;

    if (option === correctDefinition) {
      setScore((prevScore) => prevScore + 4);
      setIsCorrect(true);
    } else {
      setScore((prevScore) => prevScore - 1);
      setIsCorrect(false);
    }

    setTimeout(() => {
      if (currentWordIndex < currentWords.length - 1) {
        setCurrentWordIndex((prevIndex) => prevIndex + 1);
      } else {
        setQuizCompleted(true);
      }
      setSelectedOption(null);
      setIsCorrect(null);
    }, 200); // Reduced delay for faster interaction
  }, [selectedOption, currentWordIndex, currentWords]);

  const handlePrevClick = useCallback(() => {
    if (currentWordIndex > 0) {
      setCurrentWordIndex((prevIndex) => prevIndex - 1);
    }
  }, [currentWordIndex]);

  const handleNextClick = useCallback(() => {
    if (currentWordIndex < currentWords.length - 1) {
      setCurrentWordIndex((prevIndex) => prevIndex + 1);
    }
  }, [currentWordIndex, currentWords.length]);

  return (
    <div className="bg-white p-10 rounded-lg shadow-lg text-center w-full max-w-md">
      <h1 className="text-3xl font-bold mb-6">Word Quiz</h1>
      {quizCompleted ? (
        <div className="text-xl font-semibold text-green-600">
          Quiz Completed! Your final score is: {score}
        </div>
      ) : (
        currentWords.length > 0 && (
          <>
            <WordDisplay word={currentWords[currentWordIndex]?.Meaning} />
            <Options
              options={options}
              handleOptionClick={handleOptionClick}
              selectedOption={selectedOption}
              correctOption={currentWords[currentWordIndex]?.Defination}
              isCorrect={isCorrect}
            />
            <div className="mt-4 flex justify-between">
              <button
                type="button"
                onClick={handlePrevClick}
                className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
                disabled={currentWordIndex === 0}
              >
                Prev
              </button>
              <button
                type="button"
                onClick={handleNextClick}
                className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
                disabled={currentWordIndex >= currentWords.length - 1}
              >
                Next
              </button>
            </div>
            <p className="mt-6 text-lg text-gray-700">Score: {score}</p>
          </>
        )
      )}
    </div>
  );
};

export default WordQuiz;
