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
    <section className="relative py-24 bg-gradient-to-b from-cyan-950/20 to-gray-700">
      <div className="absolute inset-0 bg-[url('/background-footer.svg')] bg-cover bg-center bg-no-repeat opacity-70" />

      <div className="relative container flex flex-col items-center">
        <div className="p-4 bg-cyan-300 w-fit rounded-full absolute mt-[-120px] ">
          <Store className="text-cyan-100" />
        </div>
        <div className="flex flex-col items-center gap-6 text-center">
          <h2
            className={`${ptSansCaption.className} text-gray-100 text-balance text-heading-xl`}
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
