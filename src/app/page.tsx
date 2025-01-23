"use client";

import Banner from "@/components/carrousel";
import Header from "@/components/header";
import { IoCalendarOutline } from "react-icons/io5";
import { GiReceiveMoney } from "react-icons/gi";
import News from "@/components/news";
import HomeSideButton from "@/components/homeSideButton";
import QRcode from "@/components/qrcode";
import Projetos from "@/components/projetos";
import Footer from "@/components/footer";
import Calendar from "@/components/calendar";
import Link from "next/link";


export default function Home() {

  return (
    <div>
      <Header />
      <Banner />
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
            <span>Para saber mais <span className="font-bold">sobre</span> o diretório <Link href="/sobre" className="text-yellow-500 font-bold cursor-pointer">clique aqui</Link> </span>
          </div>

          <div className="text-center my-16 flex flex-col gap-5">
            <h4 className="font-bold text-lg">Projetos em andamento</h4>

            <span>Para saber mais sobre esses e outros <span className="font-bold">projetos</span> ativos no diretório <Link href="/sobre" className="text-yellow-500 font-bold cursor-pointer">clique aqui</Link> </span>

            {/* Substituindo a lista pelos projetos no carrossel */}
            <div className="mt-8">
              <Projetos />
            </div>
          </div>

        </div>
        <div className="col-span-1 flex flex-col items-center gap-8">
          <HomeSideButton icon={<IoCalendarOutline size={32} />} content={<Calendar />} />
          <HomeSideButton icon={<GiReceiveMoney size={32} />} content={<QRcode />} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
