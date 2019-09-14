/* eslint no-unused-vars: 0 */
/* eslint no-undef: 0 */

import React from 'react'
import { CardList } from './components/CardList/CardList'
import { SearchBox } from './components/SearchBox/SearchBox'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  async componentDidMount() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const response = await data.json()
    this.setState({ monsters: response })
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="Search" handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App
