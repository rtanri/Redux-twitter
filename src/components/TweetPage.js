import React, {Component} from 'react'
import { connect } from 'react-redux'
import Tweet from './Tweet'
import NewTweet from './NewTweet'

class TweetPage extends Component {
    render() {
        const {id, replies} = this.props
        return(
            <div>
                Hello World
                
            </div>
        )
    }
}

function mapStateToProps ({authedUser, tweets, users}, props){
    const {id} =props.match.params
    
    return {
        id,
        replies:!tweets[id]
            ? []
            : tweets[id].replies.sort((a,b) => tweets[b].timestamp - tweets[a].timestamp)
    }
}

export default connect (mapStateToProps)(TweetPage)