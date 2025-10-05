"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles, FileText } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export function BriefBuilder() {
  const { t } = useLanguage()
  const [jobDescription, setJobDescription] = useState("")
  const [charCount, setCharCount] = useState(0)

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value
    setJobDescription(text)
    setCharCount(text.length)
  }

  const handleSubmit = () => {
    if (jobDescription.trim().length < 100) {
      alert("Please provide more details (at least 100 characters) to help us find the best candidates.")
      return
    }
    // Store the description and redirect to checkout
    localStorage.setItem("jobDescription", jobDescription)
    window.location.href = "/checkout"
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
        <div className="space-y-2">
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

        <Button onClick={handleSubmit} size="lg" className="w-full" disabled={jobDescription.trim().length === 0}>
          <Sparkles className="w-4 h-4 mr-2" />
          {t.briefBuilder.form.submit}
        </Button>
      </CardContent>
    </Card>
  )
}
