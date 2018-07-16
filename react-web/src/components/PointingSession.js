import React from 'react';
import { PointSelector } from './pointSelector';
import { InlineEditForm } from './InlineEditForm';

export class PointingSession extends React.Component {

  constructor(props) {
    super(props);

    this.pointSelected = this.pointSelected.bind(this);
    this.saveStory = this.saveStory.bind(this);
  }

  pointSelected(value) {
    // Handle point value
  }

  saveStory(storyValue) {
    // Handle story input
  }

  render() {
    return( 
      <div className="pointing-session-container">
        <InlineEditForm label="Story:" saveForm={this.saveStory} placeholder="Enter your story here" />
        <div className="col-md-6 text-center">
          <PointSelector onPointSelected={this.pointSelected}></PointSelector>
        </div>
      </div>
    );
  }
}