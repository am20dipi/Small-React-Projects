import React, {useState} from 'react'
import './App.css'

function App() {

  const questions = [
    {
      questionText: 'How Many Countries Are There In The World?',
      answerOptions: [
        { answerText: '120', isCorrect: false},
        { answerText: '183', isCorrect: false},
        { answerText: '170', isCorrect: false},
        { answerText: '195', isCorrect: true}
      ],
    },
    {
      questionText: 'What Is The "G" in ROY G. BIV?',
      answerOptions: [
        { answerText: 'Gray', isCorrect: false},
        { answerText: 'Green', isCorrect: true},
        { answerText: 'Grey', isCorrect: false},
        { answerText: 'Gristle', isCorrect: false}
      ],
    },
    {
      questionText: 'What Is The Breed Of Cat?',
      answerOptions: [
        { answerText: 'Siberian Short-Snout', isCorrect: false},
        { answerText: 'Laos Lion', isCorrect: false},
        { answerText: 'Michigan Bengal', isCorrect: false},
        { answerText: 'Norwegian Forest Cat', isCorrect: true}
      ],
    },
    {
      questionText: 'What Continent Is Suriname Located On?',
      answerOptions: [
        { answerText: 'South America', isCorrect: true},
        { answerText: 'Asia', isCorrect: false},
        { answerText: 'Europe', isCorrect: false},
        { answerText: 'North America', isCorrect: false}
      ],
    },
  ]
  return (
    <div className="App">
      
    </div>
  )
}

export default App;
