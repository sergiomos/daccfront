"use client"

import Banner from "@/components/banner";
import Divisor from "@/components/divisor";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HomeSideButton from "@/components/homeSideButton";
import QRcode from "@/components/qrcode";
import { GiReceiveMoney } from "react-icons/gi";


import { register } from 'swiper/element/bundle'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, EffectFade, Navigation } from 'swiper/modules';

{/* <DiretoriaCard title="Acadêmico" />
<DiretoriaCard title="Marketing" />
<DiretoriaCard title="Projetos" />
<DiretoriaCard title="E-Sports" />
<DiretoriaCard title="Comercial" />
<DiretoriaCard title="Comercial" /> */}

const DiretoriaCard = ({ title }: any) => (
  <div className="bg-blue-950 min-w-28 max-w-28 h-40 rounded-xl flex justify-center">
    <h6 className="font-bold text-white text-center self-end mb-4">{title}</h6>
  </div>
)

export default function Sobre() {
  register();

  return (
    <>
      <Header />
      <Banner imgSrc="https://picsum.photos/1080/350" href="#" />
      <Divisor />

      <main className="grid grid-cols-6 my-4 px-24">
        <div className="col-span-1 text-center bg-gray-200 max-h-fit max-w-fit p-8">
          <p className="font-bold text-blue-800">Contato</p>
          <p>
            Siga o DACC nas <br /> redes sociais!
          </p>
          <p className="font-black mt-4">@daccfei</p>
          <p className="text-sm">Instagram e Tiktok</p>
        </div>

        <div className="col-span-4 px-10">
          <div className="text-center my-4 flex flex-col">
            <h3 className="font-bold text-center text-lg">Sobre o Diretório Acadêmico de Ciências da Computação</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perferendis molestiae sint libero obcaecati dicta, perspiciatis quaerat ab ipsam quas sed cupiditate. Asperiores dolores harum sint iure. Suscipit, libero architecto Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perferendis molestiae sint libero obcaecati dicta, perspiciatis quaerat ab ipsam quas sed cupiditate. Asperiores dolores harum sint iure. Suscipit, libero architecto Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perferendis molestiae sint libero obcaecati dicta, perspiciatis quaerat ab ipsam quas sed cupiditero architecto!</p>
          </div>

          <div >
            <h4 className="text-center font-bold text-lg mt-8">Diretorias</h4>



            <Swiper
              spaceBetween={32}
              modules={[Navigation]}
              navigation={{ enabled: true }}
              slidesPerView={5}
              className="mt-8"
            >

              <SwiperSlide>
                <DiretoriaCard title="Acadêmico" />
              </SwiperSlide>
              <SwiperSlide>
                <DiretoriaCard title="Marketing" />
              </SwiperSlide>
              <SwiperSlide>
                <DiretoriaCard title="Projetos" />
              </SwiperSlide>
              <SwiperSlide>
                <DiretoriaCard title="E-Sports" />
              </SwiperSlide>
              <SwiperSlide>
                <DiretoriaCard title="Comercial" />
              </SwiperSlide>
              <SwiperSlide>
                <DiretoriaCard title="Social" />
              </SwiperSlide>
            </Swiper>

          </div>

          <div>
            <h4 className="text-center font-bold text-lg mt-8">Projetos em andamento</h4>

            <Swiper //onde é definido todos os parametros
              modules={[EffectFade]}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              effect='fade'
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              className="mt-8"
            >
              <SwiperSlide className="relative max-h-40">
                <Banner imgSrc="https://picsum.photos/1080/350" href="#" />
              </SwiperSlide>

              <SwiperSlide className="relative max-h-40">
                <Banner imgSrc="https://picsum.photos/1080/350" href="#" />
              </SwiperSlide>

              <SwiperSlide className="relative max-h-40">
                <Banner imgSrc="https://picsum.photos/1080/350" href="#" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="col-span-1 flex flex-col items-center gap-8">
          <HomeSideButton icon={<GiReceiveMoney size={32} />} content={<QRcode />} />
        </div>
      </main>
      <Footer />
    </>
  )
}
