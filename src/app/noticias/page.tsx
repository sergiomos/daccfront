import Banner from "@/components/banner";
import Divisor from "@/components/divisor";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from 'next/image'

const Noticia = () => (
  <div className="max-w-60 cursor-pointer hover:opacity-75">
    <Image
      src="https://picsum.photos/250/150"
      alt="noticia"
      width={240}
      height={100} />

    <h3 className="bg-blue-900 text-white my-2">DACC</h3>

    <p className="font-bold text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, dignissimos il</p>
  </div>
)

const NoticiaDestaque = () => (
  <div className=" flex col-span-2 bg-[url('https://picsum.photos/500/250')] h-60 cursor-pointer hover:opacity-75">

    <div className="bg-gray-200/50 px-4 py-2 max-h-fit self-end">
      <h3 className="bg-blue-900 text-white my-2">DACC</h3>
      <p className="font-bold text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, dignissimos il</p>
    </div>
  </div>
)

export default function Noticias() {
  return (
    <>
      <Header />
      <Banner imgSrc="https://picsum.photos/1080/350" href="#" />
      <Divisor />
      <main className="px-24">
        <h1 className="text-center font-bold text-lg my-4">DACC NEWS</h1>

        <div className="flex justify-center gap-20 mb-8">
          <div className="grid grid-cols-2 gap-4 justify-items-center max-w-md">
            <NoticiaDestaque />
            <Noticia />
            <Noticia />
          </div>
          <div className="grid grid-cols-2 gap-4 justify-items-center">
            <Noticia />
            <Noticia />
            <Noticia />
            <Noticia />
          </div>
        </div>


      </main>
      <Footer />
    </>
  )
}
