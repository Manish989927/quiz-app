// App.js
import React from "react";
import WordQuiz from "./components/WordQuiz";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <WordQuiz />
    </div>
  );
};

export default App;




 

 

// const App = () => {
//   const [currentWord, setCurrentWord] = useState({}); // Initialize with an empty object
//   const [options, setOptions] = useState([]);

//   // Function to load a new word
//   const loadNewWord = () => {
//     if (wordsData.length === 0) {
//       console.error("wordsData is empty.");
//       return;
//     }

//     // Pick a random word
//     const wordIndex = Math.floor(Math.random() * wordsData.length);
//     const word = wordsData[wordIndex];


//     let optionSet = new Set([word.Defination]);
//     while (optionSet.size < 4) {
//       const randomIndex = Math.floor(Math.random() * wordsData.length);
//       const randomDefinition = wordsData[randomIndex].Defination;

//       // Ensure the option is not the same as the correct one
//       if (randomDefinition && randomDefinition !== word.Defination) {
//         optionSet.add(randomDefinition);
//       }
//     }

//     const optionsArray = Array.from(optionSet).sort(() => Math.random() - 0.5);
//     // Set the current word
//     setCurrentWord(word);
//     setOptions(optionsArray);

//     // Optionally, set options or other related state
//     // Example: setOptions([...]); // Implement your options logic
//   };

//   // Load the first word when the component mounts
//   useEffect(() => {
//     loadNewWord();
//   }, []);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
//       <div className="bg-white p-10 rounded-lg shadow-lg text-center w-full max-w-md">
//         <h1 className="text-3xl font-bold mb-6">Word Details</h1>
//         {currentWord && (
//           <div>
//             <h2 className="text-xl font-semibold text-gray-800">
//               {currentWord.Meaning}
//             </h2>
//             <p className="text-gray-600">{currentWord.Defination}</p>
//           </div>
//         )}
//         <button
//           onClick={loadNewWord}
//           className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
//         >
//           Load New Word
//         </button>

//         <div className="mt-4">
//           {Array.isArray(options) && options.map((option, index) => (
//             <div key={index} className="p-2 bg-gray-100 rounded-lg">
//               <p>{option}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
