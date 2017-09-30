import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu.js';
import uuid from 'uuid';


class App extends Component {
  constructor() {
    super();
    this.state = {
      all: [
        {
          'id' : uuid.v4(),
          'name' : 'one',
          'price' : 10
        },
        {
          'id' : uuid.v4(),
          'name' : 'two',
          'price' : 20
        },
        {
          'id' : uuid.v4(),
          'name' : 'three',
          'price' : 30
        },
      ],
      selected: [
      ],
      total: 0
    }
  }

  addItem(id) {
    let index = this.state.all.findIndex(x => x.id === id);
    //let item_to_add = {'name': this.state.all[index]['name'], 'price': this.state.all[index]['price']};
    let already_there = this.state.selected.findIndex(x => x.id === id);
    if(already_there == -1) {
        this.state.all[index]['quantity'] = 1;
        this.state.selected.push(this.state.all[index]);
        this.state.total +=this.state.all[index]['price'];
    } else {
      this.state.selected[already_there]['quantity'] = this.state.selected[already_there]['quantity'] + 1;
      this.state.total += this.state.selected[already_there]['price'];
    }
    console.log(this.state.selected[already_there]);
    this.setState(this.state.selected);
  }
  removeItem(id) {
    let index = this.state.selected.findIndex(x => x.id === id);
    if(this.state.selected[index]['quantity'] == 1) {
        this.state.total -= this.state.selected[index]['price'];
        this.state.selected.splice(index,1);
    } else {
      this.state.selected[index]['quantity'] = this.state.selected[index]['quantity'] - 1;
      this.state.total -=this.state.selected[index]['price'];
    }
    this.setState(this.state.selected);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Food Menu</h2>
        </div>
        <Menu total={this.state.total} removeItem={this.removeItem.bind(this)} addItem={this.addItem.bind(this)} all={this.state.all} selected={this.state.selected}> </Menu>
      </div>
    );
  }
}

export default App;
