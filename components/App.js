var React = require('react');
var io = require('socket.io-client');
var Header = require('./common/Header');
var Router = require();

var App = React.createClass({
  //getInitialState
  getInitialState() {
    return {
      status:'disconnected',
      title:''
    }




  },






  //willMount
  componentWillMount() {

    this.socket = io('http://localhost:3000');
    this.socket.on('connect',this.connect);
    this.socket.on('disconnect',this.disconnect);
    this.on('Welcome',this.welcome);
  },

  //connect()
  connect() {
    this.setState({
      status:'connected'
    });

  },

  disconnect() {
    this.setState({
      status:'disconnected'
    });
  },

  //welcome
  welcome(serverState) {
    this.setState({
      title:serverState.title
    })
  },






  render() {
    return (
      <div>
        <Header title={this.state.title} status={this.state.status} />
        <RouteHandler {this.state}/>


      </div>
    )
  }


});
module.exports = App;
