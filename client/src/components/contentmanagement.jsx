"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/card"
import { Button } from "../components/button"
import { Badge } from "../components/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/tabs"
import { Progress } from "../components/progress"
import { BookOpen, FileText, HelpCircle, Plus, Edit, Trash2 } from "lucide-react"

export function ContentManagement() {
  const [subjects] = useState([
    { id: 1, name: "Mathematics", chapters: 12, questions: 245, status: "Active" },
    { id: 2, name: "Science", chapters: 15, questions: 320, status: "Active" },
    { id: 3, name: "English", chapters: 10, questions: 180, status: "Active" },
    { id: 4, name: "History", chapters: 8, questions: 150, status: "Draft" },
    { id: 5, name: "Geography", chapters: 9, questions: 165, status: "Active" },
  ])

  const [chapters] = useState([
    { id: 1, title: "Algebra Basics", subject: "Mathematics", lessons: 8, completion: 85 },
    { id: 2, title: "Geometry", subject: "Mathematics", lessons: 12, completion: 92 },
    { id: 3, title: "Physics Laws", subject: "Science", lessons: 10, completion: 78 },
    { id: 4, title: "Chemical Reactions", subject: "Science", lessons: 15, completion: 65 },
    { id: 5, title: "Grammar Rules", subject: "English", lessons: 6, completion: 95 },
  ])

  const [questions] = useState([
    {
      id: 1,
      question: "What is the value of x in 2x + 5 = 15?",
      subject: "Mathematics",
      difficulty: "Easy",
      type: "MCQ",
    },
    {
      id: 2,
      question: "Explain Newton's first law of motion",
      subject: "Science",
      difficulty: "Medium",
      type: "Essay",
    },
    {
      id: 3,
      question: "Identify the parts of speech in the sentence",
      subject: "English",
      difficulty: "Easy",
      type: "Fill",
    },
    { id: 4, question: "Calculate the area of a triangle", subject: "Mathematics", difficulty: "Hard", type: "MCQ" },
    { id: 5, question: "What causes photosynthesis?", subject: "Science", difficulty: "Medium", type: "MCQ" },
  ])

  const getDifficultyBadge = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return <Badge className="bg-green-100 text-green-800">Easy</Badge>
      case "Medium":
        return <Badge className="bg-yellow-100 text-yellow-800">Medium</Badge>
      case "Hard":
        return <Badge className="bg-red-100 text-red-800">Hard</Badge>
      default:
        return <Badge variant="secondary">{difficulty}</Badge>
    }
  }

  const getStatusBadge = (status) => {
    return status === "Active" ? (
      <Badge className="bg-green-100 text-green-800">Active</Badge>
    ) : (
      <Badge className="bg-gray-100 text-gray-800">Draft</Badge>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Content Management</h1>
        <p className="text-muted-foreground">Manage subjects, chapters, and questions for your learning platform</p>
      </div>

      <Tabs defaultValue="subjects" className="space-y-4">
        <TabsList>
          <TabsTrigger value="subjects">Subjects</TabsTrigger>
          <TabsTrigger value="chapters">Chapters</TabsTrigger>
          <TabsTrigger value="questions">Questions</TabsTrigger>
        </TabsList>

        <TabsContent value="subjects" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Subjects
                  </CardTitle>
                  <CardDescription>Manage all subjects and their content</CardDescription>
                </div>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Subject
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {subjects.map((subject) => (
                  <Card key={subject.id}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{subject.name}</CardTitle>
                        {getStatusBadge(subject.status)}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Chapters:</span>
                          <span className="font-medium">{subject.chapters}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Questions:</span>
                          <span className="font-medium">{subject.questions}</span>
                        </div>
                        <div className="flex gap-2 pt-2">
                          <Button size="sm" variant="outline">
                            <Edit className="h-3 w-3 mr-1" />
                            Edit
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="h-3 w-3 mr-1" />
                            Delete
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="chapters" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Chapters
                  </CardTitle>
                  <CardDescription>Manage chapters and track completion rates</CardDescription>
                </div>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Chapter
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {chapters.map((chapter) => (
                  <Card key={chapter.id}>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-semibold">{chapter.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {chapter.subject} • {chapter.lessons} lessons
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Completion Rate</span>
                          <span>{chapter.completion}%</span>
                        </div>
                        <Progress value={chapter.completion} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="questions" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5" />
                    Questions
                  </CardTitle>
                  <CardDescription>Manage assessment questions and their difficulty levels</CardDescription>
                </div>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Question
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {questions.map((question) => (
                  <Card key={question.id}>
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="font-medium mb-2">{question.question}</p>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">{question.subject}</Badge>
                            {getDifficultyBadge(question.difficulty)}
                            <Badge variant="secondary">{question.type}</Badge>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
