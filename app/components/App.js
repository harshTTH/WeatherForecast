var React = require('react');
var ReactDom = require('react-dom');
var Header = require('./Header');

class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
      </div>
    )
  }
}

module.exports = App;
