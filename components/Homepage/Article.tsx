import { StructuredText, StructuredTextDocument } from "react-datocms/structured-text"
import Treeheading from "../TreeHeading"
import { HomepageRecord } from "@/gql/graphql"

interface IcelandProps {
    homepage: {
        icelandTitle: string;
        opisIslandia: {
            value: StructuredTextDocument;
        }
    };
}


const Iceland: React.FC<IcelandProps> = ({homepage}) => {
    const { icelandTitle, opisIslandia } = homepage
    return(    
        <section>
          <div className='container  px-4 pb-6 overflow-hidden'>
            <div className='relative text-center w-full my-10 md:my-24  p-2 '>
              <Treeheading title={icelandTitle} className='top-0 text-stone-800 ' />
              <div className='container  mt-10'>
                <div className="leading-loose prose max-w-none text-justify py-10 text-base md:text-xl">
                  <StructuredText
                    data={opisIslandia?.value as StructuredTextDocument}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>)

}

export default Iceland