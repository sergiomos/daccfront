"use client";
import './StyleCarrosel.css'
import { register } from 'swiper/element/bundle'

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay } from 'swiper/modules';

function Carrosel(){
  const img = [
    {id: '1', image: "https://www.pharmacross.eu/wp-content/uploads/thumbs/2018/12/dogs-2921382_1920-e1544033418230-1980x400.jpg", paragrafo: "Loreal Ipsum1", texto: "Lorem ipsum dolor sit amet consectetur", local: "#"},
    {id: '2', image: "https://cdn.videndummediasolutions.com/fileadmin/Manfrotto/Global/Contents/Shopping-Assistant/tripod-buying-guide/TRIPOD-BUYING-GUIDE-1980x400.jpg",paragrafo: "Loreal Ipsum2", texto: "Lorem ipsum dolor sit amet consectetur", local: "#"},
    {id: '3', image: "https://ecologicodasaguas.com.br/wp-content/uploads/2024/03/Banner-Cabecalho-Site-1980-x-400-px.jpg",paragrafo: "Loreal Ipsum3", texto: "Lorem ipsum dolor sit amet consectetur", local: "#"},
  ]

  return(
    <div className='container'>
      <Swiper modules={[EffectFade, Autoplay]} slidesPerView={1} pagination={{clickable: true}} navigation effect='fade' autoplay={{delay: 2500, disableOnInteraction: false}} loop={true}>
        {img.map((item) =>(
          <SwiperSlide key={item.id}>
            <a href={item.local}><img src={item.image} alt="Imagem_Carrosel" className="slide_img"/></a>
            <h3 className='title'>{item.paragrafo}</h3>
            <p className='text'>{item.texto}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carrosel

