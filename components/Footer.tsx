import DividerBottom from "./Divider/DividerBottom"


const Footer = () => {
    return (
        <footer className=" bg-secondary relative overflow-hidden">
            <div className="p-10">
            <div className='absolute top-0  -translate-x-1/2 left-1/2  bg-secondary w-screen h-full -z-10' />
             <div className="bg-white/50 p-12 w-full h-full  rounded-2xl">
                asd
             </div>
            </div>
            <DividerBottom className="top-0 rotate-180 fill-white" />
        </footer>
    )
}

export default Footer
