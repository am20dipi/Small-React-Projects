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

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true){
      setScore(score + 1)
    }
    const nextQuestions = currentQuestion + 1

    if (nextQuestions < questions.length){
      setCurrentQuestion(nextQuestions)
    } else {
      setShowScore(true)
    }
  }

  const handleTryAgainClick = () => {
    window.location.reload()
  }

  return (
    <div className="App">
      <h1 className='header'>QUIZ</h1>
      { showScore ? (
        <div className='score-container'>
          You scored {score} out of {questions.length}!<br/><br/>
          <button onClick={ () => handleTryAgainClick()}>Try Again?</button>
        </div>

      ) : (
        <>
          <div className='question-container'>
            <div className="question-text">
              <span>Question {currentQuestion + 1}</span><br/><br/>
              {questions[currentQuestion].questionText}
            </div><br/>
          </div><div className="answer-container">
              {questions[currentQuestion].answerOptions.map((answerOptions) => (
                <li><button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button></li>
              ))}
          </div>
        </>
      )}
      
    </div>
  )
}

export default App;
