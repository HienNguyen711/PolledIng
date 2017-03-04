var React = require('react');
var io = require('socket.io-client');
var Header = require('./common/Header');
var Router = require();

var App = React.createClass({
  //getInitialState
  getInitialState() {
    return {
      status:'disconnected',
      title:'',
      member:{},
      audience:[]
    }




  },






  //willMount
  componentWillMount() {

    this.socket = io('http://localhost:3000');
    this.socket.on('connect',this.connect);
    this.socket.on('disconnect',this.disconnect);
    this.on('Welcome',this.welcome);
    this.on('join',this.joined);
  },

  emit(eventName) {

    this.socket()
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


  joined(member) {
    this.setState({
      member:member
    });
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
