const GET_LANDING_PAGE = /** GraphQL */ `
  fragment logo on LandingPage {
    logo {
      url
      alternativeText
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      button {
        url
        label
      }
      image {
        url
        alternativeText
      }
    }
  }

  fragment sectionAboutProject on LandingPage {
    sectionAboutProject {
      title
      description
      image {
        url
        alternativeText
      }
    }
  }

  fragment sectionTech on LandingPage {
    sectionTech {
      title
      techIcons {
        title
        icon {
          url
        }
      }
    }
  }
  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...sectionAboutProject
      ...sectionTech
    }
  }
`

export const LandingPageQueries = {
  GET_LANDING_PAGE
}
