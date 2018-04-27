import React from 'react';

export default class HomePage extends React.Component {
  constructor (props) {
    super (props);
    
  }

  render () {
    return (
      <section>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: "center"}}>
          Hello World!
        </div>
      </section>
    );
  }
}