function CloseButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="relative flex items-center justify-center w-8 h-6 overflow-hidden group border border-[rgb(97,62,62)] border-t-0 rounded-bl-sm rounded-br-sm"
            style={{
                background: "linear-gradient(to top, #B86F4B 0%, #AB3014 50%, #F47E53 55%, #ECA99D 100%)",
            }}
        >
            <span
                className="absolute inset-x-0 top-0 h-1/2 opacity-40 group-hover:opacity-20"
                style={{
                    background: "linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.1))",
                }}
            />
            <span
                className="relative text-white font-bold text-xs drop-shadow"
                style={{
                    textShadow: '-1px -1px 0 #956058, 1px -1px 0 #956058, -1px 1px 0 #956058, 1px 1px 0 #956058',
                    fontFamily: '"Segoe UI", "Segoe UI Bold", system-ui, -apple-system, Arial',
                    fontWeight: 700,
                }}
            >
                ✕
            </span>
        </button>
    )
}

export default CloseButton