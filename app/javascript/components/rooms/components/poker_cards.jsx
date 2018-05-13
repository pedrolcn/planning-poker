import React from 'react';

export default class PokerCards extends React.Component {
  constructor (props) {
    super (props);
    
    this.state = {
      selected: undefined
    };

    if (!this.props.cardValues) {
      this.values = ['0', '1', '3', '5', '8', '13', '21', 'inf', '?']
    }
  }

  renderCards() {
    return this.values.map((each, idx) =>
      <div className='card' key={idx}>
        {each}
      </div>
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