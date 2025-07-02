import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BarChart3, TrendingUp, Users, Clock, Award, Target } from "lucide-react"

export function Analytics() {
  const analyticsData = [
    { metric: "Course Completion Rate", value: 87, change: "+5%", trend: "up" },
    { metric: "Average Study Time", value: 45, change: "+12%", trend: "up" },
    { metric: "Student Engagement", value: 92, change: "+8%", trend: "up" },
    { metric: "Assessment Success Rate", value: 78, change: "-2%", trend: "down" },
  ]

  const topPerformers = [
    { name: "Jalani Rao", score: 95, courses: 6, badges: 12 },
    { name: "Mala Singh", score: 92, courses: 4, badges: 8 },
    { name: "Kala Devi", score: 89, courses: 5, badges: 10 },
    { name: "Shalini Kumar", score: 85, courses: 3, badges: 6 },
    { name: "Dushy Patel", score: 78, courses: 2, badges: 4 },
  ]

  const subjectPerformance = [
    { subject: "Mathematics", avgScore: 85, students: 45, improvement: "+3%" },
    { subject: "Science", avgScore: 78, students: 52, improvement: "+7%" },
    { subject: "English", avgScore: 92, students: 38, improvement: "+2%" },
    { subject: "History", avgScore: 67, students: 29, improvement: "-1%" },
    { subject: "Geography", avgScore: 73, students: 33, improvement: "+5%" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics & Reports</h1>
        <p className="text-muted-foreground">Comprehensive insights into learning performance and engagement</p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {analyticsData.map((data, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{data.metric}</CardTitle>
              {data.trend === "up" ? (
                <TrendingUp className="h-4 w-4 text-green-600" />
              ) : (
                <TrendingUp className="h-4 w-4 text-red-600 rotate-180" />
              )}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data.value}%</div>
              <p className="text-xs text-muted-foreground">
                <span className={data.trend === "up" ? "text-green-600" : "text-red-600"}>{data.change}</span> from last
                month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Top Performers */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Top Performers
            </CardTitle>
            <CardDescription>Students with highest overall scores</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPerformers.map((student, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-medium">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{student.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {student.courses} courses • {student.badges} badges
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">{student.score}%</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Subject Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Subject Performance
            </CardTitle>
            <CardDescription>Average scores and improvement trends</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {subjectPerformance.map((subject, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{subject.subject}</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{subject.students} students</Badge>
                      <span className="text-sm font-medium">{subject.avgScore}%</span>
                      <span
                        className={`text-xs ${subject.improvement.startsWith("+") ? "text-green-600" : "text-red-600"}`}
                      >
                        {subject.improvement}
                      </span>
                    </div>
                  </div>
                  <Progress value={subject.avgScore} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Analytics */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Student Engagement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm">Daily Active Users</span>
                <span className="font-medium">156</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Weekly Active Users</span>
                <span className="font-medium">203</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Monthly Active Users</span>
                <span className="font-medium">245</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Retention Rate</span>
                <span className="font-medium text-green-600">89%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Learning Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm">Avg. Session Duration</span>
                <span className="font-medium">45 min</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Total Learning Hours</span>
                <span className="font-medium">1,234 hrs</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Peak Learning Time</span>
                <span className="font-medium">2-4 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Weekend Activity</span>
                <span className="font-medium text-blue-600">65%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Goals & Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm">Goals Completed</span>
                <span className="font-medium">87%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Certificates Earned</span>
                <span className="font-medium">156</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Badges Awarded</span>
                <span className="font-medium">342</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Streak Record</span>
                <span className="font-medium text-orange-600">23 days</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
