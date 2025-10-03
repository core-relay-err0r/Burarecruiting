import { AdminOrderManagement } from "@/components/admin/admin-order-management"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AdminOrderDetailPage({ params }: { params: { id: string } }) {
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
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium">AD</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Link href="/admin" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Admin Dashboard
        </Link>

        <AdminOrderManagement orderId={params.id} />
      </main>
    </div>
  )
}
