import Header from "@/components/header";
import Carrosel from "@/components/banner";
import { IoCalendarOutline } from "react-icons/io5";
import { GiReceiveMoney } from "react-icons/gi";
import News from "@/components/news";

export default function Home() {
  return (
    <div>
      <Header />
      <Carrosel />
      <div className="grid grid-cols-6 my-8 px-24">
        <div className="col-span-1">
          <h3 className="bg-yellow-500 text-white m-auto font-bold uppercase rounded-full w-fit px-16 py-1">dacc news</h3>
          <News />
        </div>
        <div className="col-span-4 px-10">
          <div className="bg-yellow-500 h-3 w-60 rounded-lg m-auto" />

          <div className="text-center my-4 flex flex-col gap-5">
            <h4 className="font-bold text-lg">Diretório Acadêmico de Ciências da Computação</h4>
            <div className="grid grid-cols-2 gap-4">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perferendis molestiae sint libero obcaecati dicta, perspiciatis quaerat ab ipsam quas sed cupiditate. Asperiores dolores harum sint iure. Suscipit, libero architecto!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perferendis molestiae sint libero obcaecati dicta, perspiciatis quaerat ab ipsam quas sed cupiditate. Asperiores dolores harum sint iure. Suscipit, libero architecto!</p>
            </div>
            <span>Para saber mais <span className="font-bold">sobre</span> o diretório <span className="text-yellow-500 font-bold cursor-pointer">clique aqui</span> </span>
          </div>

          <div className="text-center my-16 flex flex-col gap-5">
            <h4 className="font-bold text-lg">Projetos em andamento</h4>
            <span>Para saber mais sobre esses e outros <span className="font-bold">projetos</span> ativos no diretório <span className="text-yellow-500 font-bold cursor-pointer">clique aqui</span> </span>

            <div className="flex justify-center items-center gap-8">
              <div className="bg-slate-300 size-56  font-bold cursor-pointer flex justify-center items-center">
                Sociedade da Coruja</div>
              <div className="bg-slate-300 size-56 font-bold cursor-pointer flex justify-center items-center">
                Arena FEI</div>
              <div className="bg-slate-300 size-56 my-8 font-bold cursor-pointer flex justify-center items-center">
                Dev Week</div>
            </div>
          </div>

        </div>
        <div className="col-span-1 flex flex-col items-center gap-8">
          <div className="bg-blue-950 rounded-full size-12 flex justify-center items-center cursor-pointer text-white hover:bg-blue-900 duration-150 ">
            <IoCalendarOutline size={32} />
          </div>

          <div className="flex gap-4">
            <div id="hs-basic-modal" className="bg-yellow-500 size-32 rounded-xl">
            </div>
            <div className="bg-blue-950 rounded-full size-12 flex justify-center items-center cursor-pointer text-white hover:bg-blue-900 duration-150">

              <GiReceiveMoney size={32} />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
