import Aurora from '../assets/aurora.jpg'
import MessengerIcon from '../assets/windows-messenger.webp'
import RecycleBin from '../assets/vista-icons/recycle_bin.ico'
import VistaPC from '../assets/vista-icons/vista_pc_2.ico'
import VistaNotes from '../assets/vista-icons/vista_sticky_notes.ico'
import VistaFolder from '../assets/vista-icons/folder.ico'
import VistaDocument from '../assets/vista-icons/text_document.ico'
import TaskManager from '../assets/vista-icons/task_manager.ico'
import InternetExplorer from '../assets/vista-icons/internet_explorer.ico'
import { useState } from 'react'
import DesktopIcon from './desktop_icon'
import Window from './window/Window'

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

    const [windows, setWindows] = useState([])

    function openWindow(name) {
        const id = Date.now()
        setWindows((s) => [...s, { id, name }])
    }

    function closeWindow(id) {
        setWindows((s) => s.filter((w) => w.id !== id))
    }

    return (
        <>
        <div
            className="w-screen grid p-1 grid-flow-col gap-x-1 gap-y-f2 justify-start content-start bg-center bg-no-repeat"
            style={{ 
                height: 'calc(100vh - 40px)',
                overflowY: 'auto',
                backgroundImage: `url(${Aurora})`, 
                backgroundSize: '100% 100%',
                gridTemplateRows: 'repeat(auto-fill, 85px)',
                gridAutoColumns: '70px'
            }}
        >
            {desktopIcons.map((icon, index) => (
                <DesktopIcon key={`${icon.name}-${index}`} image={icon.image} name={icon.name} onDoubleClick={openWindow} />
            ))}
        </div>

        {windows.map((w) => (
            <Window key={w.id} id={w.id} name={w.name} onClose={closeWindow} />
        ))}
        </>
    )
}

export default Desktop