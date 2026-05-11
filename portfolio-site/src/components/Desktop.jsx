import Aurora from '../assets/aurora.jpg'
import MessengerIcon from '../assets/windows-messenger.webp'
import RecycleBin from '../assets/vista-icons/recycle_bin.ico'
import VistaPC from '../assets/vista-icons/vista_pc_2.ico'
import VistaNotes from '../assets/vista-icons/vista_sticky_notes.ico'
import VistaFolder from '../assets/vista-icons/folder.ico'
import VistaDocument from '../assets/vista-icons/text_document.ico'
import TaskManager from '../assets/vista-icons/task_manager.ico'
import InternetExplorer from '../assets/vista-icons/internet_explorer.ico'
import DesktopIcon from './desktop_icon'

function Desktop () {
    const desktopIcons = [
        { image: RecycleBin, name: 'Recycle Bin' },
        { image: VistaPC, name: 'My Computer' },
        { image: VistaFolder, name: 'About Me' },
        { image: VistaDocument, name: 'Resume' },
        { image: VistaNotes, name: 'Sticky Notes' },
        { image: MessengerIcon, name: 'Windows Messenger' },
        { image: TaskManager, name: 'Task Manager' },
        { image: InternetExplorer, name: 'Internet Explorer' },
        { image: InternetExplorer, name: 'Internet Explorer' },
        
        { image: InternetExplorer, name: 'Internet Explorer' },
        
        { image: InternetExplorer, name: 'Internet Explorer' },
        
        { image: InternetExplorer, name: 'Internet Explorer' },
        
        { image: InternetExplorer, name: 'Internet Explorer' },
    ]

    return (
        <div
            className="h-screen w-screen grid grid-flow-col gap-x-1 gap-y-2 justify-start content-start bg-center bg-no-repeat"
            style={{ 
                backgroundImage: `url(${Aurora})`, 
                backgroundSize: '100% 100%',
                gridTemplateRows: 'repeat(auto-fill, 90px)',
                gridAutoColumns: '80px'
            }}
        >
            {desktopIcons.map((icon, index) => (
                <DesktopIcon key={`${icon.name}-${index}`} image={icon.image} name={icon.name} />
            ))}
        </div>
    )
}

export default Desktop