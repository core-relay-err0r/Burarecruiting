"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, Package, Eye, Search } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const mockOrders = [
  {
    id: "BR-2025-001",
    customerName: "John Doe",
    customerEmail: "john@company.com",
    jobTitle: "Senior Software Engineer",
    package: "Standard",
    cvCount: 10,
    cvsDelivered: 10,
    status: "completed",
    createdAt: "2025-01-15",
    deadline: "2025-01-17",
    totalPrice: 9613,
  },
  {
    id: "BR-2025-002",
    customerName: "Jane Smith",
    customerEmail: "jane@startup.com",
    jobTitle: "Marketing Manager",
    package: "Express",
    cvCount: 5,
    cvsDelivered: 3,
    status: "processing",
    createdAt: "2025-01-16",
    deadline: "2025-01-18",
    totalPrice: 5349,
  },
  {
    id: "BR-2025-003",
    customerName: "Bob Wilson",
    customerEmail: "bob@design.co",
    jobTitle: "Product Designer",
    package: "Premium",
    cvCount: 20,
    cvsDelivered: 0,
    status: "pending",
    createdAt: "2025-01-17",
    deadline: "2025-01-19",
    totalPrice: 17119,
  },
]

const statusConfig = {
  pending: { label: "Pending", color: "bg-slate-100 text-slate-700" },
  processing: { label: "Processing", color: "bg-blue-100 text-blue-700" },
  completed: { label: "Completed", color: "bg-green-100 text-green-700" },
  cancelled: { label: "Cancelled", color: "bg-red-100 text-red-700" },
}

export function AdminOrdersList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>All Orders</CardTitle>
            <CardDescription>Manage and track customer orders</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              placeholder="Search by order ID, customer, or job title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {mockOrders.map((order) => (
            <div key={order.id} className="border rounded-lg p-4 hover:bg-slate-50 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg">{order.jobTitle}</h3>
                    <Badge className={statusConfig[order.status as keyof typeof statusConfig].color}>
                      {statusConfig[order.status as keyof typeof statusConfig].label}
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-600 mb-1">
                    {order.customerName} • {order.customerEmail}
                  </p>
                  <p className="text-sm text-slate-500">Order ID: {order.id}</p>
                </div>
                <Button asChild variant="outline" size="sm">
                  <Link href={`/admin/orders/${order.id}`}>
                    <Eye className="w-4 h-4 mr-2" />
                    Manage
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                <div>
                  <p className="text-slate-600 mb-1">Package</p>
                  <div className="flex items-center gap-1 font-medium">
                    <Package className="w-4 h-4 text-blue-600" />
                    {order.package}
                  </div>
                </div>
                <div>
                  <p className="text-slate-600 mb-1">CVs Progress</p>
                  <p className="font-medium">
                    {order.cvsDelivered} / {order.cvCount}
                  </p>
                </div>
                <div>
                  <p className="text-slate-600 mb-1">Revenue</p>
                  <p className="font-medium">฿{order.totalPrice.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-slate-600 mb-1">Created</p>
                  <p className="font-medium">{new Date(order.createdAt).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-slate-600 mb-1">Deadline</p>
                  <div className="flex items-center gap-1 font-medium">
                    <Clock className="w-4 h-4 text-orange-600" />
                    {new Date(order.deadline).toLocaleDateString()}
                  </div>
                </div>
              </div>

              {order.status === "processing" && (
                <div className="mt-3 pt-3 border-t">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-slate-600">Delivery Progress</span>
                    <span className="font-medium">{Math.round((order.cvsDelivered / order.cvCount) * 100)}%</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 transition-all"
                      style={{ width: `${(order.cvsDelivered / order.cvCount) * 100}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
