import Image from 'next/image'
import qrcode from '../../public/QRcode.jpg'

export default function QRcode() {
    return (
        <div id="hs-basic-modal" className="bg-yellow-500 size-32 rounded-xl flex justify-center items-center cursor-pointer">
            <Image
            src={qrcode}
            width={115}
            height={115}
            alt="Picture of the author"
            />
        </div>
    )
} 