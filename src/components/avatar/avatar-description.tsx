import type { ReactNode } from 'react'

type AvatarDescriptionProps = {
  children: ReactNode
}

export function AvatarDescription({ children }: AvatarDescriptionProps) {
  return <div className="text-body-xs text-gray-300">{children}</div>
}
