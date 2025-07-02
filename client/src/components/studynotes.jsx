"use client"

import { useState } from "react"
import { FileText, Plus, Trash2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/card"
import { Button } from "../components/button"
import { Input } from "../components/input"
import { Textarea } from "../components/textarea"
import { Badge } from "../components/badge"

const initialNotes = [
  {
    id: 1,
    title: "React Hooks",
    content: "useState and useEffect are fundamental hooks...",
    subject: "React",
    date: "2 days ago",
  },
  {
    id: 2,
    title: "CSS Grid",
    content: "Grid layout is powerful for 2D layouts...",
    subject: "CSS",
    date: "1 week ago",
  },
]

export default function StudyNotes() {
  const [notes, setNotes] = useState(initialNotes)
  const [showForm, setShowForm] = useState(false)
  const [newNote, setNewNote] = useState({ title: "", content: "", subject: "" })

  const addNote = () => {
    if (newNote.title.trim() && newNote.content.trim()) {
      setNotes([
        {
          id: Date.now(),
          ...newNote,
          date: "Just now",
        },
        ...notes,
      ])
      setNewNote({ title: "", content: "", subject: "" })
      setShowForm(false)
    }
  }

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FileText className="h-5 w-5 text-green-600" />
            <span>Study Notes</span>
          </div>
          <Button size="sm" variant="outline" onClick={() => setShowForm(!showForm)}>
            <Plus className="h-4 w-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {showForm && (
          <div className="space-y-3 p-3 border rounded-lg bg-slate-50">
            <Input
              placeholder="Note title..."
              value={newNote.title}
              onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
            />
            <Input
              placeholder="Subject..."
              value={newNote.subject}
              onChange={(e) => setNewNote({ ...newNote, subject: e.target.value })}
            />
            <Textarea
              placeholder="Write your note..."
              value={newNote.content}
              onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
              rows={3}
            />
            <div className="flex space-x-2">
              <Button size="sm" onClick={addNote}>
                Save Note
              </Button>
              <Button size="sm" variant="outline" onClick={() => setShowForm(false)}>
                Cancel
              </Button>
            </div>
          </div>
        )}

        <div className="space-y-3 max-h-64 overflow-y-auto">
          {notes.map((note) => (
            <div key={note.id} className="p-3 border rounded-lg hover:bg-slate-50 transition-colors">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{note.title}</h4>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2">{note.content}</p>
                </div>
                <Button size="sm" variant="ghost" onClick={() => deleteNote(note.id)}>
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-xs">
                  {note.subject}
                </Badge>
                <span className="text-xs text-slate-500">{note.date}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
