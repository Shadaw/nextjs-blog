import { useRouter } from 'next/router'

import { Search } from '@/components/search'

import { PostCard } from './components/post-card'
import { PostGridCard } from './components/post-grid-card'

export function BlogList() {
  const router = useRouter()
  const query = router.query.q as string

  const pageTitle = query
    ? `Resultados de busca para "${query}"`
    : 'Dicas e estratégias para impulsionar seu negócio'

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

      <PostGridCard>
        <PostCard
          slug="transformando-seu-negocio"
          title="Transformando seu negocio em uma loja virtual"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quia!"
          date="12/07/2025"
          image="/assets/primeiro-post.png"
          author={{
            avatar: '/customer-01.png',
            name: 'Gustavo Alexandre',
          }}
        />
      </PostGridCard>
    </div>
  )
}
