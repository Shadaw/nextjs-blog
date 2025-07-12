import type { ReactNode } from 'react'

type AvatarContainerProps = {
  children: ReactNode
}

export function AvatarContainer({ children }: AvatarContainerProps) {
  return <div className="flex items-center gap-3">{children}</div>
}
