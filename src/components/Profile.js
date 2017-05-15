import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import User from './User'
import Page from './Page'
import * as pageActions from '../actions/PageActions'
import * as changeName from '../actions/ChangeUserName'

class App extends Component {
  render() {
    const { user, page } = this.props;
    const { getPhotos } = this.props.pageActions
    const { changeName } = this.props.changeName

    return <div>
      <User name={user.name} changeName={changeName}/>
      <Page year={page.year} photos={page.photos} getPhotos={getPhotos} fetching={page.fetching}/>
    </div>
  }

}

function mapStateToProps(state) {
  return {
    user: state.user,
    page: state.page
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch),
    changeName: bindActionCreators(changeName, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
