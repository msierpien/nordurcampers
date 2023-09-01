import { graphql } from "@/gql";

export default graphql(/* GraphQL */ `
  query Home {
    homepage {
      _seoMetaTags {
        tag
        attributes
        content
      }
      title
      tagline {
        value
      }
      heroText
      hero {
        responsiveImage(imgixParams: {fit: crop, w: 2048, h: 1152, auto: format}) {
          srcSet
          webpSrcSet
          sizes
          src
          width
          height
          aspectRatio
          alt
          title
          base64
        }
      }
      description {
        value
      }
    
    }

    photoshoots: allPhotoshoots(orderBy: position_ASC) {
      id
      ...Photoshoot_photoshoot
    }

    meta: _allPhotoshootsMeta {
      count
    }
  }
`);