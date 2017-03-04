var React = require('react');



var Header = React.createClass({
  //propTypes
  propTypes: {
    title:React.PropTypes.string.isRequired

  },


  render() {
    return (

      <header>
        <h1>{this.props.title}</h1>



      </header>

    )
  }





})
