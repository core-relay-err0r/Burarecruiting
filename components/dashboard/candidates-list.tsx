"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, ExternalLink, Mail, Phone, Linkedin } from "lucide-react"

const mockCandidates = [
  {
    id: "1",
    fullName: "Somchai Prasert",
    email: "somchai.p@email.com",
    phone: "+66 81 234 5678",
    linkedinUrl: "https://linkedin.com/in/somchai-prasert",
    currentPosition: "Senior Software Engineer",
    currentCompany: "Tech Corp Thailand",
    yearsExperience: 8,
    matchScore: 95,
    summary:
      "Experienced full-stack developer with 8 years in React, Node.js, and AWS. Led multiple successful projects and mentored junior developers.",
    cvFileUrl: "/cvs/somchai-prasert.pdf",
  },
  {
    id: "2",
    fullName: "Nattapong Wongchai",
    email: "nattapong.w@email.com",
    phone: "+66 82 345 6789",
    linkedinUrl: "https://linkedin.com/in/nattapong-w",
    currentPosition: "Lead Software Engineer",
    currentCompany: "Digital Solutions Ltd",
    yearsExperience: 10,
    matchScore: 92,
    summary:
      "Technical lead with extensive experience in system architecture and team management. Strong background in cloud technologies.",
    cvFileUrl: "/cvs/nattapong-wongchai.pdf",
  },
  {
    id: "3",
    fullName: "Apinya Srisawat",
    email: "apinya.s@email.com",
    phone: "+66 83 456 7890",
    linkedinUrl: "https://linkedin.com/in/apinya-srisawat",
    currentPosition: "Software Engineer",
    currentCompany: "Startup Hub",
    yearsExperience: 6,
    matchScore: 88,
    summary:
      "Passionate developer with strong skills in modern web technologies. Quick learner with experience in agile environments.",
    cvFileUrl: "/cvs/apinya-srisawat.pdf",
  },
]

export function CandidatesList({ orderId }: { orderId: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Delivered Candidates</CardTitle>
        <CardDescription>Pre-screened CVs matched to your requirements</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {mockCandidates.map((candidate) => (
            <div key={candidate.id} className="border rounded-lg p-6 hover:bg-slate-50 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-xl">{candidate.fullName}</h3>
                    <Badge className="bg-green-100 text-green-700">{candidate.matchScore}% Match</Badge>
                  </div>
                  <p className="text-slate-600 mb-1">
                    {candidate.currentPosition} at {candidate.currentCompany}
                  </p>
                  <p className="text-sm text-slate-500">{candidate.yearsExperience} years of experience</p>
                </div>
                <Button size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </div>

              <p className="text-sm text-slate-700 mb-4 leading-relaxed">{candidate.summary}</p>

              <div className="flex flex-wrap gap-4 text-sm">
                <a
                  href={`mailto:${candidate.email}`}
                  className="flex items-center gap-2 text-slate-600 hover:text-slate-900"
                >
                  <Mail className="w-4 h-4" />
                  {candidate.email}
                </a>
                <a
                  href={`tel:${candidate.phone}`}
                  className="flex items-center gap-2 text-slate-600 hover:text-slate-900"
                >
                  <Phone className="w-4 h-4" />
                  {candidate.phone}
                </a>
                <a
                  href={candidate.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn Profile
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
