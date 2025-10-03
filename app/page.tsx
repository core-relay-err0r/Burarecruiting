import { BriefBuilder } from "@/components/brief-builder"
import { PackageCards } from "@/components/package-cards"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Clock, Users, Zap } from "lucide-react"

export default function HomePage() {
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
              How It Works
            </a>
            <a href="#packages" className="text-sm text-slate-600 hover:text-slate-900">
              Packages
            </a>
            <a href="#brief-builder" className="text-sm text-slate-600 hover:text-slate-900">
              Create Brief
            </a>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Clock className="w-4 h-4" />
            <span>Express CV Delivery in 24-48 Hours</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 text-balance">
            Get Qualified Candidates Delivered to Your Inbox
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 text-pretty leading-relaxed">
            Skip the endless screening. Our AI-powered platform finds and delivers pre-screened CVs from LinkedIn and
            JobsDB, matched to your exact requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto">
              <a href="#brief-builder">Start Your Brief</a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
              <a href="#packages">View Packages</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Burarecruiting?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Lightning Fast</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Receive qualified CVs within 24-48 hours. No more weeks of waiting for applications.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Pre-Screened Quality</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Every CV is manually reviewed and matched to your requirements before delivery.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">LinkedIn & JobsDB</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Access to Thailand's largest talent pools with verified professional profiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Create Your Job Brief</h3>
                <p className="text-slate-600 leading-relaxed">
                  Use our AI-powered brief builder to describe your ideal candidate. Answer a few questions and let AI
                  generate a comprehensive job brief.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Choose Your Package</h3>
                <p className="text-slate-600 leading-relaxed">
                  Select from Express (5 CVs), Standard (10 CVs), or Premium (20 CVs) packages based on your hiring
                  needs.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Receive Qualified CVs</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our team sources and screens candidates from LinkedIn and JobsDB, delivering only the best matches
                  within 24-48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="container mx-auto px-4 py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Choose Your Package</h2>
          <p className="text-center text-slate-600 mb-12">
            All packages include pre-screened CVs from LinkedIn and JobsDB
          </p>
          <PackageCards />
        </div>
      </section>

      {/* Brief Builder Section */}
      <section id="brief-builder" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Create Your Job Brief</h2>
          <p className="text-center text-slate-600 mb-12">
            Answer a few questions and let our AI generate a comprehensive job brief
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
              <p className="text-sm text-slate-600">Express CV delivery for modern recruiters</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <a href="#packages">Packages</a>
                </li>
                <li>
                  <a href="#how-it-works">How It Works</a>
                </li>
                <li>
                  <a href="#brief-builder">Create Brief</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-8 pt-8 border-t text-center text-sm text-slate-600">
            © 2025 Burarecruiting. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
