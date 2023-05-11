import React, { Component } from 'react'
import "./App.css"
import Header from "./Header"
import SearchInput  from './SearchInput'
import EmojiResult from './EmojiResult'
import filterEmoji  from './FilterEmoji'


export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      filteredEmoji: filterEmoji("",20)
    }
    this.handleSearchChange = this.handleSearchChange.bind(this)
  }

  handleSearchChange(event){
    this.setState({
      filteredEmoji: filterEmoji(event.target.value ,20)
    })
  }


  render() {
    return (
      <div className='container'>
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <EmojiResult emojiData={this.state.filteredEmoji}/>
      </div>
    )
  }
}
