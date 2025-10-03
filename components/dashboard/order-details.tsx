import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Package, Calendar, DollarSign } from "lucide-react"

export function OrderDetails({ orderId }: { orderId: string }) {
  // Mock data - would come from database
  const order = {
    id: orderId,
    jobTitle: "Senior Software Engineer",
    package: "Standard",
    cvCount: 10,
    cvsDelivered: 10,
    status: "completed",
    createdAt: "2025-01-15",
    deadline: "2025-01-17",
    totalPrice: 9613,
    jobBrief: {
      industry: "Technology",
      experienceLevel: "Senior (6-10 years)",
      workType: "Hybrid",
      location: "Bangkok, Thailand",
      salaryRange: "฿80,000 - ฿120,000",
      requiredSkills: ["React", "TypeScript", "Node.js", "AWS"],
      preferredSkills: ["Next.js", "GraphQL", "Docker"],
    },
  }

  const statusConfig = {
    pending: { label: "Pending", color: "bg-slate-100 text-slate-700" },
    processing: { label: "Processing", color: "bg-blue-100 text-blue-700" },
    completed: { label: "Completed", color: "bg-green-100 text-green-700" },
    cancelled: { label: "Cancelled", color: "bg-red-100 text-red-700" },
  }

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold">{order.jobTitle}</h1>
          <Badge className={statusConfig[order.status as keyof typeof statusConfig].color}>
            {statusConfig[order.status as keyof typeof statusConfig].label}
          </Badge>
        </div>
        <p className="text-slate-600">Order ID: {order.id}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
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
                <p className="text-sm text-slate-600">Total Paid</p>
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

        <Card>
          <CardHeader>
            <CardTitle>Job Brief</CardTitle>
            <CardDescription>Requirements for this position</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
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
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
