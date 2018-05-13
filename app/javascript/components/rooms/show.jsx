import React, { Fragment } from 'react';
import Navbar from './components/navbar';
import PokerCards from './components/poker_cards';
import { Container, Header} from 'semantic-ui-react';

export default class ClassName extends React.Component {
  constructor (props) {
    super (props);
    
  }

  render () {
    return (
      <Fragment>
        <Navbar 
          homePath={this.props.homePath}
        />
        <Container style={{paddingTop: '45px'}}>
          <Header as='h1'>{this.props.room.title}</Header>
          <PokerCards />
        </Container>
      </Fragment>
    );
  }
}