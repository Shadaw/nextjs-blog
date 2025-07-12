import Image from 'next/image'
import Link from 'next/link'

type Author = {
  name: string
  avatar: string
}

type PostCardProps = {
  slug: string
  title: string
  description: string
  image: string
  date: string
  author: Author
}

export function PostCard({
  slug,
  title,
  description,
  image,
  date,
  author,
}: PostCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="w-full max-w-2xl overflow-hidden rounded-[12px] border-[1px] border-gray-400 bg-gray-600 transition-all duration-300 hover:border-[1px] hover:border-blue-300"
    >
      <div className="overflow-hidden rounded-md p-2">
        <div className="relative">
          <div className="background-blur-sm absolute right-0 top-0 rounded-bl-[10px] bg-gray-600 px-3 py-1">
            <span className="text-body-xs text-gray-300">{date}</span>
          </div>

          <Image
            src={image}
            alt={title}
            width={288}
            height={144}
            className="h-40 w-full rounded-[8px] object-cover object-center"
          />
        </div>

        <div className="mt-4 space-y-4 px-2">
          <h2 className="line-clamp-3 text-heading-sm text-gray-100">
            {title}
          </h2>
          <p className="line-clamp-3 text-body-sm text-gray-300">
            {description}
          </p>

          <div className="flex items-center gap-3 border-t border-gray-400 py-4">
            <div className="relative size-5 overflow-hidden rounded-full border-[1px] border-blue-200 md:size-5">
              <Image
                src={author.avatar}
                alt={author.name}
                fill
                className="rounded-md object-cover"
              />
            </div>

            <span className="text-body-sm text-gray-300">{author.name}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
