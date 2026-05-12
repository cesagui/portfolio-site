import React from 'react'
import CloseButton from './CloseButton'
import WindowComponent from './WindowComponent'

function Window({ id, name, onClose }) {
    return (
        <div
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-120 bg-[rgba(207,230,250,0.66)] backdrop-blur-[12px] border-2 border-[rgba(154,159,164,0.60)] rounded-lg shadow-[0_12px_36px_rgba(0,0,0,0.28)] overflow-hidden"
            style={{
                borderRadius: '8px',
                boxShadow: '0 12px 36px rgba(0,0,0,0.28), 0 0 24px rgba(29,140,226,0.12), 0 0 8px rgba(29,140,226,0.06)',
                fontFamily: 'Segoe UI, Tahoma, Geneva, sans-serif'
            }}
        >
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                <div
                    style={{
                        position: 'absolute',
                        left: '-30%',
                        top: '-30%',
                        width: '180%',
                        height: '160%',
                        transform: 'rotate(18deg)',
                        backgroundImage: 'linear-gradient(90deg, rgba(217,237,253,0) 20%, rgba(217,237,253,0.28) 32%, rgba(217,237,253,0.95) 44%, rgba(217,237,253,0.28) 56%, rgba(217,237,253,0) 72%)',
                        opacity: 0.64,
                        mixBlendMode: 'screen',
                        filter: 'saturate(50%)'
                    }}
                />
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
                <div className="flex items-center justify-between px-3 pb-1" style={{ background: 'rgba(235,245,255,0.035)', borderBottom: '1px solid rgba(120,140,160,0.06)' }}>
                    <div className="font-light text-sm" style={{ transform: 'translateY(2px)' }}>{name}</div>
                    <CloseButton onClick={() => onClose(id)} />
                </div>

                <WindowComponent name={name} />
            </div>
        </div>
    )
}

export default Window