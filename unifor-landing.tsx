import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Wrench, Recycle, Briefcase, TrendingUp, ClipboardList } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center">
        <Link href="/" className="flex items-center justify-center">
          <img
            src="./Unifor-core-RGB.png"
            width={100}
            height={100}
            alt="Unifor Logo"
            className="rounded-md"
          />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#about" className="text-sm font-medium hover:text-[#c31a1a] transition-colors">
            About
          </Link>
          <Link href="#solutions" className="text-sm font-medium hover:text-[#c31a1a] transition-colors">
            Solutions
          </Link>
          <Link href="#impact" className="text-sm font-medium hover:text-[#c31a1a] transition-colors">
            Impact
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-[#c31a1a] transition-colors">
            Contact
          </Link>
        </nav>
        <Link href="https://www.unifor.org/join-us" passHref>
          <Button className="ml-4 bg-[#c31a1a] hover:bg-red-500">Join Today</Button>
        </Link>
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
                    EV Transition Policy
                  </h1>
                  <p className="max-w-[600px] text-slate-600 md:text-xl">
                    As electric vehicles reshape the automotive industry, Unifor is leading the charge to retrain
                    technicians, create new opportunities, and ensure no worker is left behind in the transition to
                    sustainable transportation.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-[#c31a1a] hover:bg-red-500">
                    Learn About Our Programs
                  </Button>
                  <Link href="#contact" passHref>
                    <Button variant="outline" size="lg">
                      Join Our Mission
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c31a1a] to-orange-500 rounded-lg blur opacity-75"></div>
                  <div className="relative bg-white p-8 rounded-lg shadow-xl">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-[#c31a1a]">85%</div>
                        <div className="text-sm text-slate-600">Skills Gap Impact</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#c31a1a]">50K+</div>
                        <div className="text-sm text-slate-600">Technicians Affected</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#c31a1a]">2030</div>
                        <div className="text-sm text-slate-600">Target Year</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#c31a1a]">100%</div>
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
                    <Wrench className="h-6 w-6 text-[#c31a1a] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold">Traditional Skills vs. EV Technology</h3>
                      <p className="text-slate-600">
                        Technicians skilled in fuel injection and engine blocks now need expertise in high-voltage
                        battery packs, power electronics, and regenerative braking systems.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <ClipboardList className="h-6 w-6 text-[#c31a1a] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold">Inadequate Retraining Infrastructure</h3>
                      <p className="text-slate-600">{"There’s no cohesive labor infrastructure for retraining and certifying auto workers in EV technologies, leaving technicians vulnerable as ICE roles phase out."}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <TrendingUp className="h-6 w-6 text-[#c31a1a] mt-1 flex-shrink-0" />
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
                    <div className="text-4xl font-bold text-[#c31a1a]">The Skills Gap Crisis</div>
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Policy Proposal</h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Unifor is implementing comprehensive programs to bridge the skills gap and create new opportunities in
                  the evolving automotive landscape.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 xl:grid-cols-3">
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-[#c31a1a]" />
                  <CardTitle>National Reskilling and Certification Mandate</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>•  Unifor is hereby mandated to expand its existing training platform to include technical
education in electric vehicle (EV) systems, comprising instruction in high-voltage battery
handling, electric motor diagnostics, and workplace safety procedures.</li>
                    <li>• Training programs under this mandate shall be offered at no cost to participants and
delivered through accredited colleges, certified workplace partnerships, and online platforms,
with timetables structured to accommodate individuals employed on a full-time basis.</li>
                    <li>• All training materials and sessions shall be made accessible in multiple languages and
                    formats that reflect the linguistic and educational diversity of the workforce.</li>
                    <li>• Union members who possess demonstrable expertise in EV technologies shall be eligible
                    for recruitment and certification as instructors within the Unifor training framework.</li>
                    <li>• The Government of Canada shall provide income-replacement funding and bursaries to
participating workers, with the objective of offsetting the financial impact of reduced work hours
during training participation.</li>
                    <li>• Credentials awarded through the program shall receive joint recognition from Unifor, the
federal government, and participating automotive manufacturers, thereby supporting national
labor mobility and skills portability.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Briefcase className="h-8 w-8 text-[#c31a1a]" />
                  <CardTitle>Redevelopment of Economic Activity Zones and Industrial Assets</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• The federal and provincial governments, in coordination with private sector entities, shall
establish demanufacturing facilities dedicated to the disassembly of decommissioned internal
combustion engine (ICE) vehicles.</li>
                    <li>• Components recovered through demanufacturing operations shall be processed and
rerouted to certified recycling or reindustrialization facilities for reintegration into the EV
production supply chain.</li>
                    <li>• Existing ICE vehicle assembly plants located in Ontario shall be evaluated and prioritized
for conversion into EV-related operations, including electric component assembly or vehicle
disassembly centers.</li>
                    <li>{"• A geographically consolidated EV Manufacturing and Recycling Corridor shall be developed within Ontario, modeled on the structure and governance of Quebec’s battery corridor."}</li>
                    <li>• Hiring within the corridor shall prioritize workers residing in regions undergoing economic
restructuring due to the decline of ICE manufacturing, notably in Windsor, Oshawa, and similar
jurisdictions.</li>
                    <li>• All levels of government involved in the redevelopment shall ensure sustained economic
support and workforce reintegration measures for municipalities historically dependent on ICE
vehicle production.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Recycle className="h-8 w-8 text-[#c31a1a]" />
                  <CardTitle>Workforce Transition Oversight and Retention Incentives</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>•  A national workforce transition monitoring system shall be established to assess and
publicly report on employment trends, reskilling program outcomes, and evolving labor demands
related to the EV transition.</li>
                    <li>• Unifor and participating employers in the automotive sector shall jointly administer a
centralized digital job board to facilitate the placement of reskilled workers in relevant positions
nationwide.</li>
                    <li>• Employers demonstrating proactive efforts to retain and retrain workers shall be eligible for
federal incentives, including tax credits, transition grants, and preferential status in public EV
procurement contracts.</li>
                    <li>• Participating employers shall be required to prioritize the retraining of existing
employees—particularly older and long-tenured workers—before seeking to fill positions with
external applicants.</li>
                    <li>• An annual national program of recognition and certification shall be implemented to honor
                    employers that uphold exemplary standards in equitable workforce transition practices.</li>
                    <li>• The preservation of factory-based intergenerational knowledge and the safeguarding of
skilled trades expertise shall be identified as national objectives throughout the EV industrial
transformation.</li>
                    <li>• Unifor shall employ advocacy, strategic alliances, and public communication campaigns to
compel compliance by multinational automotive manufacturers with Canadian labor standards
and to enhance the public profile of those that adhere.</li>
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
                  <TrendingUp className="h-8 w-8 text-[#c31a1a]" />
                </div>
                <h3 className="text-xl font-bold">Manufacturers Benefit</h3>
                <p className="text-slate-600">
                  Access to a ready, skilled workforce trained specifically for EV technology requirements, reducing
                  hiring costs and training time.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-red-100 p-4 rounded-full">
                  <Users className="h-8 w-8 text-[#c31a1a]" />
                </div>
                <h3 className="text-xl font-bold">Workers Supported</h3>
                <p className="text-slate-600">
                  Union members receive comprehensive support, training, and job placement assistance to thrive in the
                  evolving automotive industry.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-red-100 p-4 rounded-full">
                  <Badge className="h-8 w-8 bg-[#c31a1a]" />
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#c31a1a]">
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
                <Button size="lg" variant="secondary" className="bg-red-500 text-white hover:bg-red-300">
                  Become a Member
                </Button>
                <Link href="https://www.unifor.org" passHref>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-[#c31a1a] hover:bg-slate-100 hover:text-[#c31a1a]"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        id="contact"
        className="flex items-center justify-between h-[70px] px-4 md:px-6 border-t bg-slate-50"
      >
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full items-center">
          <div className="flex items-center">
            <img
              src="./Unifor-core-RGB.png"
              width={70}
              height={70}
              alt="Unifor Logo"
              className="rounded-md"
            />
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="https://www.unifor.org/privacy_policy" className="text-xs hover:underline underline-offset-4 text-slate-600">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4 text-slate-600">
              Terms of Service
            </Link>
            <Link href="https://www.unifor.org/contact-us" className="text-xs hover:underline underline-offset-4 text-slate-600">
              Contact Us
            </Link>
            <Link href="https://www.unifor.org/resources" className="text-xs hover:underline underline-offset-4 text-slate-600">
              Resources
            </Link>
          </nav>
          <div className="sm:ml-auto flex gap-4">
            <Link href="https://www.facebook.com/UniforCanada/" className="text-slate-600 hover:text-[#c31a1a]">
              <span className="sr-only">Facebook</span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </Link>
            <Link href="https://x.com/UniforTheUnion?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className="text-slate-600 hover:text-[#c31a1a]">
              <span className="sr-only">Twitter</span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </Link>
            <Link href="#" className="text-slate-600 hover:text-[#c31a1a]">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
            <p className="text-xs text-slate-600 mt-4 sm:mt-0">© {new Date().getFullYear()} Unifor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
