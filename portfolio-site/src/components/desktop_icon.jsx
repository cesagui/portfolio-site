import { useState, useEffect, useRef } from "react"
import DesktopIconImage from "./DesktopIconImage"

function DesktopIcon({ image, name }) {
    const [selected, setSelected] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        function handleClickOutside(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setSelected(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <div
            ref={ref}
            onClick={() => setSelected(true)}
            className={`flex flex-col items-center justify-center h-full border rounded-md cursor-pointer
                ${selected
                    ? "bg-[rgba(255,255,255,0.15)] border-white"
                    : "border-transparent hover:bg-[rgba(255,255,255,0.08)] hover:border-white/40"
                }`}
        >
            <DesktopIconImage image={image} />
            <div className="w-16 text-center text-xs text-white text-shadow-md text-shadow-black break-words">
                {name}
            </div>
        </div>
    )
}

export default DesktopIcon