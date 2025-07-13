import { useCallback, useMemo } from 'react'
import { Link2 } from 'lucide-react'

import { useClipboard } from '../use-clipboard'
import {
  SOCIAL_PROVIDERS,
  type ShareConfig,
  type SocialProvider,
} from './social-providers'

type useshareProps = ShareConfig & {
  clipboardTimeout?: number
}

export function useShare({
  url,
  title,
  text,
  clipboardTimeout = 2000,
}: useshareProps) {
  const { isCopied, handleCopy } = useClipboard({ timeout: clipboardTimeout })

  const shareConfig = useMemo(
    () => ({
      url,
      ...(title && { title }),
      ...(text && { text }),
    }),
    [text, title, url],
  )

  const share = useCallback(
    async (provider: SocialProvider) => {
      try {
        if (provider === 'clipboard') {
          return await handleCopy(url)
        }

        const providersConfig = SOCIAL_PROVIDERS[provider]

        if (!providersConfig) {
          throw new Error(`Provider não suportado: ${provider}`)
        }

        const shareUrl = providersConfig.shareUrl(shareConfig)
        const shareWindow = window.open(
          shareUrl,
          '_blank',
          'width=600,height=600,location=yes,status=yes',
        )

        return !!shareWindow
      } catch (error) {
        console.error(error)

        return false
      }
    },
    [shareConfig, handleCopy, url],
  )

  const shareButtons = useMemo(
    () => [
      ...Object.entries(SOCIAL_PROVIDERS).map(([key, provider]) => ({
        provider: key,
        name: provider.name,
        icon: provider.icon,
        action: () => share(key as SocialProvider),
      })),
      {
        provider: 'clipboard',
        name: isCopied ? 'Link copiado' : 'Copiar link',
        icon: <Link2 className="size-4" />,
        action: () => share('clipboard'),
      },
    ],
    [share, isCopied],
  )

  return {
    shareButtons,
  }
}
