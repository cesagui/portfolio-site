import React from 'react'
import ResumeWindowComponent from './ResumeWindowComponent'
import OpenPowerliftingWindow from './OpenPowerliftingWindow'

function WindowComponent({ name }) {
    const isResumeWindow = name === 'Resume'
    const isOpenPLWindow = name === 'OpenPowerlifting'

    return (
        <div
            className="mx-1 my-1 overflow-hidden"
            style={{
                background: '#FFFFFF',
                border: '1px solid #9A9FA4',
                height: isResumeWindow || isOpenPLWindow ? '72vh' : '30vh',
                borderRadius: '4px',
                display: 'flex',
                alignItems: isResumeWindow || isOpenPLWindow ? 'stretch' : 'center',
                justifyContent: isResumeWindow || isOpenPLWindow ? 'stretch' : 'center',
                color: '#000000'
            }}
        >
            {isResumeWindow ? <ResumeWindowComponent /> : isOpenPLWindow ? <OpenPowerliftingWindow /> : name}
        </div>
    )
}

export default WindowComponent
