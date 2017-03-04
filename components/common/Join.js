var React = require('react');





var Join = React.createClass({



  join() {
    var memberName = React.findDOMNode(this.refs.name).value;
    this.props.emit('join',{
      name:memberName
    });

  },


  render() {
    return (
      <form>





      </form>


    )


  }



});
