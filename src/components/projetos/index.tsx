"use client";
import './Style.css'; // Seu arquivo CSS para customizar estilos
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules'; // Apenas a páginação agora

export default function Projetos(): React.ReactNode {
  register(); // Registra os componentes do Swiper

  // Dados dos projetos
  const projetos = [
    {
      id: '1',
      image: "https://via.placeholder.com/150",
      title: "Sociedade da Coruja",
    },
    {
      id: '2',
      image: "https://via.placeholder.com/150",
      title: "Arena FEI",
    },
    {
      id: '3',
      image: "https://via.placeholder.com/150",
      title: "Dev Week",
    },
    {
      id: '4',
      image: "https://via.placeholder.com/150",
      title: "Projeto Kabrinha", // Novo projeto adicionado
    },
  ];

  return (
    <div className='carrossel'>
      <Swiper
        modules={[Pagination]} // Apenas paginação agora, sem Navegação
        spaceBetween={20} // Espaçamento entre os quadrados
        slidesPerView={3} // Quantidade de quadrados visíveis ao mesmo tempo
        pagination={false} // Colquei "false" pq as bolinhas estavam me enchendo o saco
        loop={true} // Carrossel contínuo
        grabCursor={true} // Ativa o cursor de "mão" para indicar que é arrastável
      >
        {projetos.map((projeto) => (
          <SwiperSlide key={projeto.id}>
            <div className='quadrado'>
              <img src={projeto.image} alt={`Projeto ${projeto.title}`} className="imagem" />
              <h3 className='titulo'>{projeto.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

// para commitar