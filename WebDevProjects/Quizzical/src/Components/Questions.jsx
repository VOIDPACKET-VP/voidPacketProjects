import React, { useEffect, useState } from "react";
import { fetchQuestions } from "../utils/fetchQuestions"
import { decode } from 'html-entities'

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}

export default function Questions() {

    const [questionPage, setQuestionPage] = useState(false)
    const [questions, setQuestions] = useState([])
    const [selectedValuesArr, setSelectedValuesArr] = useState([])
    const [isChecked, setIsChecked] = useState(false)

    // Since we're using an API, we have to cover the wait for the response and errors if any
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

        async function getAndRefactorData() {
            setLoading(true)
            try {

                // Get questions
                const apiResponse = await fetchQuestions()
                const rawQuestions = apiResponse.results

                // Refactor them to my needs
                const refactored = 
                    rawQuestions.map(question => {
                        const allAnswersArr = [decode(...question.incorrect_answers), decode(question.correct_answer)]
                        return (
                            {
                                question: decode(question.question),
                                correctAnswer: question.correct_answer,
                                wrongAnswers: question.incorrect_answers,
                                allAnswers: shuffleArray(allAnswersArr)
                            }
                        )
                    })
                
                setQuestions(refactored)
                setLoading(false)

            } catch (err) {
                setError(err.message)
                setLoading(false)
            }
        }

        

    if (!questionPage) {
        return (
            <main className="welcome">
                <h1>Quizzical</h1>
                <p>Questions with answers hhhhh</p>
                <button onClick={getQuestionPage} className="start-btn">Start quiz</button>
            </main>
        )
    }

    if (loading) return <p>Loading quiz questions...</p>
    if (error) return <p>Something went wrong: {error}</p>


    function getQuestionPage() {
        setQuestionPage(true)
        getAndRefactorData()
    }

    const getValueOfClickedInput = (e, idx) => {
        const clickedValue = e.target.value
        setSelectedValuesArr(prevValueArr => {
            const newArr = [...prevValueArr]
            newArr[idx] = clickedValue
            return newArr
        })
    }

    const clickedStyling = {
        backgroundColor: "#D6DBF5",
        border: "none"
    }

    const correctStyling = {
        backgroundColor: "#94D7A2",
        border: "none"
    }

    const incorrectStyling = {
        backgroundColor: "#F8BCBC",
        border: "none",
        opacity: 0.7
    }

    function sendAnswers() {
        setIsChecked(true)
    }

    let finalGrade = questions.reduce((score, q, index) => {
        return q.correctAnswer === selectedValuesArr[index] ? score + 1 : score
    }, 0)

    function getStyles(answer, qIndex) {
        const isSelected = answer === selectedValuesArr[qIndex]
        const isCorrectAnswer = answer === questions[qIndex].correctAnswer

        if (!isChecked) return isSelected ? clickedStyling : {}

        if (isCorrectAnswer) return correctStyling
        else if (isSelected) return incorrectStyling
        else return {opacity: 0.5}
    }
    
    function restartGame() {
        setIsChecked(false)
        setQuestions([])
        setSelectedValuesArr([])
        getAndRefactorData()
    }

    return (
        <>
            <div className="quiz-container">
                {questions.map((q, qIndex) => (
                    <div key={qIndex} className="question-block">
                        <h3 className="question-text">{q.question}</h3>
                        
                        <div className="answers-row">
                            {q.allAnswers.map((answer, aIndex) => (
                                <React.Fragment key={aIndex}>
                                    <input
                                        id={`option-${qIndex}-${aIndex}`}
                                        type="radio"
                                        name={`answers-${qIndex}`}
                                        className="answer-btn"
                                        value={answer}
                                        onChange={(e) => getValueOfClickedInput(e, qIndex)}
                                        disabled={isChecked}
                                    />
                                    <label 
                                        htmlFor={`option-${qIndex}-${aIndex}`} 
                                        style={getStyles(answer, qIndex)}
                                    >
                                        {answer}
                                    </label>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                ))}
                {isChecked && <p>You scored {finalGrade}/5 correct answers</p>}
                <button onClick={isChecked ? restartGame : sendAnswers} className="check-btn">{isChecked ? 'Play again' : 'Check answers'}</button>
            </div>
            
        </>
    )
}