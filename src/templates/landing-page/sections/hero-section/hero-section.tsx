import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, Store } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="container relative mt-16 flex items-center justify-center">
      <div className="grid min-h-[20rem] grid-cols-1 items-center gap-8 md:h-[36rem] md:grid-cols-2">
        <div className="mt-8 flex flex-col items-center justify-center gap-4 text-center md:mt-0 md:items-start md:text-start lg:items-start">
          <h1 className="font-sans text-heading-hg text-gray-100">
            Venda seus produtos como afiliado em um unico lugar
          </h1>

          <div className="flex flex-col items-center justify-center gap-4 md:items-start lg:items-start">
            <div>
              <div className="flex items-center gap-2">
                <Clock className="size-4 text-cyan-100" />
                <span className="text-body-md text-gray-200">
                  Crie o seu site em menos de 5 minutos
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Store className="size-4 text-cyan-100" />
                <span className="text-body-md text-gray-200">
                  Acompanha e otimize seu negócio online
                </span>
              </div>
            </div>

            <div className="mt-5 flex flex-col items-center gap-2 text-white md:items-start lg:items-start">
              <Button className="w-fit rounded-full" asChild>
                <Link href="/criar-loja">
                  Criar loja grátis
                  <ArrowRight />
                </Link>
              </Button>

              <p className="text-body-xs text-gray-300">
                Não precisa de cartão de crédito
              </p>
            </div>
          </div>
        </div>

        <div className="relative order-first hidden h-[20rem] items-center justify-center md:order-last md:flex md:h-full lg:flex">
          <Image
            src="/hero-section.svg"
            alt="Ilustração com icones de store, tag e sacola"
            width={200}
            height={400}
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}
