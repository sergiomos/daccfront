"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function HeaderButton({ children, value, href }: {
  children: React.ReactNode,
  href: string
  value: string
}) {
  const pathname = usePathname().toLowerCase().replace('/', '')
  const shouldHighlight = pathname === value

  return (
    <Link href={href}>
      <li className={`hover:text-yellow-400 cursor-pointer ${shouldHighlight ? 'text-yellow-400' : ''}`}>
        {children}
      </li>
    </Link>
  )
}
