"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/hooks/use-language"

export function PackageCards() {
  const { t } = useLanguage()

  return (
    <div className="max-w-md mx-auto">
      <Card className="border-blue-600 border-2 relative">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-medium">
          {t.package.card.badge}
        </div>
        <CardHeader>
          <CardTitle className="text-2xl">{t.package.card.title}</CardTitle>
          <CardDescription>24-48 {t.hero.badge.split(" ")[4]}</CardDescription>
          <div className="mt-4">
            <span className="text-4xl font-bold">{t.package.card.price}</span>
            <span className="text-slate-600 ml-2">USD</span>
          </div>
          <p className="text-sm text-slate-500">{t.package.card.priceNote}</p>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-600">
                <strong>{t.package.card.features.cvs}</strong>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-600">{t.package.card.features.delivery}</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-600">{t.package.card.features.sourcing}</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-600">{t.package.card.features.screening}</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-600">{t.package.card.features.support}</span>
            </li>
          </ul>
          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-xs font-semibold text-slate-700 mb-2">{t.package.card.limitations.title}:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-slate-500">{t.package.card.limitations.noSupport}</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-slate-500">{t.package.card.limitations.noScreening}</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-slate-500">{t.package.card.limitations.noGuarantee}</span>
              </li>
            </ul>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full">
            <Link href="/checkout?package=professional">{t.package.card.cta}</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
