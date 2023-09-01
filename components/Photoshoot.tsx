import DatoImage from '@/components/DatoImage';
import { FragmentType, graphql, getFragmentData } from '@/gql';
import DividerBottom from './Divider/DividerBottom';
import Treeheading from './TreeHeading';


const Photoshoot_photoshoot = graphql(/* GraphQL */ `
  fragment Photoshoot_photoshoot on PhotoshootRecord {
    coverImage {
      responsiveImage(imgixParams: { auto: format, h: 1400 }) {
        width
        height
        ...DatoImage_responsiveImage
      }
    }
  }
`);

type Props = {
  photoshoot: FragmentType<typeof Photoshoot_photoshoot>,
}

export function Photoshoot({
  ...rest
}: Props) {
  const photoshoot = getFragmentData(Photoshoot_photoshoot, rest.photoshoot);
 

  return (
    <div className="relative delay-100 transition-transform md:hover:scale-105 rounded-3xl border shadow-lg border-black/40 overflow-hidden " >
   
        <DatoImage
          pictureClassName=" overflow-hidden "
          layout="responsive"
          fragment={photoshoot.coverImage.responsiveImage}
          sizes={`100vw, (min-width: 600px) ${(photoshoot.coverImage.responsiveImage.width /
            photoshoot.coverImage.responsiveImage.height) *
            100
            }vh`}
        />

    </div>
  );
}
