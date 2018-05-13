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
          <Table.Cell><a href={this.props.roomsPath[idx]}>{each.title}</a></Table.Cell>
        </Table.Row>
      )
    );
  }

  render () {
    return (
      <Fragment>
        <Navbar
          homePath={this.props.homePath}
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