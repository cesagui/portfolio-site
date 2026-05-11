import Aurora from '../assets/aurora.jpg'
import MessengerIcon from '../assets/windows-messenger.webp'
import RecycleBin from '../assets/vista-icons/recycle_bin.ico'
import VistaPC from '../assets/vista-icons/vista_pc_2.ico'
import VistaNotes from '../assets/vista-icons/vista_sticky_notes.ico'
import VistaFolder from '../assets/vista-icons/folder.ico'
import VistaDocument from '../assets/vista-icons/text_document.ico'
import DesktopIcon from './desktop_icon'

function Desktop () {
    const desktopIcons = [
        { image: RecycleBin, name: 'Recycle Bin' },
        { image: VistaPC, name: 'My Computer' },
        { image: VistaFolder, name: 'About Me' },
        { image: VistaDocument, name: 'Resume' },
        { image: VistaNotes, name: 'Sticky Notes' },
        { image: MessengerIcon, name: 'Windows Messenger' },
    ]

    return (
        <div
            className="h-screen w-screen grid gap-x-3 justify-start bg-center bg-no-repeat"
            style={{ 
                backgroundImage: `url(${Aurora})`, 
                backgroundSize: '100% 100%',
                gridAutoRows: '90px',
                gridAutoColumns: '100px'
            }}
        >
            {desktopIcons.map((icon) => (
                <DesktopIcon key={icon.name} image={icon.image} name={icon.name} />
            ))}
        </div>
    )
}

export default Desktop