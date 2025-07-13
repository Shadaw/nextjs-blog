import Image, { type ImageProps } from 'next/image'

import { cn } from '@/lib/utils'

type AvatarSize = 'xs' | 'sm'

const avatarSize = {
  xs: 'size-5',
  sm: 'size-9',
}

type AvatarImageProps = Omit<ImageProps, 'height' | 'width'> & {
  size?: AvatarSize
}

export function AvatarImage({
  src,
  alt,
  size = 'xs',
  ...rest
}: AvatarImageProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-full border-[1px] border-blue-200',
        avatarSize[size],
      )}
    >
      <Image src={src} alt={alt} fill {...rest} />
    </div>
  )
}
