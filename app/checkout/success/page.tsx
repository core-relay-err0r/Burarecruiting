import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Clock, Mail } from "lucide-react"
import Link from "next/link"

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <CardTitle className="text-3xl">Order Confirmed!</CardTitle>
          <CardDescription>Your payment has been processed successfully</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-slate-50 p-6 rounded-lg space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Order ID</span>
              <span className="font-mono font-semibold">#BR-2025-001</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Package</span>
              <span className="font-semibold">Standard (10 CVs)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Delivery Time</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span className="font-semibold">24-48 hours</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-600" />
              What happens next?
            </h3>
            <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside">
              <li>You'll receive an order confirmation email shortly</li>
              <li>Our team will start sourcing candidates from LinkedIn and JobsDB</li>
              <li>Each CV will be pre-screened and matched to your requirements</li>
              <li>You'll receive all CVs within 24-48 hours via email and your dashboard</li>
            </ol>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-900">
              <strong>Track your order:</strong> Access your dashboard to see real-time updates on your CV delivery
              progress.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild className="flex-1">
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
            <Button asChild variant="outline" className="flex-1 bg-transparent">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
