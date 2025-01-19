import Link from "next/link";
import { FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-blue-950 flex justify-between items-center px-24 text-white py-8">
    <div>
      <h6 className="font-bold mb-2">Contato DACC</h6>
      <p>contato.ccfei@gmail.com</p>
      <p>@daccfei - Nas redes sociais</p>

      <div className="mt-4 flex gap-4 items-center">
        <Link href="https://www.tiktok.com/@daccfei" target="blank" >
          <FaTiktok size={24} />
        </Link>

        <Link href="https://www.instagram.com/daccfei" target="blank">
          <FaInstagram size={24} />
        </Link>
      </div>
    </div>

    <div className="text-center">
      <p className="leading-5 mb-2">
        Precisa tirar alguma dúvida agora?
        <br />
        Preencha o formulário!
      </p>
      <Link
        href="#"
        target="blank"
        className="font-bold">Link para o formulário</Link>
    </div>
  </footer>
);

export default Footer
