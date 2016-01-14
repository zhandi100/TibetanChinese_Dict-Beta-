var React = require('react');
var ReactDOM = require('react-dom');
var TermSearch = require('./TermSearch.js');
var Definitions = require('./definitions.js');

var Main = React.createClass({
	render: function() {
		return (
			<div className = 'container'>
			<div className = 'leftpanel'>
			<TermSearch/>
			</div>
			<div className = 'rightpanel'>
			<Definitions/>
			</div>
		</div>
		)
	}
});

ReactDOM.render(<Main />, document.getElementById('app'));