"use client";
import './StyleDiretorias.css'
import Image from 'next/image'
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, EffectCoverflow } from 'swiper/modules';
import React from "react";
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/modules';
import Academico from '../../public/academico.jpg';
import Comercial from '../../public/comercial.jpg';
import Comunicacao from '../../public/comunicacao.jpg';
import Esports from '../../public/esports.jpg';
import Marketing from '../../public/marketing.jpg';
import Projetos from '../../public/projetos.jpg';
import RH from '../../public/rh.jpg';


export default function Diretorias(){
  register(); //ao utilizar elementos customizados da biblioteca, tenho q registrar eles manualmente uma vez

  // lista de dicionarios para cada imagem utilizada no carrosel da noticia
  const img = [
    {id: '1', 
     image: Academico,
     local: "#"},

    {id: '2', 
     image: Comercial,
     local: "#"},

    {id: '3', 
     image: Comunicacao,
     local: "#"},

    {id: '4', 
     image: Esports,
     local: "#"},

    {id: '5', 
     image: Marketing,
     local: "#"},

    {id: '6', 
     image: Projetos,
     local: "#"},

    {id: '7', 
     image:  RH,
     local: "#"},
  ]

  return(
    <div className='containerDiretoria'>

      <Swiper //onde é definido todos os parametros
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        direction={'horizontal'}
        mousewheel = {true}
        modules={[EffectCoverflow, Mousewheel]}
        loop={true}
      >
        {img.map((item) =>( //elementos que vao estar no swiper (no caso a lista de dicionarios criada anteriormente)
          <SwiperSlide >

            <a href={item.local}>
              <Image 
              src = {item.image} 
              alt="Imagem_Carrosel" 
              className="slide_img"
               />
              </a>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}