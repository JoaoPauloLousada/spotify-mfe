import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: ${({theme}) => theme.dark};
  color: ${({theme}) => theme.light};
  height: 100%;
  width: 100%;
  h3 {
    margin: 0;
    padding: 2rem 0;
    text-align: center;
  }
`
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // console.log('componentDidCatch', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Wrapper>
          <h3>Something went wrong.</h3>
        </Wrapper>
      )
    }

    return this.props.children; 
  }
}
