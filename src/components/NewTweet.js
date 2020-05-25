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
        const {text} = this.props

        return (
            <div>
                <h3 className='center'>Compose New Tweet</h3>
                <form className='new-tweet' onSubmit>
                    <textarea 
                        placeholder="What's happening?"
                        value={text}
                        onChange={this.handleChange}
                        className="textarea"
                        maxLength={280}
                />

            
            </div>
        )
    }
}

export default NewTweet