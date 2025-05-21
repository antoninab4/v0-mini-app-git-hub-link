import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container max-w-4xl py-12">
      <Link href="/" className="inline-flex items-center text-sm font-medium text-primary mb-6 hover:underline">
        <ArrowLeft className="mr-1 h-4 w-4" />
        Back to Home
      </Link>

      <h1 className="text-3xl font-bold tracking-tight mb-6">About Mini App</h1>

      <div className="prose max-w-none">
        <p>
          Mini App is a lightweight web application template built with modern web technologies. It provides a solid
          foundation for building responsive, performant web applications.
        </p>

        <h2>Technologies Used</h2>
        <ul>
          <li>
            <strong>Next.js</strong> - React framework for production
          </li>
          <li>
            <strong>Tailwind CSS</strong> - Utility-first CSS framework
          </li>
          <li>
            <strong>shadcn/ui</strong> - Reusable UI components
          </li>
        </ul>

        <h2>Features</h2>
        <ul>
          <li>Responsive design that works on all devices</li>
          <li>Fast page loads with Next.js optimizations</li>
          <li>Modern, clean UI with Tailwind CSS</li>
          <li>Easy to customize and extend</li>
        </ul>

        <h2>Getting Started</h2>
        <p>To get started with Mini App, clone the repository and install the dependencies:</p>
        <pre>
          <code>git clone https://github.com/antoninab4/mini-app.git cd mini-app npm install npm run dev</code>
        </pre>

        <p>
          This will start the development server at <code>http://localhost:3000</code>.
        </p>
      </div>
    </div>
  )
}
