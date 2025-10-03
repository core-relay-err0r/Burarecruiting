import { AdminStats } from "@/components/admin/admin-stats"
import { AdminOrdersList } from "@/components/admin/admin-orders-list"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">BR</span>
            </div>
            <div>
              <span className="font-bold text-xl">Burarecruiting</span>
              <span className="ml-2 text-xs bg-red-100 text-red-700 px-2 py-1 rounded">Admin</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium">AD</span>
              </div>
              <span className="text-sm font-medium">Admin User</span>
            </div>
            <Button variant="outline" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-slate-600">Manage orders, track metrics, and deliver CVs</p>
        </div>

        <AdminStats />

        <div className="mt-8">
          <AdminOrdersList />
        </div>
      </main>
    </div>
  )
}
