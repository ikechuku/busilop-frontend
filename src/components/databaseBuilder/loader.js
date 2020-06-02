import React from 'react';
import { BallBeat } from 'react-pure-loaders';

export default class AwesomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div>
        <BallBeat
          color={'#123abc'}
          loading={this.state.loading}
        />
      </div>
    )
  }
}