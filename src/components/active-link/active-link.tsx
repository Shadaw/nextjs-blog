import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import type React from "react";

type ActiveLink = {
  children: React.ReactNode
} & LinkProps

export function ActiveLink({ children, href, ...rest }: ActiveLink) {
  const router = useRouter()
  const isCurrentPath = router.asPath === href || router.asPath === rest.as

  return (
    <Link href={href} className={cn('text-action-sm transition-colors hover:text-blue-200', isCurrentPath ? 'text-blue-500' : 'text-gray-100')} {...rest}>{children}</Link>
  )
}