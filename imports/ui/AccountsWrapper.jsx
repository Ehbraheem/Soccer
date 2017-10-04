import React, { Component } from 'react'
import { Template } from 'meteor/templating'
import { Blaze } from 'meteor/blaze'
import ReactDOM from 'react-dom'


export default const class AccountsWrapper extends Component {

	componentDidMount() {
		this.view = Blaze.render(Template.loginButtons,
			ReactDOM.findDOMNode(this.refs.container)
		)
	}

	componentWillUnmount() {
		Blaze.remove(this.view)
	}

	render() {
		return <span ref="container" />
	}
}