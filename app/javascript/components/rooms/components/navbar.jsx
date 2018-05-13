import React, { Component } from 'react'
import { Sidebar, Segment, Menu, Icon } from 'semantic-ui-react'

export default class Navbar extends Component {
  constructor (props) {
    super(props);
  }

  renderCreateRoomButton() {
    if (this.props.newRoomPath) {
      return (
        <Menu.Menu position='right'>
            <a href={this.props.newRoomPath}>
              <Menu.Item>
                Create New Room
              </Menu.Item>
            </a>
        </Menu.Menu>
      );
    }
  }

  render() {
    return (
        <Sidebar as={Menu} direction='top' visible={true} inverted>
          <Menu.Menu>
            <a href={this.props.homePath}>
              <Menu.Item name='home'>
                <Icon name='home' />
                Home
              </Menu.Item>
            </a>
            <Menu.Item name='gamepad'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
          </Menu.Menu>
          {this.renderCreateRoomButton()}
        </Sidebar>
    )
  }
}