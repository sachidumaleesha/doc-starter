'use client'

import React, { useState, useEffect } from 'react'
import { Check, Copy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import toast from 'react-hot-toast'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-bash'

interface CopyableCodeBlockProps {
  code: string
  language?: string
}

export function CopyableCodeBlock({ code, language = 'javascript' }: CopyableCodeBlockProps) {
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    Prism.highlightAll()
  }, [code, language])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setIsCopied(true)
      toast.success('Code copied to clipboard!', {
        style: {
          background: 'var(--background)',
          color: 'var(--foreground)',
          border: '1px solid var(--border)',
        },
      })
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.log("copyToClipboard -> err", err)
      toast.error('Failed to copy code')
    }
  }

  return (
    <div className="relative">
      <pre className={`language-${language} rounded-md mb-4`}>
        <code className={`language-${language}`}>{code}</code>
      </pre>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-2 right-2 bg-background"
        onClick={copyToClipboard}
      >
        {isCopied ? (
          <Check className="h-4 w-4" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </Button>
    </div>
  )
}