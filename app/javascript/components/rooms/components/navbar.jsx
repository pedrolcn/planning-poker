import React, { Component } from 'react'
import { Sidebar, Segment, Menu, Icon } from 'semantic-ui-react'

export default class Navbar extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
        <Sidebar as={Menu} direction='top' visible={true} inverted>
          <Menu.Menu>
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
          </Menu.Menu>

          <Menu.Menu position='right'>
            <Menu.Item>
              <a href='#'>Create New Room</a>
            </Menu.Item>
          </Menu.Menu>
        </Sidebar>
    )
  }
}