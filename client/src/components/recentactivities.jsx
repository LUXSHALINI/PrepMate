"use client"

import { Clock, BookOpen, FileCheck, Video } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/card"
import { Badge } from "../components/badge"

const activities = [
  {
    type: "course",
    title: "Completed React Fundamentals",
    time: "2 hours ago",
    icon: BookOpen,
    status: "completed",
    color: "from-green-500 to-emerald-500",
  },
  {
    type: "assignment",
    title: "Submitted JavaScript Assignment",
    time: "5 hours ago",
    icon: FileCheck,
    status: "submitted",
    color: "from-blue-500 to-cyan-500",
  },
  {
    type: "video",
    title: "Watched Advanced CSS Techniques",
    time: "1 day ago",
    icon: Video,
    status: "watched",
    color: "from-purple-500 to-pink-500",
  },
  {
    type: "course",
    title: "Started Node.js Basics",
    time: "2 days ago",
    icon: BookOpen,
    status: "in-progress",
    color: "from-orange-500 to-red-500",
  },
]

export default function RecentActivities() {
  return (
    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full">
            <Clock className="h-5 w-5 text-white" />
          </div>
          <span className="text-blue-700">Recent Activities</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-3 rounded-xl bg-white/60 hover:bg-white/80 transition-all duration-300 hover:scale-105"
            >
              <div className={`p-2 bg-gradient-to-r ${activity.color} rounded-full shadow-lg`}>
                <activity.icon className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-900 truncate">{activity.title}</p>
                <p className="text-xs text-slate-500">{activity.time}</p>
              </div>
              <Badge variant="secondary" className="text-xs bg-gradient-to-r from-slate-100 to-slate-200">
                {activity.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
