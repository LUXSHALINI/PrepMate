"use client"

import { Flame } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/card"

const streakData = [
  { day: "Mon", active: true },
  { day: "Tue", active: true },
  { day: "Wed", active: true },
  { day: "Thu", active: true },
  { day: "Fri", active: true },
  { day: "Sat", active: false },
  { day: "Sun", active: true },
]

export default function StudyStreak() {
  return (
    <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full">
            <Flame className="h-5 w-5 text-white" />
          </div>
          <span className="text-orange-700">Study Streak</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            15
          </div>
          <p className="text-sm text-orange-600 font-medium">Days in a row</p>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {streakData.map((day, index) => (
            <div key={index} className="text-center">
              <div className="text-xs text-slate-600 mb-2 font-medium">{day.day}</div>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  day.active
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg hover:scale-110"
                    : "bg-slate-200 text-slate-400 hover:bg-slate-300"
                }`}
              >
                {day.active ? "✓" : "○"}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-orange-100 to-red-100 p-3 rounded-lg">
          <p className="text-xs text-orange-700 font-medium">Keep it up! Study today to maintain your streak. 🔥</p>
        </div>
      </CardContent>
    </Card>
  )
}
