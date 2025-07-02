// src/pages/Dashboard.jsx
"use client"

import React, { useState } from "react"
import { Bell, Calendar, Clock, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/card"
import { Button } from "../components/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "../components/avatar"
// import PerformanceChart from "../components/performancechart";
import RecentActivities from "../components/recentactivities"
import UpcomingTasks from "../components/upcomingtasks"
import StudyStreak from "../components/studystreak"
import StudyGoals from "../components/studygoals"
import StudyNotes from "../components/studynotes"
import Leaderboard from "../components/leaderboard"
import FlashCards from "../components/flashcards"
import QuickActions from "../components/QuickActions"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const stats = [
    {
      title: "Study Hours",
      value: "24.5h",
      change: "+12%",
      icon: Clock,
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      iconBg: "bg-blue-500",
    },
    {
      title: "Study Streak",
      value: "15 days",
      change: "+1",
      icon: Zap,
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
      iconBg: "bg-purple-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12 border-3 border-white/20">
              <AvatarImage src="/placeholder.svg?height=48&width=48" />
              <AvatarFallback className="bg-white/20 text-white font-bold">LX</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">Welcome back, Luxshalini! ✨</h1>
              <p className="text-indigo-100">Ready to continue your learning journey?</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </Button>
            <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-0">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`${stat.bgColor} border-0 hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600 mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-slate-800 mb-1">{stat.value}</p>
                    <p
                      className={`text-xs font-medium ${stat.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}
                    >
                      {stat.change} from last week
                    </p>
                  </div>
                  <div className={`p-4 rounded-full ${stat.iconBg} shadow-lg`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-[300px] bg-gradient-to-r from-indigo-100 to-purple-100 p-1">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="study"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-rose-500 data-[state=active]:text-white"
            >
              Study Tools
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <StudyStreak />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RecentActivities />
              <UpcomingTasks />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <StudyGoals />
              <StudyNotes />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Leaderboard />
            </div>
          </TabsContent>

          <TabsContent value="study" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <FlashCards />
              <Card className="lg:col-span-2 bg-gradient-to-br from-pink-50 to-purple-50 border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-purple-700">Performance Analytics</CardTitle>
                  <CardDescription className="text-purple-600">Your learning performance over time</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* <performancechart /> */}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        <QuickActions />
      </div>
    </div>
  )
}
