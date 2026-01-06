"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle } from "lucide-react"

export function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email })
      })

      if (!res.ok) {
        throw new Error("Failed to join waitlist")
      }

      setIsSubmitted(true)
    } catch (error) {
      alert("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }


  if (isSubmitted) {
    return (
      <div className="rounded-lg border border-border bg-card p-8 text-center">
        <div className="mb-4 flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle className="h-6 w-6 text-primary" />
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">You're on the list!</h3>
        <p className="text-muted-foreground">
          We'll notify you at <strong className="text-foreground">{email}</strong> when the course launches.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-card p-8">
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Joining..." : "Join Waitlist"}
        </Button>

        <p className="text-center text-xs text-muted-foreground">We'll never share your email. Unsubscribe anytime.</p>
      </div>
    </form>
  )
}
