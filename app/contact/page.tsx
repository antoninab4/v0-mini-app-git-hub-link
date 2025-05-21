import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <div className="container max-w-4xl py-12">
      <Link href="/" className="inline-flex items-center text-sm font-medium text-primary mb-6 hover:underline">
        <ArrowLeft className="mr-1 h-4 w-4" />
        Back to Home
      </Link>

      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-4">Contact Us</h1>
          <p className="text-gray-500 mb-6">
            Have questions or feedback? We'd love to hear from you. Fill out the form and we'll get back to you as soon
            as possible.
          </p>

          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">Email</h2>
              <p className="text-gray-500">contact@example.com</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">GitHub</h2>
              <p className="text-gray-500">
                <Link
                  href="https://github.com/antoninab4/mini-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  github.com/antoninab4/mini-app
                </Link>
              </p>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
            <CardDescription>Fill out the form below to get in touch with us.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium leading-none">
                    Name
                  </label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Enter your message" className="min-h-[120px]" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Send Message</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
