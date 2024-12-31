'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { SearchIcon } from 'lucide-react'

const searchIndex = [
  { title: 'Introduction', url: '/' },
  { title: 'Getting Started', url: '/getting-started' },
  { title: 'Components', url: '/components' },
  { title: 'API Reference', url: '/api-reference' },
]

function highlightText(text: string, highlight: string) {
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'))
  return (
    <span>
      {parts.map((part, i) => 
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={i} className="bg-yellow-200 dark:bg-yellow-800">{part}</span>
        ) : (
          part
        )
      )}
    </span>
  )
}

export function Search() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<typeof searchIndex>([])
  const router = useRouter()

  useEffect(() => {
    if (query.length > 1) {
      const filteredResults = searchIndex.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filteredResults)
    } else {
      setResults([])
    }
  }, [query])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (results.length > 0) {
      router.push(results[0].url)
    }
  }

  return (
    <div className="relative">
      <form onSubmit={handleSearch}>
        <div className="relative">
          <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="pl-8"
          />
        </div>
      </form>
      {results.length > 0 && (
        <ScrollArea className="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-md border bg-popover p-2 shadow-md">
          {results.map(result => (
            <button
              key={result.url}
              className="block w-full rounded-md p-2 text-left hover:bg-accent"
              onClick={() => {
                router.push(result.url)
                setQuery('')
              }}
            >
              {highlightText(result.title, query)}
            </button>
          ))}
        </ScrollArea>
      )}
    </div>
  )
}