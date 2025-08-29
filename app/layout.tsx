import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "TogetherWe - AI-Powered Couples Coaching & Support",
  description:
    "Revolutionary relationship support that adapts to your unique dynamics, providing personalized insights and coaching guidance to strengthen your connection.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}
