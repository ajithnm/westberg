import * as React from "react"
import styled from "styled-components"

const NotFoundWrapper = styled.div`
  font-family: "Open Sans";
  margin-top: 200px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-weight: bold;
  }
`

const NotFoundPage = () => (
  <NotFoundWrapper>
    <h1>404 | NOT FOUND</h1>
    You just hit a route that doesn&#39;t exist!
  </NotFoundWrapper>
)

export default NotFoundPage
