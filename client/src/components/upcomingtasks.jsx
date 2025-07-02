"use client"

import { Calendar, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/card"
import { Badge } from "../components/badge"
import { Button } from "../components/button"

const tasks = [
  {
    title: "Math Quiz Chapter 5",
    dueDate: "Today, 6:00 PM",
    priority: "high",
    subject: "Mathematics",
    color: "from-red-500 to-pink-500",
  },
  {
    title: "History Essay Draft",
    dueDate: "Tomorrow, 11:59 PM",
    priority: "medium",
    subject: "History",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Science Lab Report",
    dueDate: "Dec 15, 2024",
    priority: "low",
    subject: "Physics",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Literature Review",
    dueDate: "Dec 18, 2024",
    priority: "medium",
    subject: "English",
    color: "from-purple-500 to-indigo-500",
  },
]

const getPriorityColor = (priority) => {
  switch (priority) {
    case "high":
      return "bg-gradient-to-r from-red-100 to-pink-100 text-red-800 border-red-200"
    case "medium":
      return "bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 border-yellow-200"
    case "low":
      return "bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200"
    default:
      return "bg-gradient-to-r from-slate-100 to-slate-200 text-slate-800 border-slate-200"
  }
}

export default function UpcomingTasks() {
  return (
    <Card className="bg-gradient-to-br from-green-50 to-teal-50 border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <div className="p-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-full">
            <Calendar className="h-5 w-5 text-white" />
          </div>
          <span className="text-green-700">Upcoming Tasks</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="p-4 border-2 border-white/50 rounded-xl bg-white/60 hover:bg-white/80 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-medium text-sm text-slate-900">{task.title}</h4>
                <Badge variant="secondary" className={getPriorityColor(task.priority)}>
                  {task.priority}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs text-slate-600">
                  <Clock className="h-3 w-3" />
                  <span>{task.dueDate}</span>
                </div>
                <Badge variant="outline" className={`text-xs bg-gradient-to-r ${task.color} text-white border-0`}>
                  {task.subject}
                </Badge>
              </div>
            </div>
          ))}
        </div>
        <Button
          variant="outline"
          className="w-full mt-4 bg-gradient-to-r from-green-100 to-teal-100 hover:from-green-200 hover:to-teal-200 border-0"
          size="sm"
        >
          View All Tasks
        </Button>
      </CardContent>
    </Card>
  )
}
