import React, { Component, Fragment } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from  '../actions/shared'
import Dashboard from './Dashboard' 
import LoadingBar from 'react-redux-loading'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'
import Nav from './Nav'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true ? null 
        : <TweetPage match={{params: {id: '8xf0y6ziyjabvozdd253nd'}}} /> }
      </div>
    )
  }
}

function mapStateToProps ({authedUser}) {
  return {
    loading: authedUser === null
    //If the authedUser is null, then we will render null instead of <Dashboard/>
  }
}

export default connect(mapStateToProps)(App)