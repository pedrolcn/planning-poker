import React from 'react';
import { Container } from 'semantic-ui-react';

export default class RoomsIndex extends React.Component {
  constructor (props) {
    super (props);
    
  }

  renderRooms () {
    if (this.props.rooms) {
      return (
        this.props.rooms.map((each) => 
          <p>{each.topic}</p>
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
      <Container>
        {this.renderRooms()}
      </Container>
    );
  }
}