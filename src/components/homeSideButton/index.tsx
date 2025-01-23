import { ReactElement, ReactNode, useState } from "react";

export default function HomeSideButton({ icon, content }: { icon: ReactElement, content: ReactNode }): React.ReactNode {
    const [showModal, setShowModal] = useState(false)
    return (
        <div className="flex gap-4 flex-col items-center">
            <div className="bg-blue-950 rounded-full size-12 flex justify-center items-center cursor-pointer text-white hover:bg-blue-900 duration-150"
                onClick={() => setShowModal(!showModal)}>
                {icon}
            </div>
            <div className={showModal ? "" : "hidden"}>
                {content}
            </div>
        </div>
    )
}
