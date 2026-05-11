function Footer(){
    return (
        <footer
            className="fixed bottom-0 left-0 right-0 z-50 h-10 border-t border-black/40"
            style={{
                backgroundImage:
                    'linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.08) 8%, rgba(255,255,255,0) 16%), linear-gradient(to bottom, rgb(86,89,95) 0%, rgb(57,60,66) 36%, rgb(27,30,36) 64%, rgb(8,11,15) 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.45), inset 0 -1px 0 rgba(0,0,0,0.8)',
            }}
        ></footer>
    )
}

export default Footer