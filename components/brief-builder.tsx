"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sparkles, FileText, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export function BriefBuilder() {
  const { t } = useLanguage()
  const [jobDescription, setJobDescription] = useState("")
  const [charCount, setCharCount] = useState(0)
  const [email, setEmail] = useState("")
  const [fullName, setFullName] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value
    setJobDescription(text)
    setCharCount(text.length)
  }

  const handleSubmit = async () => {
    if (jobDescription.trim().length < 100) {
      alert("Please provide more details (at least 100 characters) to help us find the best candidates.")
      return
    }

    if (!email || !fullName || !companyName || !phone) {
      alert("Please fill in all contact fields.")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-brief", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jobDescription,
          email,
          fullName,
          companyName,
          phone,
        }),
      })

      if (response.ok) {
        setIsSuccess(true)
        // Reset form
        setJobDescription("")
        setEmail("")
        setFullName("")
        setCompanyName("")
        setPhone("")
        setCharCount(0)
      } else {
        alert("Failed to send request. Please try again.")
      }
    } catch (error) {
      console.error("Error sending brief:", error)
      alert("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <Card>
        <CardContent className="py-12">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold">Request Sent Successfully!</h3>
            <p className="text-slate-600 max-w-md mx-auto">
              Thank you for your request. We'll review your job description and contact you shortly with qualified
              candidates.
            </p>
            <Button onClick={() => setIsSuccess(false)} variant="outline">
              Submit Another Request
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              {t.briefBuilder.form.label}
            </CardTitle>
            <CardDescription>{t.briefBuilder.subtitle}</CardDescription>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>AI</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4 pb-4 border-b">
          <h4 className="font-semibold text-sm">Contact Information</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name *</Label>
              <Input
                id="companyName"
                placeholder="Your Company Ltd."
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+66 XX XXX XXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="jobDescription">Job Description *</Label>
          <Textarea
            id="jobDescription"
            placeholder={t.briefBuilder.form.placeholder}
            rows={16}
            value={jobDescription}
            onChange={handleDescriptionChange}
            className="resize-none font-sans"
          />
          <div className="flex items-center justify-between text-sm">
            <span className={charCount < 100 ? "text-orange-600" : "text-slate-500"}>
              {charCount} {t.briefBuilder.form.charCount} {charCount < 100 && `(minimum 100)`}
            </span>
          </div>
        </div>

        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong className="text-slate-900">💡 </strong>
            {t.briefBuilder.form.proTip}
          </p>
        </div>

        <Button
          onClick={handleSubmit}
          size="lg"
          className="w-full"
          disabled={isSubmitting || jobDescription.trim().length === 0 || !email || !fullName || !companyName || !phone}
        >
          <Sparkles className="w-4 h-4 mr-2" />
          {isSubmitting ? "Sending..." : t.briefBuilder.form.submit}
        </Button>
      </CardContent>
    </Card>
  )
}
