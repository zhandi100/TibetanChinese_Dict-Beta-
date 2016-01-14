var React = require('react');
var Reflux = require('reflux');
var store = require('./store');

var Definitions = React.createClass({
	mixins: [Reflux.listenTo(store, 'onStore')]
	,getInitialState: function() {
		return {
			initial: 'Search and Click on left panel'
			,entry : 'Entry'
			,page : ' pageNum'
			,tdef : '藏文解釋 ： Tibetan Definitions'
			,cdef : '中文解釋 ： Chinese Definitions'
			,abb : '【Abbreviations】'
			,syn : '同義詞 ： Synonyms'
			,note : '出處 ： Note'
		}
	}
	,onStore: function(entry, page, tdef, cdef, abb1, abb2, abb3, syn1, syn2, syn3, note) {
		if (abb1 !== '') abb1 = '【' + abb1 + '】';
		if (abb2 !== '') abb2 = '【' + abb2 + '】';
		if (abb3 !== '') abb3 = '【' + abb3 + '】';
		if ((syn1 || syn2 || syn3) == '') {
			this.setState({syn : [syn1, syn2, syn3]});
		} else {
			this.setState({syn : '同義詞 ： ' + [syn1, syn2, syn3].join('')});
		}
		this.setState({initial: ''});
		this.setState({entry : entry});
		this.setState({page : page})
		this.setState({tdef : '藏文解釋 ： ' + tdef});
		this.setState({cdef : '中文解釋 ： ' + cdef});
		this.setState({abb : [abb1, abb2, abb3]});
		this.setState({note : '出處 ： ' + note});
	}
	,render: function() {
		return (
			<div>
			{this.state.initial}<br/>
			{this.state.entry}
			{this.state.page}<br/>
			{this.state.tdef}<br/>
			{this.state.cdef}
			{this.state.abb}<br/>
			{this.state.syn}<br/>
			{this.state.note}
		</div>
			)
	}
});

module.exports = Definitions;