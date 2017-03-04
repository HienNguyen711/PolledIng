var React = require('react');
var io = require('socket.io-client');
var Header = require('./common/Header');

var App = React.createClass({
  //getInitialState
  getInitialState() {
    return {
      status:'disconnected'
    }




  },






  //willMount
  componentWillMount() {

    this.socket = io('http://localhost:3000');
    this.socket.on('connect',this.connect);
  },

  //connect()
  connect() {
    this.setState({
      status:'connected'
    });

  }

  render() {
    return (
      <h1>Hello React </h1>
    )
  }


});
module.exports = App;
