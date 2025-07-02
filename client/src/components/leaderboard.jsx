"use client"

import { Trophy, Medal, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/card"
import { Avatar, AvatarFallback, AvatarImage } from "../components/avatar"
import { Badge } from "../components/badge"

const leaderboardData = [
  {
    rank: 1,
    name: "Luxshalini",
    points: 2450,
    streak: 15,
    avatar: "/placeholder.svg?height=32&width=32",
    isCurrentUser: true,
  },
  {
    rank: 2,
    name: "Priya",
    points: 2380,
    streak: 12,
    avatar: "/placeholder.svg?height=32&width=32",
    isCurrentUser: false,
  },
  {
    rank: 3,
    name: "Arjun",
    points: 2250,
    streak: 8,
    avatar: "/placeholder.svg?height=32&width=32",
    isCurrentUser: false,
  },
  {
    rank: 4,
    name: "Kavya",
    points: 2100,
    streak: 10,
    avatar: "/placeholder.svg?height=32&width=32",
    isCurrentUser: false,
  },
  {
    rank: 5,
    name: "Ravi",
    points: 1950,
    streak: 6,
    avatar: "/placeholder.svg?height=32&width=32",
    isCurrentUser: false,
  },
]

const getRankIcon = (rank) => {
  switch (rank) {
    case 1:
      return <Trophy className="h-4 w-4 text-yellow-500" />
    case 2:
      return <Medal className="h-4 w-4 text-gray-400" />
    case 3:
      return <Award className="h-4 w-4 text-amber-600" />
    default:
      return <span className="text-sm font-bold text-slate-600">#{rank}</span>
  }
}

export default function Leaderboard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Trophy className="h-5 w-5 text-yellow-600" />
          <span>Study Leaderboard</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {leaderboardData.map((user) => (
            <div
              key={user.rank}
              className={`flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                user.isCurrentUser ? "bg-blue-50 border border-blue-200" : "hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center justify-center w-6">{getRankIcon(user.rank)}</div>

              <Avatar className="h-8 w-8">
                <AvatarImage src={user.avatar || "/placeholder.svg"} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <p
                    className={`text-sm font-medium truncate ${
                      user.isCurrentUser ? "text-blue-700" : "text-slate-900"
                    }`}
                  >
                    {user.name}
                    {user.isCurrentUser && (
                      <Badge variant="secondary" className="ml-2 bg-blue-100 text-blue-800">
                        You
                      </Badge>
                    )}
                  </p>
                </div>
                <div className="flex items-center space-x-3 text-xs text-slate-600">
                  <span>{user.points} pts</span>
                  <span>🔥 {user.streak} days</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-slate-600">Keep studying to climb the leaderboard! 🚀</p>
        </div>
      </CardContent>
    </Card>
  )
}
