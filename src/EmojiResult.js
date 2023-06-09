import React, { Component } from 'react'
import './EmojiResult.css'
import EmojiResultRow from './EmojiResultRow'
import Clipboard from 'clipboard'


export default class EmojiResult extends Component {

    componentDidMount(){
        this.clipboard = new Clipboard('.copy-to-clipboard')
    }

    componentWillUnmount(){
        this.clipboard.destroy()
    }

  render() {
    return (
      <div className='component-emoji-results'>
            {this.props.emojiData.map(emojiData => (
                <EmojiResultRow 
                key={emojiData.title} 
                symbol={emojiData.symbol} 
                title={emojiData.title} 
                
                
                />
            ))}
      </div>
    )
  }
}
