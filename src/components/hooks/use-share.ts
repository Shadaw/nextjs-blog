import type { ShareConfig } from './social-providers'

type useshareProps = ShareConfig & {
  clipboardTimeout?: number
}

export function useShare({
  url,
  title,
  text,
  clipboardTimeout = 2000,
}: useshareProps) {
  const shareConfig = {
    url,
    ...(title && { title }),
    ...(text && { text }),
  }

  return {}
}
