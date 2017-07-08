var React = require('react');
var queryString = require('query-string');

class Results extends React.Component {
  componentDidMount() {
    var players = queryString.parse(this.props.location.search);
  }

  render() {
    return (
      <div>Results</div>
    )
  }
}

module.exports = Results;
