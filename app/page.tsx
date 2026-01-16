import { WaitlistForm } from "@/components/waitlist-form"
import { CheckCircle, Rocket, Shield, Zap } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 text-sm">
              <Rocket className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Course launching soon</span>
            </div>
            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Master Dokploy Deployment Update
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Learn to deploy and manage applications with confidence. A comprehensive course covering everything from
              basics to advanced Dokploy workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What you'll learn</h2>
          <p className="mt-4 text-lg text-muted-foreground">Everything you need to become proficient with Dokploy</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-8 transition-colors hover:border-primary/50">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Quick Setup</h3>
            <p className="text-muted-foreground leading-relaxed">
              Learn how to set up Dokploy from scratch and configure your first deployment in minutes.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-8 transition-colors hover:border-primary/50">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Security Best Practices</h3>
            <p className="text-muted-foreground leading-relaxed">
              Master security configurations, SSL certificates, and environment variable management.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-8 transition-colors hover:border-primary/50">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Rocket className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Production Ready</h3>
            <p className="text-muted-foreground leading-relaxed">
              Deploy real-world applications with confidence using advanced Dokploy features.
            </p>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">Course Highlights</h2>
              <ul className="space-y-4">
                {[
                  "Step-by-step deployment workflows",
                  "Docker container management",
                  "Database integration and backups",
                  "Custom domain configuration",
                  "CI/CD pipeline setup",
                  "Monitoring and logging",
                  "Scaling strategies",
                  "Troubleshooting common issues",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 text-primary mt-0.5" />
                    <span className="text-lg text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-center">
              <div className="rounded-lg border border-border bg-card p-8">
                <h3 className="text-2xl font-bold mb-4">Who is this for?</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">Developers</strong> who want to take control of their deployment
                    process
                  </p>
                  <p>
                    <strong className="text-foreground">DevOps engineers</strong> looking to streamline their workflow
                  </p>
                  <p>
                    <strong className="text-foreground">Teams</strong> seeking a self-hosted deployment solution
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Join the Waitlist</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Be the first to know when the course launches. Get early bird pricing and exclusive bonuses.
          </p>
        </div>

        <div className="mx-auto max-w-md">
          <WaitlistForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dokploy Course. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
