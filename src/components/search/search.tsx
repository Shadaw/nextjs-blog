import { useCallback, type ChangeEvent, type FormEvent } from 'react'
import { useRouter } from 'next/router'
import { CircleX, SearchIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

export function Search() {
  const router = useRouter()
  const query = (router.query.q as string) ?? ''

  const handleSearch = useCallback(
    (event: FormEvent) => {
      event.preventDefault()

      if (query.trim()) {
        router.push(`/blog?q=${encodeURIComponent(query)}`)
      }
    },
    [query, router],
  )

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value

    router.push(`/blog?q=${encodeURIComponent(newQuery)}`, undefined, {
      shallow: true,
      scroll: false,
    })
  }

  const resetSearch = () => {
    router.push('/blog', undefined, {
      shallow: true,
      scroll: false,
    })
  }

  return (
    <form onSubmit={handleSearch} className="relative group w-full md:w-60">
      <SearchIcon
        className={cn(
          'absolute text-gray-300 left-3 top-1/2 size-4 -translate-y-1/2 transition-colors duration-200 group-focus-within:text-blue-300',
          query ? 'text-blue-300' : '',
        )}
      />
      <input
        type="text"
        placeholder="Buscar"
        value={query}
        onChange={handleQueryChange}
        className="w-full h-10 md:w-60 bg-transparent border border-gray-400 pl-9 text-gray-100 rounded-md text-body-sm outline-none transition-all duration-200 focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-300 placeholder:text-gray-300 placeholder:text-body-sm"
      />
      {query && (
        <CircleX
          className="absolute text-gray-300 size-4 top-1/2 -translate-y-1/2 right-3 cursor-pointer"
          onClick={resetSearch}
        />
      )}
    </form>
  )
}
