export default function HeaderButton({ children, className = '' }: {
  children: React.ReactNode,
  className?: string | undefined
}) {
  return <li className={"hover:text-yellow-400 cursor-pointer".concat(" ", className)}>{children}</li>
}
