"use client"

import { useEffect, useState } from "react"
import { useAppContext } from "@/context/app-context"

export function Notification() {
  const { notificationMessage, clearNotification } = useAppContext()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (notificationMessage) {
      setVisible(true)
      const timer = setTimeout(() => {
        setVisible(false)
        setTimeout(clearNotification, 300) // Clear after fade out animation
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [notificationMessage, clearNotification])

  if (!notificationMessage) return null

  return (
    <div
      className={`fixed top-20 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md shadow-lg transition-opacity duration-300 z-50 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {notificationMessage}
    </div>
  )
}
