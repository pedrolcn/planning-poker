import React from 'react';
import PokerCard from './poker_card';

export default class CardCollection extends React.Component {
  constructor (props) {
    super (props);
    
    this.state = {
      selected: null
    };

    if (!this.props.cardValues) {
      this.values = ['0', '1', '3', '5', '8', '13', '21', 'inf', '?']
    }

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selection) {
    this.setState({selected: selection});
  }

  renderCards() {
    return this.values.map((each, idx) =>
      <PokerCard
        value={each}
        key={idx}
        handleSelect={this.handleSelect}
      />
    )
  }

  render () {
    return (
      <div className='cards-container'>
        {this.renderCards()}
      </div>
    );
  }
}