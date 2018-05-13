import React, { Fragment }from 'react';
import { Container, Table } from 'semantic-ui-react';
import Navbar from './components/navbar'

export default class RoomsIndex extends React.Component {
  constructor (props) {
    super (props);
    
  }

  renderRooms () {
    return (
      this.props.rooms.map((each, idx) => 
        <Table.Row key={idx}>
          <Table.Cell>{each.id}</Table.Cell>
          <Table.Cell>{each.title}</Table.Cell>
        </Table.Row>
      )
    );
  }

  render () {
    return (
      <Fragment>
        <Navbar
          newRoomPath={this.props.newRoomPath}
        />
          <h1 style={{paddingTop: '40px'}}>Rooms Index</h1>
          <Table singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>#</Table.HeaderCell>
                <Table.HeaderCell>Title</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.renderRooms()}
            </Table.Body>
          </Table>
      </Fragment>
    );
  }
}