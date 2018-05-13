import React from 'react';

export default class PokerCard extends React.Component {
  constructor (props) {
    super (props);

    this.selectCard = this.selectCard.bind(this);
  }

  selectCard (e) {
    Array.from(document.getElementsByClassName('card')).forEach( item => {
      item.classList.remove('active');
    });

    this.props.handleSelect(this.props.value);
    e.target.classList.add('active');
  }

  render () {
    return (
      <div className='card' onClick={this.selectCard}>
        {this.props.value}
      </div>
    );
  }
}