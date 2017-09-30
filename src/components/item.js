import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class Item extends Component {
  addItem(id) {
    console.log('here');
    this.props.addItem(id);
  }
  render() {
    return (
      <div>
          <li className="left">
              {this.props.item.name} - {this.props.item.price}
              <Button onClick={this.addItem.bind(this, this.props.item.id)}> Add</Button>
          </li>
      </div>
    );
  }
}

export default Item;
