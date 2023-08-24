
interface TreeHeadingType {
    title: string;
}


const Treeheading: React.FC<TreeHeadingType> = ({ title }) => { 

    return(
        <div className="flex justify-center gap-5 items-center absolute z-[1] top-5 h-[30px] inset-2/4 -translate-x-1/2 w-fit">
            <span className="block bg-tree-1 bg-no-repeat bg-contain w-[18px] h-[40px]"/>
            <span className="block bg-tree-2 bg-no-repeat bg-contain w-[15px] h-[30px]"/>
            <h1 className="text-xl md:text-6xl font-bold text-black ">{title}</h1>
            <span className="block bg-tree-2 bg-no-repeat bg-contain w-[15px] h-[30px]"/>
            <span className="block bg-tree-1 bg-no-repeat bg-contain w-[20px] h-[40px]"/>
        </div>
    )
}   

export default Treeheading;