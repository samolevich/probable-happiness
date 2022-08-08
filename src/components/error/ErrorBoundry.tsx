import { Component } from 'react'
import Error from './Error'

type State = { hasError: boolean }

class ErrorBoundry extends Component<{ children: React.ReactNode }> {
  state: State = { hasError: false }

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) return <Error />
    else return this.props.children;
  }
}

export default ErrorBoundry;
