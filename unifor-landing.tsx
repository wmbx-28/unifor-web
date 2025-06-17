import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Wrench, Zap, Recycle, Briefcase, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center">
        <Link href="/" className="flex items-center justify-center">
          <div className="bg-red-600 text-white px-3 py-1 rounded font-bold text-lg">UNIFOR</div>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#about" className="text-sm font-medium hover:text-red-600 transition-colors">
            About
          </Link>
          <Link href="#solutions" className="text-sm font-medium hover:text-red-600 transition-colors">
            Solutions
          </Link>
          <Link href="#impact" className="text-sm font-medium hover:text-red-600 transition-colors">
            Impact
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-red-600 transition-colors">
            Contact
          </Link>
        </nav>
        <Button className="ml-4 bg-red-600 hover:bg-red-700">Join Today</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-slate-50 to-slate-100 py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="w-fit">
                    Automotive Industry Transformation
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Bridging the EV Skills Gap
                  </h1>
                  <p className="max-w-[600px] text-slate-600 md:text-xl">
                    As electric vehicles reshape the automotive industry, Unifor is leading the charge to retrain
                    technicians, create new opportunities, and ensure no worker is left behind in the transition to
                    sustainable transportation.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    Learn About Our Programs
                  </Button>
                  <Button variant="outline" size="lg">
                    Join Our Mission
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg blur opacity-75"></div>
                  <div className="relative bg-white p-8 rounded-lg shadow-xl">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-red-600">85%</div>
                        <div className="text-sm text-slate-600">Skills Gap Impact</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-red-600">50K+</div>
                        <div className="text-sm text-slate-600">Technicians Affected</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-red-600">2030</div>
                        <div className="text-sm text-slate-600">Target Year</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-red-600">100%</div>
                        <div className="text-sm text-slate-600">EV Ready Workforce</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="about" className="w-full py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">The Challenge We Face</h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The automotive industry is experiencing its biggest transformation in over a century. Traditional
                  technicians trained on mechanical systems now face electric vehicles with entirely different
                  technologies.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <Wrench className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold">Traditional Skills vs. EV Technology</h3>
                      <p className="text-slate-600">
                        Technicians skilled in fuel injection and engine blocks now need expertise in high-voltage
                        battery packs, power electronics, and regenerative braking systems.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Zap className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold">Equipment and Safety Gaps</h3>
                      <p className="text-slate-600">
                        Service shops lack specialized equipment like insulated tooling, high-voltage safety gear, and
                        diagnostic software for battery-management systems.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <TrendingUp className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold">Growing Market Demand</h3>
                      <p className="text-slate-600">
                        As EV adoption accelerates, the skills gap widens, leaving technicians at risk of losing
                        relevance and EV owners without reliable service options.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-slate-100 p-8 rounded-lg">
                  <div className="text-center space-y-4">
                    <div className="text-4xl font-bold text-red-600">The Skills Gap Crisis</div>
                    <p className="text-slate-600">
                      Without targeted intervention, thousands of skilled automotive workers risk unemployment while the
                      EV industry struggles to find qualified technicians.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Solutions</h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Unifor is implementing comprehensive programs to bridge the skills gap and create new opportunities in
                  the evolving automotive landscape.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 xl:grid-cols-3">
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-red-600" />
                  <CardTitle>Employee Reskilling Programs</CardTitle>
                  <CardDescription>
                    Comprehensive training initiatives funded by government partnerships to upskill existing
                    technicians.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• High-voltage safety certification</li>
                    <li>• Battery management system training</li>
                    <li>• EV diagnostic software proficiency</li>
                    <li>• Hands-on workshop experience</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Briefcase className="h-8 w-8 text-red-600" />
                  <CardTitle>Union Job Board</CardTitle>
                  <CardDescription>
                    Strategic workforce redistribution platform connecting skilled workers with emerging opportunities.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• Real-time job matching</li>
                    <li>• Skills assessment tools</li>
                    <li>• Career transition support</li>
                    <li>• Industry partnership network</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Recycle className="h-8 w-8 text-red-600" />
                  <CardTitle>Demanufacturing Initiative</CardTitle>
                  <CardDescription>
                    Creating new economic activities by recycling traditional vehicle parts for EV applications.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• Parts compatibility analysis</li>
                    <li>• Sustainable recycling processes</li>
                    <li>• New job creation in green economy</li>
                    <li>• Waste reduction strategies</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Collective Impact</h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our initiatives create a win-win-win scenario for manufacturers, workers, and government stakeholders.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-red-100 p-4 rounded-full">
                  <TrendingUp className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold">Manufacturers Benefit</h3>
                <p className="text-slate-600">
                  Access to a ready, skilled workforce trained specifically for EV technology requirements, reducing
                  hiring costs and training time.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-red-100 p-4 rounded-full">
                  <Users className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold">Workers Supported</h3>
                <p className="text-slate-600">
                  Union members receive comprehensive support, training, and job placement assistance to thrive in the
                  evolving automotive industry.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-red-100 p-4 rounded-full">
                  <Badge className="h-8 w-8 bg-red-600" />
                </div>
                <h3 className="text-xl font-bold">Government Recognition</h3>
                <p className="text-slate-600">
                  Positive public image through successful union partnerships that demonstrate effective workforce
                  transition and economic development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-red-600">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to Shape the Future?
                </h2>
                <p className="mx-auto max-w-[600px] text-red-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join Unifor in building a sustainable, skilled workforce for the electric vehicle revolution.
                  Together, we can ensure no worker is left behind.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-slate-100">
                  Become a Member
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-red-600"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        id="contact"
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-slate-50"
      >
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full">
          <div className="flex items-center">
            <div className="bg-red-600 text-white px-3 py-1 rounded font-bold text-lg">UNIFOR</div>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-xs hover:underline underline-offset-4 text-slate-600">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4 text-slate-600">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4 text-slate-600">
              Contact Us
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4 text-slate-600">
              Resources
            </Link>
          </nav>
          <div className="sm:ml-auto flex gap-4">
            <Link href="#" className="text-slate-600 hover:text-red-600">
              <span className="sr-only">Facebook</span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </Link>
            <Link href="#" className="text-slate-600 hover:text-red-600">
              <span className="sr-only">Twitter</span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </Link>
            <Link href="#" className="text-slate-600 hover:text-red-600">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
          </div>
        </div>
        <p className="text-xs text-slate-600 mt-4 sm:mt-0">© {new Date().getFullYear()} Unifor. All rights reserved.</p>
      </footer>
    </div>
  )
}
