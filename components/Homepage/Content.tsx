import { StructuredTextDocument, StructuredText } from "react-datocms/structured-text"
import DividerBottom from "../Divider/DividerBottom"
import Treeheading from "../TreeHeading"
import { UnwrapStructuredText } from "../UnwrapStructuredText"

interface ContentProps {
    homepage: {
        title: string;
        tagline: {
            value: StructuredTextDocument;
        };
        description: {
            value: StructuredTextDocument;
        };
    }
}


const Content: React.FC<ContentProps> = ({homepage}) => {
    const {title, tagline, description} = homepage

    return(

        <section className='bg-stone-200 pt-32  p-4 md:p-10 relative overflow-hidden w-foll' >
        <div className='overflow-hidden'>
          <DividerBottom className='fill-white top-0 rotate-180' />
          <Treeheading title='CAMP' className='top-5 ' />
          <div className="uppercase tracking-widest text-sm mb-12 xl:mb-20">
            {title}
          </div>
          <h1 className="text-black font-serif mb-12 text-4xl xl:text-8xl tracking-tight">
            <UnwrapStructuredText
              data={tagline.value as StructuredTextDocument}
            />
          </h1>
          <div className="leading-loose prose max-w-none text-base md:text-xl">
            <StructuredText
              data={description.value as StructuredTextDocument}
            />
          </div>
          <DividerBottom className='fill-blue max-h-[30px] -translate-x-10' />

        </div>
      </section>
    )
    }

    export default Content