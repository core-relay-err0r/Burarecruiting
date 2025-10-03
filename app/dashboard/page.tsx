import { OrdersList } from "@/components/dashboard/orders-list"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">BR</span>
            </div>
            <span className="font-bold text-xl">Burarecruiting</span>
          </div>
          <div className="flex items-center gap-4">
            <Button asChild>
              <Link href="/#brief-builder">
                <Plus className="w-4 h-4 mr-2" />
                New Order
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium">JD</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-slate-600">Track your CV delivery orders and manage candidates</p>
        </div>

        <DashboardStats />

        <div className="mt-8">
          <OrdersList />
        </div>
      </main>
    </div>
  )
}
