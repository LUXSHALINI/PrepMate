"use client"

import { useState } from "react"
import { Target, Plus, Check } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/card"
import { Button } from "../components/button"
import { Input } from "../components/input"
import { Progress } from "../components/progress"

const initialGoals = [
  { id: 1, title: "Complete React Course", progress: 75, target: 100 },
  { id: 2, title: "Study 2 hours daily", progress: 60, target: 100 },
  { id: 3, title: "Finish 5 assignments", progress: 40, target: 100 },
]

export default function StudyGoals() {
  const [goals, setGoals] = useState(initialGoals)
  const [newGoal, setNewGoal] = useState("")
  const [showInput, setShowInput] = useState(false)

  const addGoal = () => {
    if (newGoal.trim()) {
      setGoals([
        ...goals,
        {
          id: Date.now(),
          title: newGoal,
          progress: 0,
          target: 100,
        },
      ])
      setNewGoal("")
      setShowInput(false)
    }
  }

  const markComplete = (id) => {
    setGoals(goals.map((goal) => (goal.id === id ? { ...goal, progress: 100 } : goal)))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Target className="h-5 w-5 text-blue-600" />
            <span>Study Goals</span>
          </div>
          <Button size="sm" variant="outline" onClick={() => setShowInput(!showInput)}>
            <Plus className="h-4 w-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {showInput && (
          <div className="flex space-x-2">
            <Input
              placeholder="Enter new goal..."
              value={newGoal}
              onChange={(e) => setNewGoal(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addGoal()}
            />
            <Button size="sm" onClick={addGoal}>
              Add
            </Button>
          </div>
        )}

        {goals.map((goal) => (
          <div key={goal.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{goal.title}</span>
              {goal.progress < 100 && (
                <Button size="sm" variant="ghost" onClick={() => markComplete(goal.id)}>
                  <Check className="h-4 w-4" />
                </Button>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <Progress value={goal.progress} className="flex-1" />
              <span className="text-xs text-slate-600">{goal.progress}%</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
