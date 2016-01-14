var Reflux = require('reflux');
var actions = require('./actions');

var store = Reflux.createStore({
	listenables: actions
	,data: []
	,onShowDef: function(termpos) {
		var entry = dictdata[termpos].entry;
		var page = dictdata[termpos].page;
		var tdef = dictdata[termpos].tdefinitions[0].tdef;
		var cdef = dictdata[termpos].tdefinitions[0].cdefinitions[0].cdef;
		var abb1 = dictdata[termpos].tdefinitions[0].cdefinitions[0].abbreviations[0];
		var abb2 = dictdata[termpos].tdefinitions[0].cdefinitions[0].abbreviations[1];
		var abb3 = dictdata[termpos].tdefinitions[0].cdefinitions[0].abbreviations[2];
		var syn1 = dictdata[termpos].tdefinitions[0].cdefinitions[0].synonyms[0];
		var syn2 = dictdata[termpos].tdefinitions[0].cdefinitions[0].synonyms[1];
		var syn3 = dictdata[termpos].tdefinitions[0].cdefinitions[0].synonyms[2];
		var note = dictdata[termpos].tdefinitions[0].cdefinitions[0].note;
		this.trigger(entry, page, tdef, cdef, abb1, abb2, abb3, syn1, syn2, syn3, note);
	}
});

module.exports = store;