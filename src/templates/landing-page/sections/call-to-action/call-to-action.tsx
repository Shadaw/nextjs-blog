import { PT_Sans_Caption } from 'next/font/google'
import Link from 'next/link'
import { ArrowRight, Store } from 'lucide-react'

import { Button } from '@/components/ui/button'

const ptSansCaption = PT_Sans_Caption({
  subsets: ['latin'],
  weight: '700',
})

export function CallToAction() {
  return (
    <section className="relative bg-gradient-to-b from-cyan-950/20 to-gray-700 py-24">
      <div className="absolute inset-0 bg-[url('/background-footer.svg')] bg-cover bg-center bg-no-repeat opacity-70" />

      <div className="container relative flex flex-col items-center">
        <div className="absolute mt-[-120px] w-fit rounded-full bg-cyan-300 p-4">
          <Store className="text-cyan-100" />
        </div>
        <div className="flex flex-col items-center gap-6 text-center">
          <h2
            className={`${ptSansCaption.className} text-balance text-heading-xl text-gray-100`}
          >
            Crie uma loja online e inicie suas vendas ainda hoje
          </h2>

          <Button variant="primary" asChild className="mt-4">
            <Link href="/criar-loja">
              Criar loja grátis
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
