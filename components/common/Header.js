var React = require('react');



var Header = React.createClass({
  //propTypes
  propTypes: {
    title:React.PropTypes.string.isRequired

  },

  getDefaultProps() {
    return {
      status:'Disconnected'
    }
  }





  render() {
    return (

      <header className="row">
        <div className="col-xs-10">
        <h1>{this.props.title}</h1>



      </header>

    )
  }





})
