
var React = require('react');
var Display = require('./common/Display');
var Audience = React.createClass({
  render() {
    return (
      <div>
        <Display if={this.props.status ==='connected'}/>
          <h1>Join the session</h1>


      </div>
    )
  }




});
module.exports = Audience;
