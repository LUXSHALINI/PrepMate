"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Plus, MoreHorizontal, Mail, Phone, MapPin, GraduationCap } from "lucide-react"

export function StudentManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [students] = useState([
    {
      id: 1,
      name: "Shalini Kumar",
      email: "shalini@example.com",
      school: "ABC School",
      progress: "Medium",
      courses: 3,
      lastActive: "2 hours ago",
      phone: "+91 98765 43210",
      location: "Mumbai, India",
    },
    {
      id: 2,
      name: "Kala Devi",
      email: "kala@example.com",
      school: "XYZ School",
      progress: "Strong",
      courses: 5,
      lastActive: "1 day ago",
      phone: "+91 98765 43211",
      location: "Delhi, India",
    },
    {
      id: 3,
      name: "Mala Singh",
      email: "mala@example.com",
      school: "XYZ School",
      progress: "Strong",
      courses: 4,
      lastActive: "3 hours ago",
      phone: "+91 98765 43212",
      location: "Bangalore, India",
    },
    {
      id: 4,
      name: "Dushy Patel",
      email: "dushy@example.com",
      school: "PQR School",
      progress: "Weak",
      courses: 2,
      lastActive: "1 week ago",
      phone: "+91 98765 43213",
      location: "Pune, India",
    },
    {
      id: 5,
      name: "Jalani Rao",
      email: "jalani@example.com",
      school: "ABC School",
      progress: "Strong",
      courses: 6,
      lastActive: "5 hours ago",
      phone: "+91 98765 43214",
      location: "Chennai, India",
    },
  ])

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.school.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getProgressBadge = (progress) => {
    switch (progress) {
      case "Strong":
        return <Badge className="bg-green-100 text-green-800">Strong</Badge>
      case "Medium":
        return <Badge className="bg-yellow-100 text-yellow-800">Medium</Badge>
      case "Weak":
        return <Badge className="bg-red-100 text-red-800">Weak</Badge>
      default:
        return <Badge variant="secondary">{progress}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Student Management</h1>
          <p className="text-muted-foreground">Manage and monitor student progress and activities</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Student
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Student</DialogTitle>
              <DialogDescription>Enter student details to add them to the system</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input id="email" type="email" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="school" className="text-right">
                  School
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select school" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="abc">ABC School</SelectItem>
                    <SelectItem value="xyz">XYZ School</SelectItem>
                    <SelectItem value="pqr">PQR School</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button>Add Student</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            Students Overview
          </CardTitle>
          <CardDescription>Total of {students.length} students registered</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search students..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>School</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Courses</TableHead>
                  <TableHead>Last Active</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStudents.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{student.name}</div>
                        <div className="text-sm text-muted-foreground">{student.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>{student.school}</TableCell>
                    <TableCell>{getProgressBadge(student.progress)}</TableCell>
                    <TableCell>{student.courses} courses</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{student.lastActive}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Mail className="h-4 w-4 mr-2" />
                            Send Message
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Phone className="h-4 w-4 mr-2" />
                            Call Student
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <MapPin className="h-4 w-4 mr-2" />
                            View Profile
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
