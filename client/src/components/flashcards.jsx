"use client"

import { useState } from "react"
import { Brain, RotateCcw, ChevronLeft, ChevronRight, Plus } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/card"
import { Button } from "../components/button"
import { Badge } from "../components/badge"

const flashcards = [
  {
    id: 1,
    question: "What is React?",
    answer: "A JavaScript library for building user interfaces",
    subject: "React",
    difficulty: "Easy",
  },
  {
    id: 2,
    question: "What is useState?",
    answer: "A React Hook that lets you add state to functional components",
    subject: "React",
    difficulty: "Medium",
  },
  {
    id: 3,
    question: "What is JSX?",
    answer: "A syntax extension for JavaScript that looks similar to XML or HTML",
    subject: "React",
    difficulty: "Easy",
  },
]

export default function FlashCards() {
  const [currentCard, setCurrentCard] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % flashcards.length)
    setIsFlipped(false)
  }

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + flashcards.length) % flashcards.length)
    setIsFlipped(false)
  }

  const flipCard = () => setIsFlipped(!isFlipped)

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      case "Hard":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-5 w-5 text-pink-600" />
            <span>Flash Cards</span>
          </div>
          <Button size="sm" variant="outline">
            <Plus className="h-4 w-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm text-slate-600">
          <span>
            Card {currentCard + 1} of {flashcards.length}
          </span>
          <Badge variant="secondary" className={getDifficultyColor(flashcards[currentCard].difficulty)}>
            {flashcards[currentCard].difficulty}
          </Badge>
        </div>

        <div
          className="relative h-48 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg border-2 border-pink-200 cursor-pointer transition-all duration-300 hover:shadow-md"
          onClick={flipCard}
        >
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="text-center">
              <div className="text-sm font-medium text-pink-600 mb-2">{isFlipped ? "Answer" : "Question"}</div>
              <p className="text-slate-800 font-medium">
                {isFlipped ? flashcards[currentCard].answer : flashcards[currentCard].question}
              </p>
            </div>
          </div>

          <div className="absolute bottom-2 right-2">
            <Button
              size="sm"
              variant="ghost"
              onClick={(e) => {
                e.stopPropagation()
                flipCard()
              }}
            >
              <RotateCcw className="h-3 w-3" />
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Button variant="outline" size="sm" onClick={prevCard}>
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>

          <Badge variant="outline">{flashcards[currentCard].subject}</Badge>

          <Button variant="outline" size="sm" onClick={nextCard}>
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="text-center text-xs text-slate-500">Click card to flip • Use arrows to navigate</div>
      </CardContent>
    </Card>
  )
}
