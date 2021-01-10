import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import '../../assets/scss/init.scss';

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isClient: false }
  }


  render() {
    const { children } = this.props;

    return (
       <Fragment key={this.state.isClient}> 
        <div className="layout">
          <Helmet defaultTitle="Blog by Aleksandar Ristevski" />
          {children}
        </div>
      </Fragment>
    );
  }
  componentDidMount() {
    this.setState({ isClient: true })
  }
}

export default Layout;
