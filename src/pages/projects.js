import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Layout, Projects, Algolia } from "../components"
import SEO from "../components/seo"

const ProjectsPage = ({data}) => {
  const {allAirtable:{nodes:projects}} = data
  return <Wrapper>
    <Layout>
    <SEO title="Projects"/>
    <Projects title="our projects" projects={projects} page />
    <Algolia />
    </Layout>
  </Wrapper>
}

const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-grey-10);
  nav {
    background: var(--clr-primary-7);
  }
`
export const query = graphql`
  {
    allAirtable(filter: {table: {eq: "Projects"}}) {
      nodes {
        id
        data {
          date
          name
          type
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default ProjectsPage
