import { useRouter } from 'next/router'
import { allPosts } from 'contentlayer/generated'
import { Inbox } from 'lucide-react'

import { Search } from '@/components/search'

import { PostCard } from './components/post-card'
import { PostGridCard } from './components/post-grid-card'

export function BlogList() {
  const router = useRouter()
  const query = router.query.q as string

  const pageTitle = query
    ? `Resultados de busca para "${query}"`
    : 'Dicas e estratégias para impulsionar seu negócio'

  const posts = query
    ? allPosts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase()),
      )
    : allPosts

  const hasPosts = posts.length > 0

  return (
    <div className="flex h-full flex-grow flex-col py-24">
      <header className="pb-14">
        <div className="container flex flex-col items-start justify-between space-y-6 md:flex-row md:items-end lg:items-end">
          <div className="flex flex-col gap-4 md:px-0">
            <span className="w-fit rounded-md bg-cyan-300 px-4 py-2 text-center text-body-tag text-cyan-100 md:text-left">
              BLOG
            </span>

            <h1 className="max-w-2xl text-balance text-start text-heading-lg text-gray-100 md:text-left md:text-heading-xl">
              {pageTitle}
            </h1>
          </div>
          <Search />
        </div>
      </header>

      {hasPosts && (
        <PostGridCard>
          {posts.map((post) => (
            <PostCard
              key={post._id}
              slug={post.slug}
              title={post.title}
              description={post.description}
              date={new Date(post.date).toLocaleDateString('pt-BR')}
              image={post.image}
              author={{
                avatar: post.author.avatar,
                name: post.author.name,
              }}
            />
          ))}
        </PostGridCard>
      )}

      {!hasPosts && (
        <div className="container px-8">
          <div className="flex flex-col items-center justify-center gap-8 rounded-lg border-2 border-dashed border-gray-400 p-8 md:p-12">
            <Inbox className="size-12 text-cyan-100" />
            <p className="text-center text-gray-100">Nenhum post encontrado.</p>
          </div>
        </div>
      )}
    </div>
  )
}
