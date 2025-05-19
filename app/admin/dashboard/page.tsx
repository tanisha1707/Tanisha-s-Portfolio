"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Loader2, LogOut, Mail, User } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface Contact {
  _id: string
  name: string
  email: string
  message: string
  createdAt: string
}

export default function AdminDashboard() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    const isLoggedIn = document.cookie.includes("isLoggedIn=true")

    if (!isLoggedIn) {
      router.push("/admin")
      return
    }

    fetchContacts()
  }, [router])

  const fetchContacts = async () => {
    try {
      const response = await fetch("/api/contacts")
      if (!response.ok) throw new Error("Failed to fetch")

      const data = await response.json()
      setContacts(data.contacts)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch contact entries",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = () => {
    document.cookie = "isLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
    toast({ title: "Logged out", description: "You have been successfully logged out" })
    router.push("/admin")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/40 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Contact Entries */}
        <div className="bg-card border border-border rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-6 text-primary">Contact Form Submissions</h2>

          {contacts.length === 0 ? (
            <p className="text-center py-8 text-foreground/70">No contact form submissions yet.</p>
          ) : (
            <div className="space-y-4">
              {contacts.map((contact) => (
                <div
                  key={contact._id}
                  className="border border-border bg-muted/30 rounded-lg p-5 hover:border-primary/50 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                    <div className="flex items-center gap-2">
                      <User className="h-5 w-5 text-primary" />
                      <span className="font-medium">{contact.name}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-primary" />
                      <a href={`mailto:${contact.email}`} className="text-sm text-foreground/80 hover:text-primary">
                        {contact.email}
                      </a>
                    </div>

                    <div className="text-sm text-muted-foreground">
                      {format(new Date(contact.createdAt), "PPP p")}
                    </div>
                  </div>

                  <div className="bg-background text-foreground/90 p-3 rounded-md">
                    {contact.message}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
