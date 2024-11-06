import HeaderButton from "./headerButton";

export default function Header() {
  return (
    <header className="bg-blue-950 grid grid-flow-col px-24 py-4">
      <h1 className="text-slate-50 text-xl auto-cols-auto font-bold" >DACC</h1>
      <nav className="text-slate-50 font-medium ">
        <ul className="flex gap-4">
          <HeaderButton className="text-yellow-400">Home</HeaderButton>
          <HeaderButton>Sobre</HeaderButton>
          <HeaderButton>Diretorias</HeaderButton>
          <HeaderButton>Projetos</HeaderButton>
          <HeaderButton>Noticias</HeaderButton>
          <HeaderButton>Contato</HeaderButton>
          <HeaderButton>Apoie o DACC</HeaderButton>
        </ul>
      </nav>
    </header>
  )
}
