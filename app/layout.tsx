import './globals.css'
import 'prismjs/themes/prism-tomorrow.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { SidebarProvider, SidebarTrigger, SidebarInset } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Minimal Docs Site',
  description: 'A gorgeous minimal documentation site using Next.js App Router',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <header className="flex h-16 items-center gap-4 border-b px-6">
                <SidebarTrigger />
                <div className="font-semibold">Documentation</div>
              </header>
              <main className="flex-1 overflow-auto p-6">
                {children}
              </main>
            </SidebarInset>
          </SidebarProvider>
          <Toaster/>
        </ThemeProvider>
      </body>
    </html>
  )
}

