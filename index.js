'use strict';
var React = require('react');
module.exports = React.createClass({
	render: function() {
		for(var i=0; i < this.props.children.length; i++) {
			if(this.props.children[i].props.page === this.props.page) {
				return this.props.children[i];
			}
		}

		return this.props.notFound || <div>page not found</div>;
	}
});