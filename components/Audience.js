
var React = require('react');
var Display = require('./common/Display');
var Join = require();
var Audience = React.createClass({
  render() {
    return (
      <div>
        <Display if={this.props.status ==='connected'}/>
          //if
          <Display if... />

          //else


          <h1>Join the session</h1>

          <Join join/>
      </div>
    )
  }




});
module.exports = Audience;
