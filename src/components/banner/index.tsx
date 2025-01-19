"use client";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import Image from 'next/image'
import Link from 'next/link';

type props = {
  imgSrc: string
  href: string
}

export default function Banner({ imgSrc, href }: props) {

  return (
    <div className='relative h-80'>
      <Link href={href}>
        <Image src={imgSrc}
          alt="Imagem Carrosel"
          fill={true}
        />
      </Link>
    </div >
  );
}

