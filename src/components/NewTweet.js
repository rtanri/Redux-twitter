import React, {Component} from 'react'

class NewTweet extends Component {
    state ={
        text= '',
    }
    
    handleChange = (e) => {
        const text = e.target.value,

        this.setState(() => ( {text} ))
    }

    render() {
        return (

        )
    }
}

export default NewTweet