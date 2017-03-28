import React from 'react'


export default class Dog extends React.Component {
  bark() {
    alert('Woof woof woof');
  }

  render() {
    return <div onClick={this.bark}><h2>Dog</h2></div>
  }
}
