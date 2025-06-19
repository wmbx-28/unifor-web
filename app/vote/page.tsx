import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Vote, QrCode, Users, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function VotePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
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
          <Link href="#" className="text-sm font-medium hover:text-[#c31a1a] transition-colors">
            Training
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-[#c31a1a] transition-colors">
            Job Board
          </Link>
          <Link href="/vote" className="text-sm font-medium hover:text-[#c31a1a] transition-colors">
            Vote
          </Link>
        </nav>
        <Link href="https://www.unifor.org/join-us" passHref>
          <Button className="ml-4 bg-[#c31a1a] hover:bg-red-500">Join Today</Button>
        </Link>
        </div>
      </header>

      <main className="flex-1">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge variant="outline" className="w-fit">
                <Vote className="h-4 w-4 mr-2" />
                Union Voting Portal
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Make Your Voice Heard
              </h1>
              <p className="max-w-[600px] text-slate-600 md:text-xl">
                Your vote shapes the future of automotive workers in the EV transition. Scan the QR code below to
                participate in our union voting process.
              </p>
            </div>
          </div>
        </section>

        {/* QR Code Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                {/* QR Code */}
                <div className="flex flex-col items-center space-y-6">
                  <Card className="p-8 shadow-lg">
                    <CardContent className="flex flex-col items-center space-y-4 p-0">
                      <QrCode className="h-8 w-8 text-[#c31a1a]" />
                      <h3 className="text-xl font-bold text-center">Scan to Vote</h3>
                      <div className="bg-white p-4 rounded-lg border-2 border-slate-200">
                        <img
                          src="/vote.png"
                          alt="QR Code for Union Voting"
                          width="200"
                          height="200"
                          className="rounded"
                        />
                      </div>
                      <p className="text-sm text-slate-600 text-center max-w-xs">
                        Use your smartphone camera to scan this QR code and access the secure voting portal
                      </p>
                    </CardContent>
                  </Card>

                  <Button size="lg" className="bg-[#c31a1a] hover:bg-red-700 w-full max-w-xs">
                    <QrCode className="h-4 w-4 mr-2" />
                    Open Voting Portal
                  </Button>
                </div>

                {/* Voting Information */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tighter mb-4">EV Skills Gap Initiative Vote</h2>
                    <p className="text-slate-600 text-lg">{"Cast your vote on the proposed EV skills training programs and workforce transition initiatives. Your participation is crucial for shaping our union's response to the automotive industry transformation."}</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">{"What You're Voting On:"}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">Mandatory EV Training Programs</h4>
                          <p className="text-sm text-slate-600">
                            Implementation of comprehensive EV certification courses for all automotive technicians
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">Job Redistribution Platform</h4>
                          <p className="text-sm text-slate-600">
                            Creation of union-managed job board for workforce transition support
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">Demanufacturing Initiative Funding</h4>
                          <p className="text-sm text-slate-600">
                            Investment in recycling programs to create new economic opportunities
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Card className="bg-red-50 border-red-200">
                    <CardHeader>
                      <CardTitle className="text-red-800 flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        Voting Requirements
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm text-red-700 space-y-1">
                        <li>• Must be a current Unifor member in good standing</li>
                        <li>• Valid member ID required for authentication</li>
                        <li>• Voting closes on June 20, 2025</li>
                        <li>• One vote per member</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Need Help Voting?</h2>
                <p className="text-slate-600 text-lg">
                  {"We're here to ensure every member can participate in this important decision."}
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Technical Support</CardTitle>
                    <CardDescription>Having trouble with the QR code or voting portal?</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>Phone:</strong> 1-800-UNIFOR-1
                      </p>
                      <p>
                        <strong>Email:</strong> voting-support@unifor.org
                      </p>
                      <p>
                        <strong>Hours:</strong> Mon-Fri 8AM-6PM EST
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">In-Person Assistance</CardTitle>
                    <CardDescription>Visit your local union office for voting assistance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>Find Locations:</strong> unifor.org/offices
                      </p>
                      <p>
                        <strong>Bring:</strong> Member ID and photo ID
                      </p>
                      <p>
                        <strong>Available:</strong> Until voting deadline
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="pt-6">
                <Button size="lg" variant="outline" className="mr-4">
                  Find Local Office
                </Button>
                <Button size="lg" className="bg-[#c31a1a] hover:bg-red-700">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </section>
        </div>
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
