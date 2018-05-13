import React, { Fragment } from 'react';
import { Form, Button, Container} from 'semantic-ui-react'
import Navbar from './components/navbar';

export default class New extends React.Component {
  constructor (props) {
    super (props);
  }

  renderForm () {
    return (
      <Form action={this.props.createUrl} method='post'>
        <Form.Field>
          <label>Title</label>
          <input name='title' placeholder='Title'/>
        </Form.Field>
          <input type='hidden' name='user_id' value={this.props.currentUser.id}/>
          <input type='hidden' name={document.getElementsByName('csrf-param')[0].content} value={document.getElementsByName('csrf-token')[0].content} />
        <Button type='submit'>Submit</Button>
      </Form>
    );
  }

  renderErrors () {
    if (this.props.errorMessages){
      return this.props.errorMessages.map((each, idx) =>
        <div role='alert' className='alert alert-dismissable'>
          {each} <span dangerouslySetInnerHTML={{__html: "&times"}} />
        </div>
      )
    }
  }

  render () {
    return (
      <Fragment>
        <Navbar
          homePath={this.props.homePath}
        />
        <Container style={{paddingTop: '45px'}}>
          {this.renderErrors()}
          {this.renderForm()}
        </Container>
      </Fragment>
    );
  }
}