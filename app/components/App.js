var React = require('react');
var ReactDom = require('react-dom');
var Header = require('./Header');
var Home = require('./Home');

class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <Home />
      </div>
    )
  }
}

module.exports = App;
