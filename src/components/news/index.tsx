"use client";
import './Style.css'
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react';

register();
import React from "react";
import 'swiper/css';
import 'swiper/css/effect-cards';


import { EffectCreative, Autoplay } from 'swiper/modules';
function News(){
  const img = [
    {id: '1', image: "https://storage.openvinotoolkit.org/data/test_data/images/224x224/dog.bmp",paragrafo: "Noticia 1", texto: "Aconteceu isso", local: "#"},
    {id: '2', image: "https://napoledecor.cdn.magazord.com.br/img/2023/03/produto/265/foto-redonda-224x224-2.png?ims=fit-in/800x",paragrafo: "Noticia 2", texto: "Aconteceu aquilo outro", local: "#"},
    {id: '3', image: "https://detailshopbrasil.com.br/wp-content/uploads/2021/02/toalha-de-microfibra-semborda-maxshine1-224x224.jpg",paragrafo: "Noticia 3", texto: "Aconteceu aquilo", local: "#"},
  ]

  return(
    <div className='containerNews'>
      <Swiper modules={[EffectCreative, Autoplay]} effect={'creative'} grabCursor={true} creativeEffect={{prev: { translate: [0, 0, -400],}, next: {translate: ['100%', 0, 0],},}} loop={true} autoplay={{delay: 3000, disableOnInteraction: false}}>
        {img.map((item) =>(
          <SwiperSlide key={item.id}>
            <a href={item.local}><img src={item.image} alt="Imagem_Carrosel" className="slide_img"/></a>
            <div className='fundo_texto'>
              <h3 className='titleNews'>{item.paragrafo}</h3>
              <p className='textNews'>{item.texto}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default News
