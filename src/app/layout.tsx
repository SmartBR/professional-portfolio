import "./globals.css"
import type { Metadata } from "next"
import { Roboto } from "next/font/google";
import { Contexts } from "@/components/contexts";

const font = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata: Metadata = {
  title: "Professional Portfolio",
  description: "My personal portfolio."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Contexts>
          {children}
        </Contexts>
      </body>
    </html>
  )
}
