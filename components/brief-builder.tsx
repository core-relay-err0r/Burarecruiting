"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Sparkles, X } from "lucide-react"

type BriefStep = "basic" | "details" | "skills" | "review"

export function BriefBuilder() {
  const [step, setStep] = useState<BriefStep>("basic")
  const [isGenerating, setIsGenerating] = useState(false)

  // Form state
  const [jobTitle, setJobTitle] = useState("")
  const [industry, setIndustry] = useState("")
  const [experienceLevel, setExperienceLevel] = useState("")
  const [workType, setWorkType] = useState("")
  const [location, setLocation] = useState("")
  const [salaryRange, setSalaryRange] = useState("")
  const [responsibilities, setResponsibilities] = useState("")
  const [requiredSkills, setRequiredSkills] = useState<string[]>([])
  const [preferredSkills, setPreferredSkills] = useState<string[]>([])
  const [skillInput, setSkillInput] = useState("")
  const [education, setEducation] = useState("")
  const [additionalNotes, setAdditionalNotes] = useState("")
  const [generatedBrief, setGeneratedBrief] = useState("")

  const handleAddSkill = (type: "required" | "preferred") => {
    if (!skillInput.trim()) return

    if (type === "required") {
      setRequiredSkills([...requiredSkills, skillInput.trim()])
    } else {
      setPreferredSkills([...preferredSkills, skillInput.trim()])
    }
    setSkillInput("")
  }

  const handleRemoveSkill = (type: "required" | "preferred", index: number) => {
    if (type === "required") {
      setRequiredSkills(requiredSkills.filter((_, i) => i !== index))
    } else {
      setPreferredSkills(preferredSkills.filter((_, i) => i !== index))
    }
  }

  const handleGenerateBrief = async () => {
    setIsGenerating(true)
    // Simulate AI generation
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const brief = `Job Title: ${jobTitle}
Industry: ${industry}
Experience Level: ${experienceLevel}

Key Responsibilities:
${responsibilities}

Required Skills:
${requiredSkills.join(", ")}

Preferred Skills:
${preferredSkills.join(", ")}

Education: ${education}
Work Type: ${workType}
Location: ${location}
Salary Range: ${salaryRange}

Additional Notes:
${additionalNotes}`

    setGeneratedBrief(brief)
    setIsGenerating(false)
    setStep("review")
  }

  const canProceed = () => {
    switch (step) {
      case "basic":
        return jobTitle && industry && experienceLevel
      case "details":
        return workType && location && responsibilities
      case "skills":
        return requiredSkills.length > 0
      default:
        return true
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>AI-Powered Job Brief</CardTitle>
            <CardDescription>
              Step {step === "basic" ? "1" : step === "details" ? "2" : step === "skills" ? "3" : "4"} of 4
            </CardDescription>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>AI Assisted</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Step 1: Basic Info */}
        {step === "basic" && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="jobTitle">Job Title *</Label>
              <Input
                id="jobTitle"
                placeholder="e.g., Senior Software Engineer"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="industry">Industry *</Label>
              <Select value={industry} onValueChange={setIndustry}>
                <SelectTrigger>
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="experienceLevel">Experience Level *</Label>
              <Select value={experienceLevel} onValueChange={setExperienceLevel}>
                <SelectTrigger>
                  <SelectValue placeholder="Select experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                  <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                  <SelectItem value="senior">Senior (6-10 years)</SelectItem>
                  <SelectItem value="lead">Lead/Principal (10+ years)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {/* Step 2: Job Details */}
        {step === "details" && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="workType">Work Type *</Label>
              <Select value={workType} onValueChange={setWorkType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select work type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                  <SelectItem value="onsite">On-site</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location *</Label>
              <Input
                id="location"
                placeholder="e.g., Bangkok, Thailand"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="salaryRange">Salary Range (Optional)</Label>
              <Input
                id="salaryRange"
                placeholder="e.g., ฿50,000 - ฿80,000"
                value={salaryRange}
                onChange={(e) => setSalaryRange(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="responsibilities">Key Responsibilities *</Label>
              <Textarea
                id="responsibilities"
                placeholder="Describe the main responsibilities for this role..."
                rows={5}
                value={responsibilities}
                onChange={(e) => setResponsibilities(e.target.value)}
              />
            </div>
          </div>
        )}

        {/* Step 3: Skills */}
        {step === "skills" && (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Required Skills *</Label>
              <div className="flex gap-2">
                <Input
                  placeholder="Add a required skill..."
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault()
                      handleAddSkill("required")
                    }
                  }}
                />
                <Button type="button" onClick={() => handleAddSkill("required")} variant="outline">
                  Add
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {requiredSkills.map((skill, index) => (
                  <Badge key={index} variant="default" className="gap-1">
                    {skill}
                    <button onClick={() => handleRemoveSkill("required", index)} className="ml-1 hover:text-red-600">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Preferred Skills (Optional)</Label>
              <div className="flex gap-2">
                <Input
                  placeholder="Add a preferred skill..."
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault()
                      handleAddSkill("preferred")
                    }
                  }}
                />
                <Button type="button" onClick={() => handleAddSkill("preferred")} variant="outline">
                  Add
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {preferredSkills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="gap-1">
                    {skill}
                    <button onClick={() => handleRemoveSkill("preferred", index)} className="ml-1 hover:text-red-600">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="education">Education Requirements (Optional)</Label>
              <Input
                id="education"
                placeholder="e.g., Bachelor's degree in Computer Science"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="additionalNotes">Additional Notes (Optional)</Label>
              <Textarea
                id="additionalNotes"
                placeholder="Any other requirements or preferences..."
                rows={3}
                value={additionalNotes}
                onChange={(e) => setAdditionalNotes(e.target.value)}
              />
            </div>
          </div>
        )}

        {/* Step 4: Review */}
        {step === "review" && (
          <div className="space-y-4">
            <div className="bg-slate-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600" />
                Generated Job Brief
              </h3>
              <pre className="text-sm text-slate-700 whitespace-pre-wrap font-sans">{generatedBrief}</pre>
            </div>
            <p className="text-sm text-slate-600">
              Review your job brief above. You can go back to edit or proceed to select a package.
            </p>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-6 pt-6 border-t">
          <Button
            variant="outline"
            onClick={() => {
              if (step === "details") setStep("basic")
              else if (step === "skills") setStep("details")
              else if (step === "review") setStep("skills")
            }}
            disabled={step === "basic"}
          >
            Back
          </Button>

          {step !== "review" ? (
            <Button
              onClick={() => {
                if (step === "basic") setStep("details")
                else if (step === "details") setStep("skills")
                else if (step === "skills") handleGenerateBrief()
              }}
              disabled={!canProceed() || isGenerating}
            >
              {step === "skills" ? (
                isGenerating ? (
                  <>
                    <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Generate Brief
                  </>
                )
              ) : (
                "Next"
              )}
            </Button>
          ) : (
            <Button onClick={() => (window.location.href = "#packages")}>Select Package</Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
