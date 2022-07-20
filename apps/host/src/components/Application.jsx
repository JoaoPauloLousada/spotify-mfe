import React, { useContext } from 'react'
import { Dependencies } from '../bootstrap';

class Application extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      htmlElement: React.createRef(),
    }
  }

  componentDidMount() {
    const {spotify, eventBus, onMounted} = this.props;
    this.props.mountApplication(this.state.htmlElement.current, {spotify, eventBus, onMounted});
  }

  componentWillUnmount() {
    this.props?.unmountApplication(this.state.htmlElement.current);
  }

  render() {
    return <div style={{height: '100%'}} ref={this.state.htmlElement}></div>
  }
}

const WithContextApplication = (props) => {
  const dependencies = useContext(Dependencies);
  return <Application {...dependencies} {...props} />
}

export default WithContextApplication
