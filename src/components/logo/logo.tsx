import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href='/' title="Pagina inicial">
      <Image
        src="/logo.svg"
        alt="Logo Site.Set"
        width={116}
        height={32}
      />
    </Link>
  )
}