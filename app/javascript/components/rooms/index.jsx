import React, { Fragment }from 'react';
import { Container } from 'semantic-ui-react';
import Navbar from './components/navbar'

export default class RoomsIndex extends React.Component {
  constructor (props) {
    super (props);
    
  }

  renderRooms () {
    if (this.props.rooms.length > 0) {
      return (
        this.props.rooms.map((each, idx) => 
          <p key={idx}>{each.title}</p>
        )
      );
    } else {
      return (
        <p> There are no rooms to show, why don't you create one </p>
      );
    }
  }

  render () {
    return (
      <Fragment>
        <Navbar />
        <Container style={{paddingTop: '40px'}}>
          <h1>Rooms Index</h1>
          {this.renderRooms()}
        </Container>
      </Fragment>
    );
  }
}