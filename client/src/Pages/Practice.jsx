

import { useState, useEffect } from "react"
import { Button } from "../components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/card"
import { Progress } from "../components/progress"
import { Badge } from "../components/badge"
import { Clock, Trophy, Target, BookOpen, CheckCircle, XCircle, RotateCcw } from "lucide-react"

const sampleQuestions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: 2,
    subject: "English",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1,
    subject: "Science",
  },
  {
    id: 3,
    question: "What is 15 × 8?",
    options: ["120", "125", "115", "130"],
    correctAnswer: 0,
    subject: "Maths",
  },
  {
    id: 4,
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    correctAnswer: 1,
    subject: "English",
  },
  {
    id: 5,
    question: "What is the chemical symbol for gold?",
    options: ["Go", "Gd", "Au", "Ag"],
    correctAnswer: 2,
    subject: "Science",
  },
  {
    id: 6,
    question: "What is the square root of 144?",
    options: ["11", "12", "13", "14"],
    correctAnswer: 1,
    subject: "Maths",
  },
]

const Practice = () => {
  const [selectedSubject, setSelectedSubject] = useState("")
  const [sessionStarted, setSessionStarted] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState([])
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes
  const [sessionComplete, setSessionComplete] = useState(false)
  const [showResult, setShowResult] = useState(false)

  const subjects = [
    { name: "Maths", icon: "📊", color: "bg-blue-500" },
    { name: "Science", icon: "🔬", color: "bg-green-500" },
    { name: "English", icon: "📚", color: "bg-purple-500" },
  ]

  const filteredQuestions = sampleQuestions.filter((q) => q.subject === selectedSubject)

  
  useEffect(() => {
    if (sessionStarted && timeLeft > 0 && !sessionComplete) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0) {
      handleSessionEnd()
    }
  }, [sessionStarted, timeLeft, sessionComplete])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject)
  }

  const handleStartSession = () => {
    setSessionStarted(true)
    setCurrentQuestionIndex(0)
    setScore(0)
    setAnsweredQuestions([])
    setTimeLeft(300)
    setSessionComplete(false)
    setShowResult(false)
  }

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex)
  }

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      const currentQuestion = filteredQuestions[currentQuestionIndex]
      const newAnsweredQuestions = [...answeredQuestions, selectedAnswer]
      setAnsweredQuestions(newAnsweredQuestions)

      if (selectedAnswer === currentQuestion.correctAnswer) {
        setScore(score + 1)
      }

      setShowResult(true)

      setTimeout(() => {
        if (currentQuestionIndex < filteredQuestions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1)
          setSelectedAnswer(null)
          setShowResult(false)
        } else {
          handleSessionEnd()
        }
      }, 1500)
    }
  }

  const handleSessionEnd = () => {
    setSessionComplete(true)
    setSessionStarted(false)
  }

  const handleRestart = () => {
    setSelectedSubject("")
    setSessionStarted(false)
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setScore(0)
    setAnsweredQuestions([])
    setTimeLeft(300)
    setSessionComplete(false)
    setShowResult(false)
  }

  const currentQuestion = filteredQuestions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / filteredQuestions.length) * 100

  if (sessionComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-600 to-teal-800 text-white font-sans flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl bg-white/10 backdrop-blur-sm border-white/20 text-white">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold">Session Complete!</CardTitle>
            <CardDescription className="text-white/80 text-lg">
              Great job on completing your {selectedSubject} practice session
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <div className="text-3xl font-bold text-green-400">{score}</div>
                <div className="text-sm text-white/80">Correct Answers</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <div className="text-3xl font-bold text-blue-400">{filteredQuestions.length}</div>
                <div className="text-sm text-white/80">Total Questions</div>
              </div>
            </div>

            <div className="text-center">
              <div className="text-lg mb-2">Your Score</div>
              <div className="text-4xl font-bold text-yellow-400">
                {Math.round((score / filteredQuestions.length) * 100)}%
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <Button onClick={handleRestart} className="bg-teal-600 hover:bg-teal-700 text-white">
                <RotateCcw className="w-4 h-4 mr-2" />
                Try Again
              </Button>
              <Button
                onClick={() => setSelectedSubject("")}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                Change Subject
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (sessionStarted && currentQuestion) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-600 to-teal-800 text-white font-sans p-4">
      
        <div className="max-w-4xl mx-auto mb-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Practice: {selectedSubject}</h1>
                <p className="text-white/80">
                  Question {currentQuestionIndex + 1} of {filteredQuestions.length}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-white/20 px-3 py-2 rounded-lg">
                <Clock className="w-4 h-4" />
                <span className="font-mono">{formatTime(timeLeft)}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-3 py-2 rounded-lg">
                <Target className="w-4 h-4" />
                <span>
                  {score}/{currentQuestionIndex}
                </span>
              </div>
            </div>
          </div>

          <Progress value={progress} className="h-2 bg-white/20" />
        </div>

      
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader>
              <CardTitle className="text-xl">{currentQuestion.question}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3">
                {currentQuestion.options.map((option, index) => {
                  let buttonClass = "w-full p-4 text-left rounded-lg border-2 transition-all duration-200 "

                  if (showResult) {
                    if (index === currentQuestion.correctAnswer) {
                      buttonClass += "bg-green-500/20 border-green-400 text-green-100"
                    } else if (index === selectedAnswer && index !== currentQuestion.correctAnswer) {
                      buttonClass += "bg-red-500/20 border-red-400 text-red-100"
                    } else {
                      buttonClass += "bg-white/5 border-white/20 text-white/60"
                    }
                  } else {
                    if (selectedAnswer === index) {
                      buttonClass += "bg-white/20 border-white text-white"
                    } else {
                      buttonClass += "bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/40"
                    }
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => !showResult && handleAnswerSelect(index)}
                      className={buttonClass}
                      disabled={showResult}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option}</span>
                        {showResult && index === currentQuestion.correctAnswer && (
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        )}
                        {showResult && index === selectedAnswer && index !== currentQuestion.correctAnswer && (
                          <XCircle className="w-5 h-5 text-red-400" />
                        )}
                      </div>
                    </button>
                  )
                })}
              </div>

              {!showResult && (
                <div className="flex justify-end pt-4">
                  <Button
                    onClick={handleNextQuestion}
                    disabled={selectedAnswer === null}
                    className="bg-white text-teal-700 hover:bg-white/90 disabled:opacity-50"
                  >
                    {currentQuestionIndex === filteredQuestions.length - 1 ? "Finish" : "Next Question"}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-600 to-teal-800 text-white font-sans">
      {/* Header */}
      <div className="text-center py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Practice Session</h1>
          <p className="text-xl text-white/90 mb-6">
            Sharpen your skills with targeted questions and track your progress
          </p>
          {selectedSubject && (
            <Badge className="bg-white/20 text-white text-lg px-4 py-2">Selected: {selectedSubject}</Badge>
          )}
        </div>
      </div>

      {/* Subject Selection */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
       <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Choose Your Subject</CardTitle>
            <CardDescription className="text-white/80">
              Select a subject to start your practice session. Each session contains multiple questions with a timer.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {subjects.map((subject) => (
                <button
                  key={subject.name}
                  onClick={() => handleSubjectSelect(subject.name)}
                  className={`p-6 rounded-xl border-2 transition-all duration-200 ${
                    selectedSubject === subject.name
                      ? "bg-white text-teal-700 border-white scale-105"
                      : "bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/40 hover:scale-102"
                  }`}
                >
                  <div className="text-4xl mb-3">{subject.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{subject.name}</h3>
                  <p className="text-sm opacity-80">
                    {sampleQuestions.filter((q) => q.subject === subject.name).length} questions available
                  </p>
                </button>
              ))}
            </div>

            {selectedSubject && (
              <div className="text-center space-y-4">
                <div className="bg-white/10 rounded-lg p-4 max-w-md mx-auto">
                  <h4 className="font-semibold mb-2 text-white">Session Details</h4>
                  <div className="text-sm text-white/80 space-y-1">
                    <p>• {filteredQuestions.length} questions</p>
                    <p>• 5 minutes time limit</p>
                    <p>• Instant feedback</p>
                    <p>• Progress tracking</p>
                  </div>
                </div>

                <Button
                  onClick={handleStartSession}
                  className="bg-white text-teal-700 hover:bg-white/90 text-lg px-8 py-3 font-semibold"
                >
                  Start Practice Session
                </Button>
              </div>
            )}

            {!selectedSubject && (
              <div className="text-center">
                <Button disabled className="bg-white/20 text-white/60 cursor-not-allowed text-lg px-8 py-3">
                  Select a Subject First
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Practice
