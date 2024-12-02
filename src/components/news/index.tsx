"use client";
import './Style.css'
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react';
import React from "react";
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCreative, Autoplay } from 'swiper/modules';

export default function News(){
  register(); //ao utilizar elementos customizados da biblioteca, tenho q registrar eles manualmente uma vez

  // lista de dicionarios para cada imagem utilizada no carrosel da noticia
  const img = [
    {id: '1', 
     image: "https://storage.openvinotoolkit.org/data/test_data/images/224x224/dog.bmp",
     title: "Noticia 1", 
     text: "Aconteceu isso", 
     local: "#"},

    {id: '2', 
     image: "https://napoledecor.cdn.magazord.com.br/img/2023/03/produto/265/foto-redonda-224x224-2.png?ims=fit-in/800x",
     title: "Noticia 2", 
     text: "Aconteceu aquilo outro", 
     local: "#"},

    {id: '3', 
     image: "https://detailshopbrasil.com.br/wp-content/uploads/2021/02/toalha-de-microfibra-semborda-maxshine1-224x224.jpg",
     title: "Noticia 3", 
     text: "Aconteceu aquilo", 
     local: "#"},
  ]

  return(
    <div className='containerNews'>

      <Swiper //onde é definido todos os parametros
      modules={[EffectCreative, Autoplay]} 
      effect={'creative'} 
      grabCursor={true} 
      creativeEffect={{prev: { translate: [0, 0, -400],}, 
      next: {translate: ['100%', 0, 0],},}} 
      loop={true} 
      autoplay={{delay: 3000, disableOnInteraction: false}}
      >
        {img.map((item) =>( //elementos que vao estar no swiper (no caso a lista de dicionarios criada anteriormente)
          <SwiperSlide key={item.id}>

            <a href={item.local}>
              <img src={item.image} 
               alt="Imagem_Carrosel" 
               className="slide_img"
               />
              </a>

            <div className='fundo_texto'>
              <h3 className='titleNews'>{item.title}</h3>
              <p className='textNews'>{item.text}</p>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
