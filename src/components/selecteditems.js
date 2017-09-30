import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class Selecteditem extends Component {
  removeItem(id) {
    console.log('here');
    this.props.removeItem(id);
  }
  render() {
    return (
      <div>
          <li className="left">
              {this.props.item.name} - {this.props.item.price} - {this.props.item.quantity}
              <Button onClick={this.removeItem.bind(this, this.props.item.id)}> Remove</Button>
          </li>
      </div>
    );
  }
}

export default Selecteditem;
