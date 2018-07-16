import React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'patternfly-react';

export class InlineEditForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      value: this.props.value,
      input: ''
    }
  }

  componentWillReceiveProps(prop) {
    // handle syncing stories
  }

  handleEdit = () => {
    this.setState({editing: true});
  }

  cancelEdit = () => {
    this.setState({editing: false});
  }

  handleSave = () => {
    this.setState({editing: false, value: this.state.input});
    this.props.saveForm(this.state.input);
  }

  handleInputChange = (event) => {
    this.setState({input: event.target.value.trim()});
  }

  handleClearInput = () => {
    this.setState({input: ''});
    this.inputForm.value = '';
  }

  renderForm = () => {
    return (
      <div>
        <FormGroup className="inline-edit-form-group" controlId="story" bsSize="large">         
          <FormControl
            type="text"
            placeholder={this.props.placeholder}
            defaultValue={this.state.value}
            bsSize="large"
            onChange={this.handleInputChange}
            inputRef={el => this.inputForm = el}
          />
          <Button className="clear-input-btn" onClick={this.handleClearInput} bsSize="large">
            <span className="fa fa-times-circle fa-lg"></span>
          </Button>

          <Button bsStyle="primary" onClick={this.handleSave} bsSize="large">
            <i className="glyphicon glyphicon-ok"></i>
          </Button>

          <Button onClick={this.cancelEdit} bsSize="large">
            <i className="glyphicon glyphicon-remove"></i>
          </Button>
        </FormGroup>      
      </div>
    )
  };

  render() {
    return( 
      <div className="inline-edit-container">
        <Form className="inline-edit-form" inline>
          <ControlLabel className="align-middle"> {this.props.label} </ControlLabel>            
          {!this.state.editing && 
            <Button className="inline-edit-value" bsSize="large" onClick={this.handleEdit}>
              {this.state.value ? this.state.value : this.props.placeholder} 
              <i className="glyphicon glyphicon-pencil" aria-hidden="true"></i>
            </Button>}
        {this.state.editing && this.renderForm()}
        </Form>
      </div>
    );
  }
}