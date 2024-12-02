"use client";
import './StyleCarousel.css'
import { register } from 'swiper/element/bundle'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay } from 'swiper/modules';

export default function Carousel(){
  register(); //ao utilizar elementos customizados da biblioteca, tenho q registrar eles manualmente uma vez

  // lista de dicionarios para cada imagem utilizada no carrosel
  const img = [
    {id: '1', 
     image: "https://www.pharmacross.eu/wp-content/uploads/thumbs/2018/12/dogs-2921382_1920-e1544033418230-1980x400.jpg", 
     title: "Loreal Ipsum1", 
     text: "Lorem ipsum dolor sit amet consectetur", 
     local: "#"},

    {id: '2', 
     image: "https://cdn.videndummediasolutions.com/fileadmin/Manfrotto/Global/Contents/Shopping-Assistant/tripod-buying-guide/TRIPOD-BUYING-GUIDE-1980x400.jpg",
     title: "Loreal Ipsum2", 
     text: "Lorem ipsum dolor sit amet consectetur", 
     local: "#"},

    {id: '3', 
     image: "https://ecologicodasaguas.com.br/wp-content/uploads/2024/03/Banner-Cabecalho-Site-1980-x-400-px.jpg",
     title: "Loreal Ipsum3", 
     text: "Lorem ipsum dolor sit amet consectetur", 
     local: "#"},
  ]

  return(
    <div className='container'>

      <Swiper //onde é definido todos os parametros
      modules={[EffectFade, Autoplay]} 
      slidesPerView={1} 
      pagination={{clickable: true}} 
      navigation 
      effect='fade' 
      autoplay={{delay: 2500, disableOnInteraction: false}} 
      loop={true}
      >
        {img.map((item) =>( 
          //elementos que vao estar no swiper (no caso a lista de dicionarios criada anteriormente)
          <SwiperSlide key={item.id}>     

            <a href={item.local}>
              <img src={item.image} 
               alt="Imagem_Carrosel" 
               className="slide_img"
               />
            </a>

            <h3 className='title'>{item.title}</h3>
            <p className='text'>{item.text}</p>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

