var React = require('react');
var Search = require('./search.js');
var actions = require('./actions.js')

var TermSearch = React.createClass({
	getInitialState: function() {
		return {
			tofind: ''
			,matches: [' term1',' term2']
		};
	}
	,search: function() {
		var matches = Search(this.state.tofind);
		this.setState({matches: matches});
	}
	,oninput: function(e) {
		this.setState({tofind: e.target.value});
		clearTimeout(this.timer);
		this.timer = setTimeout( function() {
			this.search();
		}.bind(this), 500);
	}
	,showdef: function(e) {
		var termpos = e.target.dataset.idx;
		actions.showDef(termpos);
	}
	,renderItem: function(item) {
		return (
			<div className = 'item' 
			onClick = {this.showdef} 
			data-idx = {item[1]}>
			{item[0]}
		</div>
			)
	}
	,render: function() {
		return (
			<div>
			<input onInput = {this.oninput}/>
			{this.state.matches.map(this.renderItem)}
		</div>
			)
	}
});

module.exports = TermSearch;