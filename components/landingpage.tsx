'use client'

import { useState } from 'react'
import { Clock, Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function LandingPage() {
  const [isDark, setIsDark] = useState(true)
  
  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      <div className="dark:bg-black min-h-screen px-4 py-8 md:px-8 lg:px-12 flex flex-col">
        <header className=" mb-12 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Clock className="h-6 w-6 dark:text-white" />
            {/* <h1 className="text-2xl font-bold dark:text-white">TabTime</h1> */}
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDark(!isDark)}
            className="dark:text-white"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </header>

        <main className="max-w-3xl mx-auto flex-grow flex flex-col justify-center space-y-12">
          <div className="space-y-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold dark:text-white">
            Screen Time Tracker
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tracks screen time for each tab. Get insights on your browsing habits and improve productivity.
            </p>
            <Button 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100"
              asChild
            >
              <Link href="https://github.com/notcodesid/Screen-Time-Tracker-Extension" target="_blank" rel="noopener noreferrer">
                Get TabTime Extension
              </Link>
            </Button>
          </div>
        </main>

        <footer className="mt-12 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} TabTime. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

