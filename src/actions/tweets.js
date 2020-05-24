import { saveLikeToggle } from '../utils/api'

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const TOGGLE_TWEETS = 'TOGGLE_TWEETS'

export function receiveTweets (tweets) {
    return {
        type: RECEIVE_TWEETS,
        tweets,
    }
}

function toggleTweet({id, authedUser, hasLiked}){
    return {
        type: TOGGLE_TWEETS,
        id,
        authedUser,
        hasLiked,
    }
}

