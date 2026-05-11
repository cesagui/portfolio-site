import DesktopIconImage from "./DesktopIconImage"

function DesktopIcon ({image, name}){
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <DesktopIconImage image={image}/>
            <div className="w-16 text-center text-outline text-xs text-white text-shadow-med text-shadow-black break-words" >{name}</div>
        </div>
    );
}

export default DesktopIcon