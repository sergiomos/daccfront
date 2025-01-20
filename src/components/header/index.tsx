import HeaderButton from "./headerButton";

export default function Header() {
  return (
    <header className="bg-blue-950 flex justify-between px-24 py-4">
      <h1 className="text-slate-50 text-xl auto-cols-auto font-bold" >DACC</h1>
      <nav className="text-slate-50 font-medium ">
        <ul className="flex gap-4">
          <HeaderButton href="/" value="">Home</HeaderButton>
          <HeaderButton href="/sobre" value="sobre">Sobre</HeaderButton>
          <HeaderButton href="/noticias" value="noticias">Noticias</HeaderButton>
          <HeaderButton href="/forum" value="forum">Fórum</HeaderButton>
          <HeaderButton href="/produtos" value="produtos">Produtos</HeaderButton>
          <HeaderButton href="/apoie" value="apoie">Apoie o DACC</HeaderButton>
        </ul>
      </nav>
    </header>
  )
}
