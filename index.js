var levelsToTable = require('levels-to-table');

var levelsFilterFactory = (function(){

	var keys = ['inputBlack','inputWhite','gamma','outputBlack','outputWhite'];

	var filterProto = {
		reset: reset,
		setLevelValues: setLevelValues,
		getLevelValues: getLevelValues,
		getTableValues: getTableValues
	}
	Object.defineProperty(filterProto, 'gamma', {
		get: function() { return this._gamma; },
  		set: function(newValue) { this._gamma = Math.max(Math.min(5,newValue),0); },
	})

	function reset() {
		this.inputBlack = 0;
		this.inputWhite = 255;
		this.gamma = 1;
		this.outputBlack = 0;
		this.outputWhite = 255;
	}

	function setLevelValues(values) {
		if(!values){
			return;
		}
		for (var i = 0, len = keys.length; i < len; i += 1) {
			if (keys[i] in values) {
				this[keys[i]] = values[keys[i]];
			}
		}
	}

	function getLevelValues() {
		return {
			inputBlack: this.inputBlack,
			inputWhite: this.inputWhite,
			gamma: this.gamma,
			outputBlack: this.outputBlack,
			outputWhite: this.outputWhite
		}
	}

	function getTableValues() {
		return levelsToTable(this.inputBlack/255, this.inputWhite/255, this.gamma, this.outputBlack/255, this.outputWhite/255);
	}

	return function() {
		var filterInstance = Object.create(filterProto, {
			inputBlack: {
				value: 0,
				writable: true
			},
			inputWhite: {
				value: 255,
				writable: true
			},
			outputBlack: {
				value: 0,
				writable: true
			},
			outputWhite: {
				value: 255,
				writable: true
			},
			_gamma: {
				value: 1,
				writable: true
			}
		});
		return filterInstance
	}
}())

if (typeof module !== 'undefined' && 'exports' in module) {
	module.exports = levelsFilterFactory;
}