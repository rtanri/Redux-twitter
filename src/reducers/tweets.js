import {RECEIVE_TWEETS, TOGGLE_TWEETS, ADD_TWEET} from '../actions/tweets'

export default function users (state ={}, action) {
    switch(action.type) {
        case RECEIVE_TWEETS:
            return {
                ...state, 
                ...action.tweets
            }
        case TOGGLE_TWEETS:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    likes: action.hasLiked === true
                        //If they are already like the tweet
                        ? state[action.id].likes.filter((uid)=> uid !== action.authedUser)
                        //if they haven't like the tweet, add the authedUser to 'Likes' array
                        : state[action.id].likes.concat([action.authedUser])
                }
            }
        default :
            return state
    }
}