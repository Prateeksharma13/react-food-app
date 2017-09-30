import React, { Component } from 'react';
import Menusection from './menusection.js';
import { Grid, Row, Col } from 'react-bootstrap';

class Menu extends Component {
  addItem(id) {
    this.props.addItem(id);
  }
  removeItem(id) {
    this.props.removeItem(id);
  }
  render() {
    return (
      <div className="Menu">
              <Grid>
        <Row className="show-grid">
          <Col md={12}><Menusection removeItem={this.props.removeItem.bind(this)} addItem={this.props.addItem.bind(this)} all={this.props.all} selected={this.props.selected}/></Col>
          {this.props.total}
        </Row>
        </Grid>
      </div>
    );
  }
}

export default Menu;
