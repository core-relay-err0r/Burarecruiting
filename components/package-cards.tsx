"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

const packages = [
  {
    id: "express",
    name: "Express",
    price: "฿4,999",
    cvCount: 5,
    deliveryTime: "24-48 hours",
    features: [
      "5 pre-screened CVs",
      "LinkedIn & JobsDB sourcing",
      "Basic match scoring",
      "Email delivery",
      "7-day support",
    ],
    popular: false,
  },
  {
    id: "standard",
    name: "Standard",
    price: "฿8,999",
    cvCount: 10,
    deliveryTime: "24-48 hours",
    features: [
      "10 pre-screened CVs",
      "LinkedIn & JobsDB sourcing",
      "Advanced match scoring",
      "Priority email delivery",
      "Candidate summaries",
      "14-day support",
    ],
    popular: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: "฿15,999",
    cvCount: 20,
    deliveryTime: "24-48 hours",
    features: [
      "20 pre-screened CVs",
      "LinkedIn & JobsDB sourcing",
      "AI-powered match scoring",
      "Priority delivery",
      "Detailed candidate summaries",
      "Phone screening notes",
      "30-day support",
      "Replacement guarantee",
    ],
    popular: false,
  },
]

export function PackageCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {packages.map((pkg) => (
        <Card key={pkg.name} className={pkg.popular ? "border-blue-600 border-2 relative" : ""}>
          {pkg.popular && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-medium">
              Most Popular
            </div>
          )}
          <CardHeader>
            <CardTitle className="text-2xl">{pkg.name}</CardTitle>
            <CardDescription>{pkg.deliveryTime} delivery</CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold">{pkg.price}</span>
              <span className="text-slate-600 ml-2">/ order</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {pkg.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full" variant={pkg.popular ? "default" : "outline"}>
              <Link href={`/checkout?package=${pkg.id}`}>Select {pkg.name}</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
