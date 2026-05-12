import React from 'react'

function WindowComponent({ name }) {
    return (
        <div
            className="mx-1 my-1"
            style={{
                background: '#FFFFFF',
                border: '1px solid #9A9FA4',
                height: '30vh',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#000000'
            }}
        >
            {name}
        </div>
    )
}

export default WindowComponent
