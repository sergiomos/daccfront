import Banner from "@/components/banner";
import Divisor from "@/components/divisor";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Sobre() {
  return (
    <>
      <Header />
      <Banner imgSrc="https://picsum.photos/1080/350" href="#" />
      <Divisor />
      <main>
        <h3 className="font-bold text-center text-lg">Sobre o Diretório Acadêmico de Ciências da Computação</h3>
      </main>
      <Footer />
    </>
  )
}
