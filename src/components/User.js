import React, { PropTypes, Component } from 'react'

export default class User extends Component {
  onChangeName(e){
    this.props.changeName(e.target.value)
  }
  render() {
    const { name } = this.props
    return <div>
      <p>Привет, {name}!</p>
      <input type='text' onChange={::this.onChangeName}/>
    </div>
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired
}