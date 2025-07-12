import type { ReactNode } from 'react'

type AvatarTitleProps = {
  children: ReactNode
}

export function AvatarTitle({ children }: AvatarTitleProps) {
  return <div className="text-body-sm text-gray-200">{children}</div>
}
