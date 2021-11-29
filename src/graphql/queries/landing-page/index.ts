const GET_LANDING_PAGE = /** GraphQL */ `
  query GET_LANDING_PAGE {
    landingPage {
      logo {
        url
        alternativeText
      }
    }
  }
`

export const LandingPageQueries = {
  GET_LANDING_PAGE
}
