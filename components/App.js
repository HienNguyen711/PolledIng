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
      audience:[],
      speaker:'',
      questions:[]
    }




  },






  //willMount
  componentWillMount() {

    this.socket = io('http://localhost:3000');
    this.socket.on('connect',this.connect);
    this.socket.on('disconnect',this.disconnect);
    this.on('Welcome',this.updateState);
    this.on('join',this.joined);
    this.socket.on('audience',this.updateAudience);
    this.socket.on('start',this.start);
    //end

  },

  emit(eventName) {

    this.socket()
  },




  //connect()
  connect() {
    //check from storage




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
  updateState(serverState) {
    this.setState({
      serverState
    })
  },


  joined(member) {
    //save storage
    sessionStorage.member ;


    this.setState({
      member:member
    });
  },





  updateAudience() {
    //setState


  },

  start() {

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
