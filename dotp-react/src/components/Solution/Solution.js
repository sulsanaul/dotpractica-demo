import React, { Component } from 'react';
import Explanation from '../Explanation/Explanation';
import Answer from '../Answer/Answer';
import { Paper } from 'material-ui';

class Solution extends Component {
  render() {
    return (
      <div>

      <div style={{padding: 10}}>
    		<Answer
          inputType={this.props.inputType}
          options={this.props.options}/>

        <Explanation/>
      </div>
      </div>
    );
  }
}
export default Solution;
