"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, Package, Calendar, DollarSign, Upload, Plus, MessageSquare } from "lucide-react"

export function AdminOrderManagement({ orderId }: { orderId: string }) {
  const [newNote, setNewNote] = useState("")
  const [orderStatus, setOrderStatus] = useState("processing")

  // Mock data
  const order = {
    id: orderId,
    customerName: "Jane Smith",
    customerEmail: "jane@startup.com",
    customerPhone: "+66 82 345 6789",
    jobTitle: "Marketing Manager",
    package: "Express",
    cvCount: 5,
    cvsDelivered: 3,
    status: "processing",
    createdAt: "2025-01-16",
    deadline: "2025-01-18",
    totalPrice: 5349,
    jobBrief: {
      industry: "Marketing",
      experienceLevel: "Mid Level (3-5 years)",
      workType: "Hybrid",
      location: "Bangkok, Thailand",
      salaryRange: "฿50,000 - ฿70,000",
      requiredSkills: ["Digital Marketing", "SEO", "Content Strategy", "Analytics"],
    },
    notes: [
      {
        id: "1",
        adminName: "Admin User",
        note: "Started sourcing candidates from LinkedIn",
        createdAt: "2025-01-16T10:00:00",
      },
      {
        id: "2",
        adminName: "Admin User",
        note: "Delivered first 3 CVs to customer",
        createdAt: "2025-01-16T15:30:00",
      },
    ],
  }

  const handleAddNote = () => {
    if (!newNote.trim()) return
    // Add note logic here
    setNewNote("")
  }

  const handleUpdateStatus = () => {
    // Update status logic here
  }

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold">{order.jobTitle}</h1>
          <Badge className="bg-blue-100 text-blue-700">Processing</Badge>
        </div>
        <p className="text-slate-600">
          {order.customerName} • {order.customerEmail}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Order Info */}
        <Card>
          <CardHeader>
            <CardTitle>Order Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Package</p>
                <p className="font-semibold">{order.package}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Revenue</p>
                <p className="font-semibold">฿{order.totalPrice.toLocaleString()}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Created</p>
                <p className="font-semibold">{new Date(order.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Deadline</p>
                <p className="font-semibold">{new Date(order.deadline).toLocaleDateString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Customer Info */}
        <Card>
          <CardHeader>
            <CardTitle>Customer Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="text-sm text-slate-600 mb-1">Name</p>
              <p className="font-medium">{order.customerName}</p>
            </div>
            <div>
              <p className="text-sm text-slate-600 mb-1">Email</p>
              <p className="font-medium">{order.customerEmail}</p>
            </div>
            <div>
              <p className="text-sm text-slate-600 mb-1">Phone</p>
              <p className="font-medium">{order.customerPhone}</p>
            </div>
            <div className="pt-3 border-t">
              <Button variant="outline" className="w-full bg-transparent" size="sm">
                Contact Customer
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Status Management */}
        <Card>
          <CardHeader>
            <CardTitle>Order Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Current Status</Label>
              <Select value={orderStatus} onValueChange={setOrderStatus}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>CVs Delivered</Label>
              <div className="flex items-center gap-2">
                <Input type="number" value={order.cvsDelivered} className="flex-1" />
                <span className="text-sm text-slate-600">/ {order.cvCount}</span>
              </div>
            </div>
            <Button onClick={handleUpdateStatus} className="w-full">
              Update Status
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Job Brief */}
      <Card>
        <CardHeader>
          <CardTitle>Job Brief</CardTitle>
          <CardDescription>Requirements for candidate sourcing</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div>
                <p className="text-sm text-slate-600 mb-1">Industry</p>
                <p className="font-medium">{order.jobBrief.industry}</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-1">Experience Level</p>
                <p className="font-medium">{order.jobBrief.experienceLevel}</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-1">Work Type</p>
                <p className="font-medium">{order.jobBrief.workType}</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-slate-600 mb-1">Location</p>
                <p className="font-medium">{order.jobBrief.location}</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-1">Salary Range</p>
                <p className="font-medium">{order.jobBrief.salaryRange}</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-1">Required Skills</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {order.jobBrief.requiredSkills.map((skill) => (
                    <Badge key={skill} variant="default">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upload CV */}
      <Card>
        <CardHeader>
          <CardTitle>Upload Candidate CV</CardTitle>
          <CardDescription>Add a new candidate to this order</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Candidate Name</Label>
              <Input placeholder="Full name" />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" placeholder="email@example.com" />
            </div>
            <div className="space-y-2">
              <Label>LinkedIn URL</Label>
              <Input placeholder="https://linkedin.com/in/..." />
            </div>
            <div className="space-y-2">
              <Label>Match Score</Label>
              <Input type="number" placeholder="0-100" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label>Candidate Summary</Label>
              <Textarea placeholder="Brief summary of candidate's experience and qualifications..." rows={3} />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label>CV File</Label>
              <div className="border-2 border-dashed rounded-lg p-6 text-center hover:bg-slate-50 transition-colors cursor-pointer">
                <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <p className="text-sm text-slate-600">Click to upload or drag and drop</p>
                <p className="text-xs text-slate-500 mt-1">PDF, DOC, DOCX (max 5MB)</p>
              </div>
            </div>
          </div>
          <Button className="w-full mt-4">
            <Plus className="w-4 h-4 mr-2" />
            Add Candidate
          </Button>
        </CardContent>
      </Card>

      {/* Admin Notes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            Admin Notes
          </CardTitle>
          <CardDescription>Internal notes and updates for this order</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 mb-4">
            {order.notes.map((note) => (
              <div key={note.id} className="bg-slate-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-sm">{note.adminName}</span>
                  <span className="text-xs text-slate-500">{new Date(note.createdAt).toLocaleString()}</span>
                </div>
                <p className="text-sm text-slate-700">{note.note}</p>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <Textarea
              placeholder="Add a note about this order..."
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              rows={3}
            />
            <Button onClick={handleAddNote} disabled={!newNote.trim()}>
              Add Note
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
