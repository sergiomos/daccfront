import { ReactNode, useState } from "react";

export default function HomeSideButton({icon, content}: {icon: any, content: ReactNode}): React.ReactNode {
    const [showQRcode, setShowQRcode] = useState(false)
    return(
        <div className="flex gap-4">
            <div className={showQRcode? "" : "hidden"}>
                {content}
            </div>
            <div className="bg-blue-950 rounded-full size-12 flex justify-center items-center cursor-pointer text-white hover:bg-blue-900 duration-150"
            onClick={() => setShowQRcode(!showQRcode)}>
                {icon}
            </div>
        </div>
    )
}