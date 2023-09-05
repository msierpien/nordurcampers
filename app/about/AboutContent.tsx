import DatoImage from "@/components/DatoImage"
import { ResponsiveImageType } from "react-datocms/image";
import { StructuredText, StructuredTextDocument } from "react-datocms/structured-text"

interface AbouteContentProps {
    aboutPage: {
        title: string;
        kicker: string;
        subtitle: {
            value: StructuredTextDocument;
        };
        content: {
            value: StructuredTextDocument;
        };
        image: {
            responsiveImage: ResponsiveImageType;
        }
    }
}

const AbouteContent: React.FC<AbouteContentProps> = ( {aboutPage} ) => {

    return(
        <div>
        <div className='flex flex-col md:flex-row relative h-full'>
          <div className="flex-1 mx-7 h-full py-5 md:py-24 max-w-[800px] ">
            <div>
              <div className="uppercase tracking-widest text-sm mb-12 xl:mb-20 xl:mt-16">
                {aboutPage.kicker}
              </div>
              <h1 className="text-black font-serif mb-12 text-5xl xl:text-6xl tracking-tight">
                {aboutPage.title}
              </h1>
              <div className="text-xl mb-5 md:mb-12 leading-loose">
                <StructuredText
                  data={aboutPage.subtitle.value as StructuredTextDocument}
                />
              </div>
              <div className="prose max-w-none">
                <StructuredText
                  data={aboutPage.content.value as StructuredTextDocument}
                />
              </div>
            </div>
          </div>ł
          <div className="block md:sticky flex-1 top-0 md:top-32 h-full w-full md:w-[45vw] 2xl:w-[50vw] rounded-2xl  m-5">
            <DatoImage
              layout="responsive"
              // @ts-ignore
              fragment={aboutPage.image.responsiveImage}
              objectFit="cover"
              className='rounded-2xl'
            //   objectPosition={`left ${aboutPage.image.focalPoint.x * 100}% top ${aboutPage.image.focalPoint.y * 100
            //     }%`}
              sizes="50vw"
            />
          </div>
    
  
        </div>
          <div className="prose max-w-none">
                <StructuredText
                  data={aboutPage.content.value as StructuredTextDocument}
                />
              </div>
      </div>
    )

}

export default AbouteContent