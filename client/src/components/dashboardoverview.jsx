import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Users, BookOpen, TrendingUp, Award, Clock, AlertCircle, CheckCircle, Activity } from "lucide-react"

export function DashboardOverview() {
  const stats = [
    {
      title: "Total Students",
      value: "245",
      change: "+12%",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Active Courses",
      value: "18",
      change: "+3",
      icon: BookOpen,
      color: "text-green-600",
    },
    {
      title: "Completion Rate",
      value: "87%",
      change: "+5%",
      icon: TrendingUp,
      color: "text-purple-600",
    },
    {
      title: "Certificates Issued",
      value: "156",
      change: "+23",
      icon: Award,
      color: "text-orange-600",
    },
  ]

  const recentActivities = [
    { student: "Shalini Kumar", action: "Completed Chapter 5", time: "2 hours ago", status: "completed" },
    { student: "Kala Devi", action: "Started new course", time: "4 hours ago", status: "active" },
    { student: "Mala Singh", action: "Submitted assignment", time: "6 hours ago", status: "pending" },
    { student: "Dushy Patel", action: "Achieved 90% score", time: "1 day ago", status: "completed" },
    { student: "Jalani Rao", action: "Joined discussion", time: "2 days ago", status: "active" },
  ]

  const performanceData = [
    { subject: "Mathematics", progress: 85, students: 45 },
    { subject: "Science", progress: 78, students: 52 },
    { subject: "English", progress: 92, students: 38 },
    { subject: "History", progress: 67, students: 29 },
    { subject: "Geography", progress: 73, students: 33 },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening with your learning platform.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">{stat.change}</span> from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Recent Activities
            </CardTitle>
            <CardDescription>Latest student activities and progress updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    {activity.status === "completed" && <CheckCircle className="h-4 w-4 text-green-600" />}
                    {activity.status === "active" && <Clock className="h-4 w-4 text-blue-600" />}
                    {activity.status === "pending" && <AlertCircle className="h-4 w-4 text-orange-600" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{activity.student}</p>
                    <p className="text-sm text-muted-foreground">{activity.action}</p>
                  </div>
                  <div className="text-xs text-muted-foreground">{activity.time}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Subject Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Subject Performance
            </CardTitle>
            <CardDescription>Average completion rates by subject</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {performanceData.map((subject, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{subject.subject}</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{subject.students} students</Badge>
                      <span className="text-sm text-muted-foreground">{subject.progress}%</span>
                    </div>
                  </div>
                  <Progress value={subject.progress} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
