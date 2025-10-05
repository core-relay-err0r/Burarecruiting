"use client"

import { BriefBuilder } from "@/components/brief-builder"
import { PackageCards } from "@/components/package-cards"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Clock, Users, Zap } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl">Burarecruiting</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#how-it-works" className="text-sm text-slate-600 hover:text-slate-900">
              {t.nav.howItWorks}
            </a>
            <a href="#packages" className="text-sm text-slate-600 hover:text-slate-900">
              {t.nav.packages}
            </a>
            <a href="#brief-builder" className="text-sm text-slate-600 hover:text-slate-900">
              {t.nav.createBrief}
            </a>
            <LanguageSwitcher />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Clock className="w-4 h-4" />
            <span>{t.hero.badge}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 text-balance">{t.hero.title}</h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 text-pretty leading-relaxed">{t.hero.subtitle}</p>
          <div className="flex items-center justify-center">
            <Button size="lg">
              <a href="#brief-builder">{t.hero.cta}</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t.features.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{t.features.fast.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{t.features.fast.description}</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{t.features.quality.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{t.features.quality.description}</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{t.features.expert.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{t.features.expert.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t.howItWorks.title}</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{t.howItWorks.step1.title}</h3>
                <p className="text-slate-600 leading-relaxed">{t.howItWorks.step1.description}</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{t.howItWorks.step2.title}</h3>
                <p className="text-slate-600 leading-relaxed">{t.howItWorks.step2.description}</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{t.howItWorks.step3.title}</h3>
                <p className="text-slate-600 leading-relaxed">{t.howItWorks.step3.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="container mx-auto px-4 py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">{t.package.title}</h2>
          <p className="text-center text-slate-600 mb-12">{t.package.subtitle}</p>
          <PackageCards />
        </div>
      </section>

      {/* Brief Builder Section */}
      <section id="brief-builder" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">{t.briefBuilder.title}</h2>
          <p className="text-center text-slate-600 mb-4 leading-relaxed">{t.briefBuilder.subtitle}</p>
          <p className="text-center text-sm text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t.briefBuilder.description}
          </p>
          <BriefBuilder />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-slate-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg">Burarecruiting</span>
              </div>
              <h4 className="font-semibold mb-2">{t.footer.about.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{t.footer.about.description}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t.footer.careers.title}</h4>
              <p className="text-sm text-slate-600 mb-3 leading-relaxed">{t.footer.careers.hiring}</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• {t.footer.careers.positions.ai}</li>
                <li>• {t.footer.careers.positions.legal}</li>
              </ul>
              <p className="text-sm text-slate-600 mt-3">
                {t.footer.careers.contact}{" "}
                <a href="mailto:info@burakornpartners.com" className="text-blue-600 hover:underline">
                  info@burakornpartners.com
                </a>
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t.footer.contact.title}</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <span className="font-medium">{t.footer.contact.general}</span>
                  <br />
                  <a href="mailto:info@burakornpartners.com" className="text-blue-600 hover:underline">
                    info@burakornpartners.com
                  </a>
                </li>
                <li>
                  <span className="font-medium">{t.footer.contact.legal}</span>
                  <br />
                  <a href="mailto:legal@burakornpartners.com" className="text-blue-600 hover:underline">
                    legal@burakornpartners.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t.footer.legal.title}</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <a href="/privacy-policy" className="hover:text-slate-900">
                    {t.footer.legal.privacy}
                  </a>
                </li>
                <li>
                  <a href="/terms-of-service" className="hover:text-slate-900">
                    {t.footer.legal.terms}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-8 pt-8 border-t">
            <p className="text-center text-sm text-slate-600 mb-2">
              © 2025 Burakorn Partners Co., Ltd. {t.footer.copyright}
            </p>
            <p className="text-center text-xs text-slate-500">{t.footer.disclaimer}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
